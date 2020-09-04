# Note OCR w/ tesseract to expensive in terms of computation and time

import sys
import os
import pytesseract
from PIL import Image
from pdf2image import convert_from_path

#img = Image.open("test.pdf")
#text = pt.image_to_string(img)

#pytesseract.pytesseract.tesseract_cmd = '/usr/bin/tesseract'


#img = convert_from_path("test.pdf")
#text = pt.image_to_string(img)

#print(text)
PDF_file = "test.pdf"

pages = convert_from_path(PDF_file, 500)
image_counter = 1
for page in pages: 
    filename = "page_"+str(image_counter)+".jpg"
    page.save(filename, 'JPEG')
    image_counter = image_counter + 1

filelimit = image_counter-1

outfile = "out_text.txt"
f = open(outfile, "a")

for i in range(1, filelimit + 1):
    filename = "page_"+str(i)+".jpg"
    text = str(((pytesseract.image_to_string(Image.open(filename)))))
    text = text.replace('-\n', '')
    f.write(text) 

f.close() 
