import importlib
import os
import django
import xlsxwriter
import xlrd

os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()
from account.models import User
from ctf.models import Team, UserQuestion, Question

def excel_read(file, sheet_name='Sheet1'):
    book = xlrd.open_workbook(file)
    sheet = book.sheet_by_name(sheet_name)
    data = [[sheet.cell_value(r, c) for c in range(sheet.ncols)]
            for r in range(sheet.nrows)]
    return data

def createUserQ(obj):
    objQ = Question.objects.all()
    for i in objQ:
        curObj = UserQuestion(userId=obj, questionId=i, score=i.points)
        curObj.save()

data = excel_read("Participants.xlsx", "Sheet1")[1:]
for row in data:
    team_name = row[0].strip()
    if not type(row[1]) == str:
        rollNo = str(row[1]).strip()
    else:
        rollNo = row[1].strip()
    password = row[2].strip()
    objUser = User(username=team_name, password=password)
    objUser.save()
    objTeam = Team(userId=objUser, team_name=team_name, roll_number=rollNo)
    objTeam.save()
    createUserQ(objTeam)