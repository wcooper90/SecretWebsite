import os
import sys
import requests
import urllib.request
from bs4 import BeautifulSoup
import json


class Search():

    def __init__(self, keyWords, mode):
        self.keyWords = keyWords.split(" ")
        self.mode = mode
        self.root = os.getcwd()
        self.max_results = 20
        self.final_results = {}


    def lampoon_search(self):
        self.lampoon_results = {}


    def concatenate_results(self):
        self.final_results = self.google_results + self.lampoon_results
        self.mess_up_results()
        return self.final_results


    def google_search(self):
        base = 'https://www.google.com/search?q='
        url = base + " ".join(self.keyWords)
        content = requests.get(url).text
        soup = BeautifulSoup(content,'html.parser')
        results = []
        for g in soup.find_all('div'):

            anchors = g.find_all('a')
            if anchors:
                try:
                    link = anchors[0]['href'].split("&")[0]
                    type = 'website'
                    description = g.find(class_="BNeawe s3v9rd AP7Wnd").getText()
                    if link[:8] == "/search":
                        continue
                    elif link[:7] == "/imgres":
                        link = link[15:]
                        type = "image"
                    else:
                        link = link[7:]
                    title = g.find('h3').text
                    item = {
                        "title": title,
                        "link": link,
                        "description": description,
                        "type": type
                    }
                    results.append(item)
                except:
                    continue

        # get rid of first link, always a google search link
        results = results[1:]
        # get rid of every other link, duplicate
        results = results[::2]

        self.google_results = results
        return results


    def mess_up_results(self):
        pass


# driver code
object = Search("apple", "regular")
object.google_search()
