import xlsxwriter
import xlrd
from django.core.files.images import ImageFile
import importlib
import os
import django


os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()

from SMP.models import SMP
from account.models import User
from sig.models import SIG


def excel_read(file, sheet_name='Sheet1'):
    book = xlrd.open_workbook(file)
    sheet = book.sheet_by_name(sheet_name)
    data = [[sheet.cell_value(r, c) for c in range(5)]
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

data = excel_read('ISTE 2021-22 members.xlsx')[1:]
i = 0
while i < len(data):
    data[i][0] = int(data[i][0])
    if type(data[i][-1]) == float:
        data[i][-1] = str(int(data[i][-1]))
    else:
        data[i][-1] = str(data[i][-1])
    i += 1
print(data[0:10])

final = [['Name', 'Rollno', 'Username', 'Pwd', 'Batch']]
for row in data:
    name = row[1].strip()
    batch = row[0]
    rollno = row[2].strip()
    emailid = row[3].strip()
    contact = row[4]

    print(name)
    if ' ' in name:
        fname, lname = name.split(' ', 1)
        username = name.split(' ')[0]+name.split(' ')[-1]
    else:
        fname, lname = name, ' '
        username = name
    username = username.lower()
    password = username+rollno

    user = User(username=username,
                first_name=fname,
                last_name=lname,
                email=emailid,
                batch_of=batch,
                phone_number=contact)
    user.save()
    user.set_password(password)
    user.avatar = ImageFile(open("media/profile_pictures/generic.png", "rb"))
    user.save()
    print(name + ' Done')
    final.append([name, rollno, username, password, batch])

excel_write(final, 'LoginDetails.xlsx')






# SIGS = ['Catalyst', 'Charge', 'Chronicle', 'Clutch',
#         'Concrete', 'Create', 'Credit', 'Crypt']
# # data = {}

# # for sig in SIGS:
# #     l = excel_read('SIG wise Members 2020-21.xlsx', sig)[1:]
# #     for row in l:
# #         if row[2].strip() != 'Final Year':
# #             name = row[1].strip()
# #             rollno = row[3].strip()
# #             year = row[2].strip()
# #             if year == 'Second Year':
# #                 year = 2023
# #             else:
# #                 year = 2022
# #             email = row[4].strip()
# #             contact = str(row[6]).split('.')[0].strip()
# #             if rollno in data:
# #                 data[rollno]['sigs'].append(sig)
# #             else:
# #                 data[rollno] = {'name': name,
# #                                 'year': year,
# #                                 'email': email,
# #                                 'contact': contact,
# #                                 'sigs': [sig]}

# # final = [['Name', 'Batch', 'Rollno.', 'Email ID',
# #           'Contact No.', 'SIG 1', 'SIG 2', 'SIG 3', 'SIG 4', 'SIG 5']]

# # for rollno in data:
# #     l = [data[rollno]['name'], data[rollno]['year'], rollno, data[rollno]
# #          ['email'], data[rollno]['contact']]+data[rollno]['sigs']
# #     final.append(l)

# # excel_write(final,'SIG wise ISTE Members 2021-22.xlsx')

# final = [['Name', 'Username', 'Password', 'SIG 1', 'SIG 2', 'SIG 3', 'SIG 4']]

# l = excel_read('SIG wise ISTE Members 2021-22.xlsx', 'Sheet1')[1:]
# for row in l:
#     name = row[0].strip()
#     batch = int(row[1])
#     rollno = row[2].strip()
#     emailid = row[3].strip()
#     contact = str(row[4]).split('.')[0].strip()
#     sigs = row[5:]
#     # m = []
#     # for sig in sigs:
#     #     if sig!='':
#     #         m.append(SIGS.index(sig)+1)
#     # sigs = m

#     l = []
#     for sig in sigs:
#         if sig.strip() != '':
#             obj = SIG.objects.get(name=sig.strip())
#             l.append(obj)
#     sigs = l

#     fname, lname = name.split(' ', 1)
#     username = name.split(' ')[0]+name.split(' ')[-1]
#     username = username.lower()
#     password = username+rollno

#     user = User(username=username,
#                 first_name=fname,
#                 last_name=lname,
#                 email=emailid,
#                 batch_of=batch,
#                 phone_number=contact)
#     user.save()
#     # user.is_staff = True
#     # for sig in sigs:
#     #     user.sigs.add(sig)
#     # user.groups.add(Group.objects.get(name='Member'))
#     user.set_password(password)
#     user.avatar = ImageFile(open("media/profile_pictures/generic.png", "rb"))
#     user.save()
#     print(name)
#     final.append([name, username, password]+row[5:])

# excel_write(final, 'LoginDetails.xlsx')
