import goslate
text = 'Googletrans is a free and unlimited python library that implemented Google Translate API. This uses the Google Translate Ajax API to make calls to such methods as detecting and translating.'
gs = goslate.Goslate()
french = gs.translate(text, 'ja')
english = gs.translate(french, 'en')
print(text)
print(english)
