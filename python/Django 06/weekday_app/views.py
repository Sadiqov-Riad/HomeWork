from datetime import datetime

from django.http import HttpResponse


def current_weekday(request):
	day_name = datetime.now().strftime('%A')
	return HttpResponse(f'Today is {day_name}.')
