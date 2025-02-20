# accounts/views.py
from rest_framework import viewsets, permissions
from .models import Usuario
from .serializers import UsuarioSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    """
    ViewSet que expone las operaciones CRUD para el modelo Usuario.
    """
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

