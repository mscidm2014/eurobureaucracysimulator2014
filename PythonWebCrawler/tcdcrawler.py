from bs4 import BeautifulSoup
import requests
import re, html.entities
import html.parser


searchList = []
tidiedSearchList = []

##
# Removes HTML markup from a text string.
#
# @param text The HTML source.
# @return The plain text.  If the HTML source contains non-ASCII
#     entities or character references, this is a Unicode string.

# def strip_html(text):
#     def fixup(m):
#         text = m.group(0)
#         if text[:1] == "<":
#             return "" # ignore tags
#         if text[:2] == "&#":
#             try:
#                 if text[:3] == "&#x":
#                     return chr(int(text[3:-1], 16))
#                 else:
#                     return chr(int(text[2:-1]))
#             except ValueError:
#                 pass
#         elif text[:1] == "&":
#             entity = html.entities.entitydefs.get(text[1:-1])
#             if entity:
#                 if entity[:2] == "&#":
#                     try:
#                         return chr(int(entity[2:-1]))
#                     except ValueError:
#                         pass
#                 else:
#                     return unicode(entity, "iso-8859-1")
#         return text # leave as is
#     return re.sub("(?s)<[^>]*>|&#?\w+;", fixup, text)

# TCD search URL our search terms will be inserted into
website="http://www.tcd.ie/assets/php/tcd-search/1/proxies/google-search.php?" 

# Wikipedia URL our search terms are derived from 
url = "http://en.wikipedia.org/wiki/Glossary_of_business_and_management_terms"

# Get the Wikipedia site, read its contents and create a BeautifulSoup object
r = requests.get(url)
page = r.text
soup = BeautifulSoup(page)

# Add all <ul> tags in soup to a list
uls = soup.findAll("ul")

#Find all <li> tags in each <ul> tag and append them to the list of search terms
for ul in uls:
    for li in ul.findAll("li"):
        searchList = searchList + [li]


# Purge the text of definitions of terms and other unwanted fluff
for item in searchList:
        text = item.get_text()
        if "-" in text:
                dashHead, dashSep, dashTail = text.partition(" -")
                text = dashHead
        elif ":" in text:
                colonHead, colonSep, colonTail = text.partition(" :")
                text = dashHead
        elif "<" in item:
                 colonHead, colonSep, colonTail = text.partition("<")
                 text = dashHead


        tidiedSearchList = tidiedSearchList + [text]


def getSearchResult(searchList):

    # Gets the results of a search for each of the search terms on the Wikipedia page

    searchTerms = []
    for item in searchList:
        searchQuery = item
        
        # Name/value pairs to be appended to the URL
        postSearch = { "q" : searchQuery,
        "site" : "&sitesearch",
        "start" : 0,
        "ie" : "utf-8",
        "oe" : "UTF-8",
        "num" : 10 }

        search = requests.get(website, params = postSearch)
        searchTerms.append(search.text)

    return searchTerms


def parseSearchResult(search):

    # Creates a soup for each XML search result and appends it to a text file 

    counter = 0
    for item in search:
            soup = BeautifulSoup(item, "xml", from_encoding="utf-8")
            print(soup.prettify("utf-8")
            listOfSearchResults = soup.findAll("S")
            textFile = open("output3.txt", "a")
            textFile.write(tidiedSearchList[counter] + "\n")
            counter = counter + 1

            for item in listOfSearchResults:
               text = item.get_text()
               textFile.write(text + "\n")


    textFile.close()

    

if __name__ == "__main__":
    searchResult = getSearchResult(searchList)
    parseSearchResult(searchResult)
    
