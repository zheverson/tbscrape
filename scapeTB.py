# coding: utf-8
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from bs4 import BeautifulSoup

a = webdriver.Chrome()
a.get('https://login.taobao.com/member/login.jhtml')
username = WebDriverWait(a, 5).until(EC.presence_of_element_located((By.NAME, 'TPL_username')))
password = WebDriverWait(a, 5).until(EC.presence_of_element_located((By.NAME, 'TPL_password')))
username.send_keys('leaningho@yahoo.com')
password.send_keys('#l#j881023')

a.find_elements_by_tag_name('button')[1].send_keys(Keys.RETURN)
seller_admin = WebDriverWait(a, 5).until(EC.presence_of_element_located((By.LINK_TEXT, '卖家中心')))
seller_admin.click()
good_sell = WebDriverWait(a, 5).until(EC.presence_of_element_located((By.LINK_TEXT, '出售中的宝贝')))
good_sell.click()
max_page = WebDriverWait(a, 5).until(
        EC.presence_of_all_elements_located((By.XPATH, "//li[@class='next-page']/preceding-sibling::li")))[-1].text
data = []


def found_window(aaa):
    def predicate(driver):
        if aaa == 1:
            try:
                driver.switch_to.window(driver.window_handles[1])
            except IndexError:
                return False
            else:
                return True
        else:
            try:
                driver.switch_to.window(driver.window_handles[aaa + 1])
                driver.switch_to.window(driver.window_handles[aaa])
            except IndexError:
                return False
            else:
                return True

    return predicate

for j in range(int(max_page)):
    amount = len(WebDriverWait(a, 5).until(
            EC.presence_of_all_elements_located((By.XPATH, "//td[@class='desc']/div/p/a[@class='item-title']"))))
    for i in range(amount):
        print("page:{}, item:{}".format(j, i))
        item_title_xpath = "//div[@id='goods-on-sale']//tr[contains(@class, 'with-sid')][{0}]//a[@class='item-title']".format(
                i + 1)
        item_title = WebDriverWait(a, 5).until(EC.element_to_be_clickable((By.XPATH, item_title_xpath)))
        item_title_value = item_title.text

        item_price = a.find_elements_by_xpath("//td[@class='price-row']")[i].text
        inventory_path = "//tr[contains(@class, 'with-sid')][{0}]//td[@class='price-row']/following-sibling::td".format(
                i + 1)
        item_inventory = a.find_element_by_xpath(inventory_path).text
        ActionChains(a).move_to_element(item_title).click(item_title).perform()
        WebDriverWait(a, 5).until(found_window(1))

        try:
            sku_div = WebDriverWait(a, 1.5).until(EC.text_to_be_present_in_element((By.ID, 'J_isku'), '颜色分类'))
            bs = BeautifulSoup(a.page_source)
            sku_names = bs.find('div', id='J_isku').find_all('li')
            skus = a.find_elements_by_xpath("//div[@id='J_isku']/div/dl/dd/ul/li")
            try:
                selected = a.find_element_by_xpath("//div[@id='J_isku']//li[@class='tb-txt tb-selected']")
                ActionChains(a).move_to_element(selected).click(selected).perform()
            except NoSuchElementException:
                pass
            finally:
                for sub_index, sku_name in enumerate(sku_names):
                    if '现货' in sku_name.get_text():
                            ActionChains(a).move_to_element(skus[sub_index]).click(skus[sub_index]).perform()
                            sub_bs = BeautifulSoup(a.page_source)
                            print([item_title_value, sku_name.find('span').get_text(),
                                         sub_bs.find('dl', class_='tb-amount tb-clear').find('span', id='J_SpanStock').get_text(),
                                         a.find_element_by_xpath("//li[@id='J_StrPriceModBox']/div").text])
                            data.append([item_title_value, sku_name.find('span').get_text(),
                                         sub_bs.find('dl', class_='tb-amount tb-clear').find('span', id='J_SpanStock').get_text(),
                                         a.find_element_by_xpath("//li[@id='J_StrPriceModBox']/div").text])
                a.close()
                a.switch_to.window(a.window_handles[0])
        except TimeoutException:
            a.close()
            a.switch_to.window(a.window_handles[0])
            if '现货' in item_title_value:
                data.append([item_title_value, '', item_inventory, item_price])
    next_page = a.find_element_by_xpath("//li[@class='next-page']/a")
    ActionChains(a).move_to_element(next_page).click(next_page).perform()
