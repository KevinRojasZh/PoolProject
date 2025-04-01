# accounts/views.py
from rest_framework import viewsets
from .models import Usuario
from .serializers import UsuarioSerializer

# Importaciones extra para el endpoint que devuelve el usuario actual
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

class UsuarioViewSet(viewsets.ModelViewSet):
    """
    ViewSet que expone las operaciones CRUD para el modelo Usuario.
    """
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def obtener_usuario(request):
    """
    Retorna los datos del usuario autenticado a partir del token JWT.
    """
    user = request.user  # Usuario autenticado
    serializer = UsuarioSerializer(user)
    return Response(serializer.data)
