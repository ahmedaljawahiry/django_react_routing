from django.http import JsonResponse


def some_api(request):
    return JsonResponse({
        'this': 'is',
        'an': 'api',
        'that': 'the',
        'frontend': 'will',
        'use': '.'
    })
