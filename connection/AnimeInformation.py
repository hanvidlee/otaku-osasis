import requests
import math
from time import sleep
import json

class Anime:
    def __init__(self, url: str):
        self.url = url

    def jsonDump(self):
        '''
        Writes a JSON file that has all the necessary information about animes
        '''
        request = requests.get(self.url, params={'order_by': "mal_id"})
        result = {}
        totalCount = request.json()['pagination']['items']['total']
        numOfPages = totalCount // 25
        print(numOfPages)
        # Iterate through each page
        for i in range(1, 10):
            print(i)
            print(type(i))
            # GET request on each page
            request = requests.get(self.url, params={'order_by': "mal_id", "page": i})
            # Sleep to wait in between API calls
            sleep(0.5)
            print(request.json())
            for item in request.json()['data']:
                result.update({item['mal_id']: {"title": item["title"], "large_image_url": item["images"]["jpg"]["large_image_url"]}})
        
        with open('data.json', 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False, indent=4)
        

def main():
    animeQuery = Anime("https://api.jikan.moe/v4/anime")
    animeQuery.jsonDump()

if __name__ == "__main__":
    main()