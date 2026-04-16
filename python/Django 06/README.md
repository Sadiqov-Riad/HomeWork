# Django Homework 06

This project contains one Django project with three apps:
- hello_app
- weekday_app
- quote_app

## Run project

1. Open terminal in project folder.
2. Activate virtual environment.
3. Run server.

~~~bash
cd "/Users/riad/Desktop/step/HomeWork/python/Django 06"
source .venv/bin/activate
python manage.py migrate
python manage.py runserver
~~~

## Browser check

Open these URLs:

- http://127.0.0.1:8000/  
Expected: Hello, World!
- http://127.0.0.1:8000/hello/  
Expected: Hello, World!
- http://127.0.0.1:8000/weekday/  
Expected: current day of week
- http://127.0.0.1:8000/quote/  
Expected: random quote from list

## Quick terminal check

~~~bash
curl -i http://127.0.0.1:8000/
~~~

Status should be 200, and response body should contain Hello, World!.

## Where settings are configured

- App registration: config/settings.py:33
- Main routes: config/urls.py:21
