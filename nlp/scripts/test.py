from PyPDF2 import PdfFileReader
import pdftitle
import json
from summary import generate_summary
# Converts Scanned PDFs to Readable PDFs
import textract

# Tokenizer
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords


def get_metadata(path):
    # Checks if Scanned PDF (Needs to be added)

    text = ""
    curr_page = 0
    with open(path, 'rb') as f:
        pdf = PdfFileReader(f)
        info = pdf.getDocumentInfo()
        number_of_pages = pdf.getNumPages()

    while curr_page < number_of_pages:
        page = pdf.getPage(curr_page)
        curr_page += 1
        text += page.extractText() 

    metadata = {}
    metadata['author'] = info.author
    metadata['creator'] = info.creator
    metadata['producer'] = info.producer
    metadata['subject'] = info.subject
    metadata['title'] = info.title
    metadata['numpages'] = number_of_pages
    metadata['summary'] = generate_summary(text)
    return metadata


#def check_scannable(pdf):
#    counter 


if __name__ == '__main__':
    path = 'test.pdf'
    print(get_metadata(path))
