"""
ASGI config for core project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os
import django
from fastapi import FastAPI
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cryptocrush.core.settings')
django.setup()

from cryptocrush.api.main import app as fastapi_app

application = get_asgi_application()

main_app = FastAPI()

main_app.mount("/api", fastapi_app)
main_app.mount("/", application)

