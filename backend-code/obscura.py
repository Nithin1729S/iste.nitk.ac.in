import importlib,os
import django
os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()
from App.models import Question
from django.core.files.images import ImageFile
import xlrd,xlsxwriter

def excel_read(file,sheet_name='Sheet1'):  
        book = xlrd.open_workbook(file)
        sheet = book.sheet_by_name(sheet_name)
        data = [[sheet.cell_value(r, c) for c in range(sheet.ncols)] for r in range(sheet.nrows)]
        return data

def excel_write(dataset,file,worksheet_name="Usernames"):
        workbook = xlsxwriter.Workbook(file)
        worksheet = workbook.add_worksheet(worksheet_name)
        n=1
        for data in dataset:
            c='A'
            for x in data:
                cell=c+str(n)
                worksheet.write(cell, x)
                c=chr(ord(c)+1)
            n+=1
        workbook.close()

l = excel_read('Obscura.xlsx','Responses')[1:]
for row in l:
	quest = str(row[1]).strip()
	op1 = str(row[2]).strip()
	op2 = str(row[3]).strip()
	op3 = str(row[4]).strip()
	op4 = str(row[5]).strip()
	diff = str(int(float(str(row[6]).strip())//1))
	ans = str(int(float(str(row[7]).strip())//1))
	obj = Question.objects.create(
		quest = quest,
		op1 = op1,
		op2 = op2,
		op3 = op3,
		op4 = op4,
		ans = ans,
		difficulty = diff
		)
	obj.save()
	
