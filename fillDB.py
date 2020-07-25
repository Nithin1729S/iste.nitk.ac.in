import importlib,os
import django
os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()
from account.models import User,SIG
from project.models import Project
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

l = excel_read('members.xlsx','Sheet1')[1:]
accounts = ['Name','Usernames']
for row in l:
	email=row[0]
	if len(row[1].split())>1:
		first_name,last_name = row[1].strip().split(maxsplit=1)
	else:
		first_name,last_name = row[1],' '
	username=row[1].strip().split()[0].lower()+row[1].strip().split()[-1].lower()
	if '.' in row[2]:
		phone_number=row[2][:-2]
	else:
		phone_number=row[2]
	batch_of=int(row[3])
	gender=row[4]
	hostel_address='N/A'
	obj = User.objects.create(
		email=email,
		first_name=first_name,
		last_name=last_name,
		username=username,
		phone_number=phone_number,
		batch_of=batch_of,
		gender=gender,
		hostel_address=hostel_address,
		)
	obj.save()
	obj.avatar=ImageFile(open('media/profile_pictures/generic.png','rb'))
	obj.set_password('istenitk')
	obj.Active=False
	obj.save()
	accounts.append([row[1],username])
	print(row[1])

excel_write(accounts,'Username.xlsx')
print('Done')

# l = excel_read('projects.xlsx','sheet1')[1:]
# for row in l:
# 	name = row[3]
# 	tags = row[8]
# 	sig_choice = SIG.objects.filter(name=row[4][0]+row[4][1:].lower())
# 	year = 2020
# 	summary = row[5]
# 	description = row[6]
# 	isFeatured = False
# 	img_url = row[7]

# 	first_name,last_name = row[2].strip().split(maxsplit=1)
# 	obj = Project.objects.create(
# 		name=name,
# 		tags=tags,
# 		year=year,
# 		summary=summary,
# 		description=description,
# 		isFeatured=isFeatured,
# 		img_url=img_url
# 		)
# 	obj.save()
# 	obj.editable_by.set(User.objects.filter(
# 		first_name=first_name,
# 		last_name=last_name))
# 	obj.sigs.set(sig_choice)
# 	obj.save()
# 	print(row[2])
