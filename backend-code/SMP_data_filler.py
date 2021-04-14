import xlsxwriter
import xlrd
from django.core.files.images import ImageFile
import importlib
import os
import django

os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()
from account.models import SIG
from SMP.models import SMP


def excel_read(file, sheet_name='Sheet1'):
    book = xlrd.open_workbook(file)
    sheet = book.sheet_by_name(sheet_name)
    data = [[sheet.cell_value(r, c) for c in range(sheet.ncols)]
            for r in range(sheet.nrows)]
    return data


def excel_write(dataset, file, worksheet_name="Usernames"):
    workbook = xlsxwriter.Workbook(file)
    worksheet = workbook.add_worksheet(worksheet_name)
    n = 1
    for data in dataset:
        c = 'A'
        for x in data:
            cell = c+str(n)
            worksheet.write(cell, x)
            c = chr(ord(c)+1)
        n += 1
    workbook.close()


l = excel_read('SMP Database.xlsx', 'Sheet1')[1:]
for row in l:
    name = row[0].strip()
    sigs = row[1].strip().split(',')
    l = []
    for sig in sigs:
        l.append(SIG.objects.get(name=sig))
    sigs = l
    summary = row[2].strip()
    file_url = row[3].strip()
    img_url = "https://docs.google.com/spreadsheets/d/1NRIB5Rca8aI2NTQA3HSB0ZOswtUIXYHmYqso_-JFBzo/edit#gid=0"
    softwares = row[5].strip()
    obj = SMP.objects.create(
            name=name,
            summary=summary,
            file_url=file_url,
            img_url=img_url,
            softwares=softwares
        )
    obj.sigs.set(sigs)
    obj.save()
    print(name)