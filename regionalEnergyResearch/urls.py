"""regionalEnergyResearch URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from baseApp import views as baseView

urlpatterns = [
    path('admin/', admin.site.urls),


    path('getIndexPage/<path1>/<path2>/<path3>/<name>', baseView.getPage1),     #3层结构
    path('getIndexPage/<path1>/<path2>/<name>', baseView.getPage2),             #2层结构
    path('getIndexPage/<path1>/<name>', baseView.getPage3),                     #1层结构

    path('getIndexPage/', baseView.getIndexPage),#返回首页


]
