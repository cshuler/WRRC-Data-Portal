---
layout: page
title: "Natural Langauge Processing"
---

##### A Python script that ultizies NLP techinques and stratigies to extract meta-data from various document formats.

#

## How does it Work?
This script uses external pdf libraries to get meta-data if provided by the document. Although this may not get all meta-data, we also extract the text using the various methodology we investigated. Afterward, this text is processed through a Python library called NTLK (Natural Language Toolkit) in which we use to filter, process, and extract other missing meta-data.

## Limitations
Currently, this tool won't always extract 100% of the metadata we've selected. Furthermore, there are some document test cases where some meta-data have not been extracted accurately. We are still investigating ways to find consistent add-on methods to enhance meta-data extraction without compromising other test cases. 

## Methods
##### Optical Character Recongition
By using a python library called Pytesseract, we can read and extract text through images. Which means we would have to convert our documents to an image format. However, many issues arose using this method, such as text from graphs being extracted as well as text being misunderstood upon extraction. Furthermore, depending on the complexity of the document, image preprocessing may be needed to improve extraction accuracy. The biggest issue is that this method seems costly on large pdf files due to a lot of conversions between files.


##### HTML Extrataction 
By using a python library called BeautifulSoup, we can convert segments of our documents into HTML elements. This allows us to filter out specific HTML elements, thus preventing potential processing issues such as processing non-text elements (images, charts, graphs, and tables). As mentioned previously, we are extracting text, and in most cases, these non-text elements will only hinder the process.

##### Neural Network Approach (Investigating)







