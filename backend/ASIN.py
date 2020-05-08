from lxml import html
import requests
from time import sleep



tech_dict = {"macbook air": "B0863D4XJW", "iphone 11 pro": "B07XSRMKHY", "xbox one x + battlefield 5" : "B07GL526BQ", "fitbit versa 2" : "B07TWFVDWT", "airpods pro": "B07ZPC9QD4",
             "samsung galaxy s20": "B082XY23D5", "surface pro 4": "B01606NQ62", "amazon alexa echo": "B07NFTVP7P", "kindle paperwhite": "B07PS737QQ", "apple magicmouse": "B016QO5YNG",
             "mophie product red charging phone case": "B07R6NK9SV", "airpods": "B07PXGQC1Q", "apple tv": "B075NHCSS4", "powerbeats pro": "B07WBTX9FH", "jbl flip 5": "B07QK2SPP7", "acer chromebook r11":"B086N1HBDH"}
headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36"}

tech_info = []
tech_features = []


def information_amazon(f_url):

    page = requests.get(f_url, headers=headers)
    sleep(3)
    doc=html.fromstring(page.content)

    XPATH_TITLE = '//*[@id="productTitle"]/text()'
    RAW_TITLE = doc.xpath(XPATH_TITLE)
    TITLE = ''.join(RAW_TITLE).strip()
    print(TITLE + '\n')
    tech_info.insert(0,TITLE)

    sleep(0.5)

    XPATH_AVAILABILITY = '//*[@id="availability"]/span/text()'
    RAW_AVAILABILITY = doc.xpath(XPATH_AVAILABILITY)
    AVAILABILITY = ''.join(RAW_AVAILABILITY).strip()
    print(AVAILABILITY + '\n')
    tech_info.insert(1,AVAILABILITY)

    sleep(0.5)

    XPATH_PRICE = '//*[@id="priceblock_ourprice"]/text()'
    RAW_PRICE = doc.xpath(XPATH_PRICE)
    PRICE = ''.join(RAW_PRICE).strip()
    print(PRICE + '\n')
    tech_info.insert(2,PRICE)

    sleep(0.5)

    count = 1
    while True:
        XPATH_DESCRIPTION = "//*[@id=\"feature-bullets\"]/ul/li[%d]/span/text()" % count
        RAW_DESCRIPTION = doc.xpath(XPATH_DESCRIPTION)
        DESCRIPTION = ''.join(RAW_DESCRIPTION).strip()
        tech_features.append(DESCRIPTION)


        if DESCRIPTION == '':
            break

        print(DESCRIPTION)
        count += 1
        sleep(1)
    return tech_info,tech_features
def readasin():

    print("VAULT OPS \n")
    sleep(1.5)

    yn = input("ASIN? [y/n] ")
    print("\n")
    if yn == 'y':
        ASIN = input("provide ASIN: ")
        url = "http://www.amazon.com/dp/%s" % ASIN
    else:
        print("options include: \n")
        for i in tech_dict.keys():
            print(i)
        print("\n")
        sleep(1.5)
        ASIN = input("provide tech: ").lower()
        url = "http://www.amazon.com/dp/%s" % tech_dict[ASIN]

    print("processing: "+url)

    information_amazon(url)


readasin()

tech = {'name': tech_info[0], 'availability': tech_info[1], 'price': tech_info[2]}
information = {'name': tech_info[0], 'information': tech_features}
