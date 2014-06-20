import requests

r = requests.get("http://www.last.fm/2.0/?method=user.gettopartists&user=alisatrocity&api_key=8148fb40ef9511752203d2c4591e63d0")

print r.status_code
