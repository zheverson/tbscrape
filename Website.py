from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from bs4 import BeautifulSoup


class State:
    def __init__(self):
        self.position = 0

    def forward(self):
        self.position += 1

    def backward(self):
        if 0 == self.position:
            print('Cannot backward at 0')
            raise TypeError
        self.position -= 1

    def __str__(self):
        return str(self.position)


class Taobao:
    def __init__(self, home_url='https://login.taobao.com/member/login.jhtml', username='leaningho@yahoo.com',
                 password='#l#j881023'):
        self.home_url = home_url
        self.username_tag = 'TPL_username'
        self.password_tag = 'TPL_password'
        self.username = username
        self.password = password
        self.driver = webdriver.Chrome()
        self.state = State()
        self.data = []
        self.max_page = 0

    def login(self):
        self.driver.get(self.home_url)
        username = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.NAME, self.username_tag)))
        password = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.NAME, self.password_tag)))
        username.send_keys(self.username)
        password.send_keys(self.password)
        self.state.forward()

    def goto_seller_admin(self):
        if self.state.position < 1:
            print('must login first')
            raise IndexError

        self.driver.find_elements_by_tag_name('button')[1].send_keys(Keys.RETURN)
        seller_admin = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.LINK_TEXT, '卖家中心')))
        seller_admin.click()
        good_sell = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.LINK_TEXT, '出售中的宝贝')))
        good_sell.click()
        self.max_page = WebDriverWait(self.driver, 5).until(
                EC.presence_of_all_elements_located((By.XPATH, "//li[@class='next-page']/preceding-sibling::li")))[
            -1].text
        self.state.forward()
        self.start_scrape()

    def start_scrape(self):
        if self.state.position < 2:
            print('must complete first two steps')
            raise IndexError

        for j in range(int(self.max_page)):
            amount = len(WebDriverWait(self.driver, 5).until(
                    EC.presence_of_all_elements_located(
                            (By.XPATH, "//td[@class='desc']/div/p/a[@class='item-title']"))))
            for i in range(amount):
                print("page:{}, item:{}, max_page:{}".format(j, i, self.max_page))
                item_title_xpath = "//div[@id='goods-on-sale']//tr[contains(@class, 'with-sid')][{0}]//a[@class='item-title']".format(
                        i + 1)
                item_title = WebDriverWait(self.driver, 5).until(
                        EC.element_to_be_clickable((By.XPATH, item_title_xpath)))
                item_title_value = item_title.text
                item_price = self.driver.find_elements_by_xpath("//td[@class='price-row']")[i].text
                inventory_path = "//tr[contains(@class, 'with-sid')][{0}]//td[@class='price-row']/following-sibling::td".format(
                        i + 1)
                item_inventory = self.driver.find_element_by_xpath(inventory_path).text
                ActionChains(self.driver).move_to_element(item_title).click(item_title).perform()
                WebDriverWait(self.driver, 5).until(self.found_window(1))

                try:
                    WebDriverWait(self.driver, 2).until(
                            EC.text_to_be_present_in_element((By.ID, 'J_isku'), '颜色分类'))
                    bs = BeautifulSoup(self.driver.page_source)
                    sku_names = bs.find('div', id='J_isku').find_all('li')
                    skus = self.driver.find_elements_by_xpath("//div[@id='J_isku']/div/dl/dd/ul/li")
                    for sub_index, sku_name in enumerate(sku_names):
                        if '现货' in sku_name.get_text():
                            ActionChains(self.driver).move_to_element(skus[sub_index]).click(skus[sub_index]).perform()
                            self.data.append([item_title_value, sku_name.find('span').get_text(),
                                              self.driver.find_element_by_xpath(
                                                      "//dl[@class='tb-amount tb-clear']/dd/em/span").text,
                                              self.driver.find_element_by_xpath(
                                                      "//li[@id='J_StrPriceModBox']/div").text])
                    self.driver.close()
                    self.driver.switch_to.window(self.driver.window_handles[0])
                except TimeoutException:
                    self.driver.close()
                    self.driver.switch_to.window(self.driver.window_handles[0])
                    if '现货' in item_title_value:
                        self.data.append([item_title_value, '', item_inventory, item_price])
            next_page = self.driver.find_element_by_xpath("//li[@class='next-page']/a")
            ActionChains(self.driver).move_to_element(next_page).click(next_page).perform()

    def found_window(self, direction):
        def predicate(driver):
            if direction == 1:
                try:
                    driver.switch_to.window(driver.window_handles[1])
                except IndexError:
                    return False
                else:
                    return True
            else:
                try:
                    driver.switch_to.window(driver.window_handles[direction + 1])
                    driver.switch_to.window(driver.window_handles[direction])
                except IndexError:
                    return False
                else:
                    return True

        return predicate
