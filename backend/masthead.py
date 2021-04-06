import os
import sys
import requests
import urllib.request
from bs4 import BeautifulSoup
import json


class MastHead():

    def __init__(self):
        self.url = 'https://harvardlampoon.com/masthead/'

    def lampoon_search(self):
        content = requests.get(self.url).text
        soup = BeautifulSoup(content,'html.parser')
        results = []
        counter = 0
        page = soup.find_all('div', class_='text')[1]
        titles = page.find_all(['a', 'i'])
        strings = [text for text in page.stripped_strings][1:]
        strings2 = []
        returned = []
        for i in range(len(strings) - 1):
            strings2.append(strings[i])
            if strings[i] == ",":
                strings2[i - 1] += ','

        strings = [x for x in strings2 if x != ","][:-1]
        strings2 = []
        title = False
        for i in range(len(strings)):
            if strings[i][-1] == ",":
                strings2.append(strings[i] + " " +  strings[i + 1])
                title = True
            else:
                if title:
                    title = False
                    continue
                else:
                    strings2.append(strings[i])

        strings2.append('Elmer W. Green, 1897-1977, Grand Curator')
        return strings2


# driver code
# object = MastHead()
# object.lampoon_search()
