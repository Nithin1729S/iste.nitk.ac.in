import importlib
import os
import django
import xlsxwriter
import xlrd

os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()
from ctf.models import Question

def excel_read(file, sheet_name='Sheet1'):
    book = xlrd.open_workbook(file)
    sheet = book.sheet_by_name(sheet_name)
    data = [[sheet.cell_value(r, c) for c in range(sheet.ncols)]
            for r in range(sheet.nrows)]
    return data

data = excel_read("Questions.xlsx", "Sheet1")[1:]
for row in data:
    title = row[0].strip()
    description = row[1].strip()
    if type(row[2]) == str:
        points = int(row[2].strip())
    else:
        points = int(row[2])
    url = row[3].strip()
    hint_1_url = row[4].strip()
    hint_2_url = row[5].strip()
    if hint_1_url == '':
        hint_1_url = None
    if hint_2_url == '':
        hint_2_url = None
    answer = row[6].strip()
    objQ = Question(title=title, description=description, points=points, url=url, hint_1_url=hint_1_url, hint_2_url=hint_2_url, answer=answer)
    objQ.save()