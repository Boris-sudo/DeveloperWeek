from django.http import JsonResponse


def register(request):
    print(request.POST)
    return JsonResponse({'result': 'ok'}, status=200)