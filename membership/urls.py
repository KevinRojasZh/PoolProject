# membership/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MembresiaViewSet, RegistroAccesoViewSet

router = DefaultRouter()
router.register(r'membresias', MembresiaViewSet, basename='membresia')
router.register(r'registros', RegistroAccesoViewSet, basename='registro')

urlpatterns = [
    path('', include(router.urls)),
    path('api/membership/', include('membership.urls')), 
]