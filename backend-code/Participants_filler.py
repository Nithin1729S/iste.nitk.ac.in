import importlib
import os
import string
import random
import django
import xlsxwriter
import xlrd

os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()

from ctf.models import Team, UserQuestion, Question
from account.models import User


def excel_read(file, sheet_name='Sheet1'):
    book = xlrd.open_workbook(file)
    sheet = book.sheet_by_name(sheet_name)
    data = [[sheet.cell_value(r, c) for c in range(sheet.ncols)]
            for r in range(sheet.nrows)]
    return data


def excel_write(dataset, file, worksheet_name="Sheet1"):
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

def getPassword(N=8):
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=N))

def createUserQ(obj):
    objQ = Question.objects.all()
    for i in objQ:
        curObj = UserQuestion(userId=obj, questionId=i)
        curObj.save()


l = [['Team Names', 'Roll No.', 'Username', 'Password','Email']]
data = excel_read("Participants.xlsx", "Sheet1")[1:]
for row in data:
    team_name = row[0].strip()
    rollNo = str(row[1]).strip()
    password = getPassword()
    email = row[3].strip()
    username = team_name.lower().replace(' ', '')

    objUser = User(username=username, first_name=team_name, batch_of=2000)
    objUser.save()
    objUser.set_password(password)
    objUser.save()
    objTeam = Team(userId=objUser, team_name=team_name, roll_number=rollNo)
    objTeam.save()
    l.append([team_name, rollNo, username, password,email])
    createUserQ(objTeam)

excel_write(l, 'LoginDetails.xlsx')
