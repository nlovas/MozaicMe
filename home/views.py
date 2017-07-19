# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.core.urlresolvers import reverse

#home page is /home
def home(request):
	return render(request,'homepage.html')

#redirect to homepage if no /
def slash(request):
	return redirect(reverse(home))