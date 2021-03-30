import os
import sys
import requests
import urllib.request
from bs4 import BeautifulSoup
import json
import random
from random import seed, randint
import nltk
from nltk.corpus import wordnet
from api_keys import Keys
from fuzzywuzzy import fuzz



class Search():

    def __init__(self, keyWords, mode, start=0):
        self.keyWords = keyWords.split(" ")
        self.mode = mode
        self.root = os.getcwd()
        self.final_results = []
        self.image_additives = ['fat', 'skinny', 'weird', 'funny', 'stupid', 'green']
        self.news_additives = ['old', 'weird', 'florida', 'smelly']
        self.shopping_additives = ['expensive', 'dirty', 'used', 'dead', 'clear', 'pink']
        self.start = str(start)
        self.seed_counter = random.random()
        seed(self.seed_counter)


    # run this function to begin a sequence of searches
    def search_control(self):

        for word in self.keyWords:
            if fuzz.ratio(word.lower(), "crimson") > 70:
                item = {
                    "title": "Are you sure you want to go there? ",
                    "link": 'https://harvardlampoon.com/',
                    "description": "No, no you're not. Turn back immediately. ",
                    "type": 'error'
                }
                self.final_results.append(item)
                return self.final_results

        if self.mode == "regular":
            if self.keyWords[0].lower() == "define":
                urbanObject = Keys()
                term_string = ' '.join(self.keyWords[1:])
                definition, link = urbanObject.urban_dictionary_search(term_string)
                item = {
                    "title": "Definition of " + term_string,
                    "link": link,
                    "description": definition,
                    "type": "definition"
                }

                self.final_results.append(item)

        self.alter_search()
        self.google_search()
        if self.mode == "regular":
            self.lampoon_search()

        return self.final_results


    def alter_search(self):

        if len(self.keyWords) > 5:
            random_item_from_list = random.choice(self.keyWords)
            self.keyWords.remove(random_item_from_list)
            random_item_from_list = random.choice(self.keyWords)
            self.keyWords.remove(random_item_from_list)

        r = random.random()
        self.seed_counter += 1
        seed(self.seed_counter)

        if r > 0.5:
            if self.mode == "regular":
                self.keyWords.insert(0, random.choice(self.image_additives))

            if self.mode == "image":
                self.keyWords.insert(0, random.choice(self.image_additives))

            if self.mode == "shopping":
                self.keyWords.insert(0, random.choice(self.shopping_additives))

            if self.mode == "news":
                self.keyWords.insert(0, random.choice(self.news_additives))

        # sentiment analysis?


    def lampoon_search(self):
        url = 'https://harvardlampoon.com/?s='
        url += "+".join(self.keyWords)
        content = requests.get(url).text
        soup = BeautifulSoup(content,'html.parser')
        results = []
        counter = 0
        for g in soup.find_all('article'):
            if counter > 3:
                break
            try:
                link = g.find('a', class_="thumb epcl-loader")['href']
                try:
                    description = g.find('p').getText()
                except:
                    description = "???"
                title = g.find('h1').getText()
                type = 'website'
                item = {
                    "title": title,
                    "link": link,
                    "description": description,
                    "type": type
                }
                results.append(item)
                counter += 1
            except:
                continue

        # get rid of every other link, duplicate
        results = results[::2]

        self.lampoon_results = results
        for result in results:
            seed(ord(result['title'][0]))
            self.final_results.insert(randint(0, len(self.final_results)), result)

        return self.final_results


    def concatenate_results(self):
        self.final_results = self.google_results + self.lampoon_results
        self.mess_up_results()
        return self.final_results


    def google_search(self):
        base = 'https://www.google.com/search?q='
        url = base + " ".join(self.keyWords)
        results = []
        if self.mode == 'regular':
            url += "&start=" + self.start
            content = requests.get(url).text
            soup = BeautifulSoup(content,'html.parser')
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

        elif self.mode == "images":
            url += '&tbm=isch'
            url += "&start=" + self.start
            content = requests.get(url).text
            soup = BeautifulSoup(content,'html.parser')
            links = set()
            for g in soup.find_all('div'):
                anchors = g.find_all('img')
                anchors2 = g.find_all('a')
                if anchors:
                    try:
                        link = anchors[0]['src']
                        if link in links:
                            continue
                        links.add(link)
                        type = 'image'
                        description = anchors2[0]['href'].split("&")[0][7:]
                        title = g.find('span', class_="fYyStc").getText()
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

        elif self.mode == "shopping":
            url += '&tbm=shop'
            url += "&start=" + self.start
            content = requests.get(url).text
            soup = BeautifulSoup(content,'html.parser')
            pass

        elif self.mode == "news":
            url += '&tbm=nws'
            url += "&start=" + self.start
            content = requests.get(url).text
            soup = BeautifulSoup(content,'html.parser')
            for g in soup.find_all('div'):
                anchors = g.find_all('a')
                if anchors:
                    try:
                        link = anchors[0]['href'].split("&")[0][7:]
                        type = 'news'
                        description = g.find(class_="BNeawe s3v9rd AP7Wnd").getText()
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
        self.final_results = self.final_results + self.google_results
        return results


    def mess_up_results(self):
        pass


# driver code
# object = Search("apple", "regular")
# object.google_search()
