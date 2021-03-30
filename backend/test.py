import requests

url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define"

querystring = {"term":"wat do"}

headers = {
    'x-rapidapi-key': "1f595f36bdmshcd4e6d7439ccdc8p1b679ejsn6dec59167692",
    'x-rapidapi-host': "mashape-community-urban-dictionary.p.rapidapi.com"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
