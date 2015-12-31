from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

a = webdriver.Chrome()

a.get('https://login.taobao.com/member/login.jhtml')

password = WebDriverWait(a, 5).until(EC.presence_of_element_located((By.NAME, 'TPL_password')))

