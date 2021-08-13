from django.shortcuts import render
from django.http import HttpResponse
from .forms import PostForm
# Create your views here.
def index(request):
    return HttpResponse("My Blog")

def add_post(request):
    a = PostForm()
    return render(request,'Blog/add_Blog.html', {'f': a})

def save_post(request):
    if request.method == "POST":
        g = PostForm(request.POST)
        if g.is_valid():
            g.save()
            return HttpResponse("OK")
        else:
            return HttpResponse("Không hop le")

    else:
        return HttpResponse("Khong hop le")