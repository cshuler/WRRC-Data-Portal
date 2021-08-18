import sys
import PyPDF2
import json

pdfFile = open('test.pdf', 'rb')

pdfReader = PyPDF2.PdfFileReader(pdfFile)

info = pdfReader.getDocumentInfo()

x = {
    "title": info.title,
    "authors": info.author,
    "keywords": info['/Keywords']
}

with open('data.json', 'w') as f:
    json.dump(x, f)
