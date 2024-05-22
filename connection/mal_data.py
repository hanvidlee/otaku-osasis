import requests
import math
from time import sleep
import json

# for i in range(1, 25):
#     print(i)


url = "https://api.jikan.moe/v4/genres/anime"

r = requests.get(url)
print(r)
print(r.json()['data'][8])


topAnime = "https://api.jikan.moe/v4/anime"

request = requests.get(topAnime, params={'order_by': "mal_id", "page": 194})
print(request.json())
print(request.json()['data'][0]['mal_id'])

data = {request.json()['data'][0]['mal_id']: {"title": request.json()['data'][0]["title"], "large_image_url": request.json()['data'][0]["images"]["jpg"]["large_image_url"] }}
print(data)

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)


class Anime:
    def __init__(self, url: str):
        self.url = url

    def jsonDump(self):
        '''
        '''
        request = requests.get(topAnime, params={'order_by': "mal_id"})
        result = {}
        totalCount = request.json()['pagination']['items']['total']
        numOfPages = totalCount // 25
        print(numOfPages)
        # Iterate through each page
        for i in range(1, numOfPages):
            print(i)
            print(type(i))
            # GET request on each page
            request = requests.get(topAnime, params={'order_by': "mal_id", "page": i})
            # Sleep to wait in between API calls
            sleep(0.5)
            print(request.json())
            for item in request.json()['data']:
                result.append(item['mal_id'])
        return result


# animeQuery = Anime("https://api.jikan.moe/v4/anime")
# print(animeQuery.getAnimeID())
# print(len(animeQuery.getAnimeID()))