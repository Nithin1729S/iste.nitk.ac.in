# Club Website for ISTE NITK

## About
This repository contains code of the website currently live at http://iste.nitk.ac.in. The website allows members of the club to showcase their projects,
add details of upcoming events, conduct recruitments. The website also serves as a data store of all club members. 

## Technologies Used
The backend of the website runs on the popular Python framework - <a href="https://www.djangoproject.com/">Django</a>. <br/>
The frontend of the website heavily relies on <a href="http://materializecss.com/">MaterialCSS</a>, an open source material design framework which runs on top of <a href="https://reactjs.org/">React JS library</a>. 

## Contributing 
Although the website is maintained solely by members of Crypt, members of other SIGs are welcome to send in pull requests to address<br/>
Note: pull requests out of order of instructions mentioned will not be entertained.<br/>
<a href="https://github.com/ISTE-NITK/iste.nitk.ac.in/issues">Open issues</a>. <br/> Before contributing to the repository, go through 
<a href="https://github.com/ISTE-NITK/iste.nitk.ac.in/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a>

# Project Setup Instructions

## Prerequisites

- Python 3.8
- Node.js 16 (via NVM)
- SQLite database file

## Backend Setup

1. Install Python 3.8
```bash
# Check Python version after installation
python3.8 --version
```

2. Create and activate virtual environment
```bash
# Create virtual environment
python3.8 -m venv venv

# Activate virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Set up database
- Copy your SQLite database file to the backend directory
- Ensure the file has proper read/write permissions

5. Run backend server
```bash
python3.8 manage.py runserver
```
The backend server should now be running at `http://localhost:8000`

## Frontend Setup

1. Install Node.js 16 using NVM
```bash
# Install NVM if not already installed
# See https://github.com/nvm-sh/nvm for installation instructions

# Install Node.js 16
nvm install 16
nvm use 16
```

2. Navigate to frontend directory and install dependencies
```bash
cd frontend
npm install --legacy-peer-deps
```

3. Start frontend development server
```bash
npm start
```
The frontend application should now be running at `http://localhost:3000`


