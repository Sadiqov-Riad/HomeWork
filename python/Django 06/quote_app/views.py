import random

from django.http import HttpResponse


def random_quote(request):
	quotes = [
		'The best way to get started is to quit talking and begin doing. - Walt Disney',
		'Success is the sum of small efforts, repeated day in and day out. - Robert Collier',
		'Do what you can, with what you have, where you are. - Theodore Roosevelt',
		'It always seems impossible until it is done. - Nelson Mandela',
		'Believe you can and you are halfway there. - Theodore Roosevelt',
	]
	return HttpResponse(random.choice(quotes))
