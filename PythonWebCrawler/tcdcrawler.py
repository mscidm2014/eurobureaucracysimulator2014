from bs4 import BeautifulSoup
import requests
import lxml

website="http://www.tcd.ie/assets/php/tcd-search/1/proxies/google-search.php?"

url = "http://en.wikipedia.org/wiki/Glossary_of_business_and_management_terms"

r = requests.get(url)

page = r.text

soup = BeautifulSoup(page)

section = soup.find("span", id = "Verbs").parent

#verbs = section.find_next("ul").find_all("li")
#verbs = soup.findAll("ul")
#print(verbs)

verbs = []

uls = soup.findAll("ul")

#print(counter)

#nouns = soup.find_all(id = "Nouns")
#print(nouns)

for ul in uls:
    for li in ul.findAll("li"):
        verbs = verbs + [li]

#nounSection = soup.findAll("h2")[2]
#nounSection = soup.find("span", id = "Nouns").parent.next_sibling.next_sibling
#print(nounSection)

#nouns = nounSection.findAll("ul")
#print(nouns)

#for li in verbs:
#    print(li)

tidiedVerbs = []

for item in verbs:
        text = item.get_text()
        if "-" in text:
                dashHead, dashSep, dashTail = text.partition(" -")
                text = dashHead
        elif ":" in text:
                colonHead, colonSep, colonTail = text.partition(" :")
                text = dashHead
        elif "<" in item:
                 #print(text)
                 colonHead, colonSep, colonTail = text.partition("<")
                 text = dashHead


        tidiedVerbs = tidiedVerbs + [text]


def getSearchResult(verbs):
    searchTerms = []
    #print(len(verbs))
    for item in verbs:
        searchQuery = item
        
        postSearch = { "q" : searchQuery,
        "site" : "&sitesearch",
        "start" : 0,
        "ie" : "utf-8",
        "oe" : "UTF-8",
        "num" : 10 }

        search = requests.get(website, params = postSearch)
        #search = requests.get(website)
        #print(search.url)
        #print(search.url == "http://www.tcd.ie/assets/php/tcd-search/1/proxies/google-search.php?q=hello&site=&sitesearch=&start=0&ie=utf-8&oe=UTF-8&num=10")
        #print(search.text)
        searchTerms.append(search.text)

    return searchTerms


def parseSearchResult(search):
    counter = 0
    for item in search:
            soup = BeautifulSoup(item, "xml", from_encoding="utf-8")
            listOfSearchResults = soup.findAll("S")
            textFile = open("output2.txt", "a")
            textFile.write(tidiedVerbs[counter] + "\n\n")
            counter = counter + 1

            for item in listOfSearchResults:
               text = item.get_text()
               textFile.write(text + "\n\n")


    textFile.close()

    

if __name__ == "__main__":
    searchResult = getSearchResult(tidiedVerbs)
    parseSearchResult(searchResult)
    
