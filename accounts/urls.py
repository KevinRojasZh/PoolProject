# accounts/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, obtener_usuario
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet, basename='usuario')

urlpatterns = [
    path('mi-perfil/', obtener_usuario, name='mi-perfil'),  # <--- Nuevo endpoint
    path('', include(router.urls)),  # Rutas CRUD para /usuarios/...
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),          # -> POST /api/accounts/token/
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),         # -> POST /api/accounts/token/refresh/
]