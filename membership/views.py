from rest_framework import viewsets, permissions
from .models import Membresia, RegistroAcceso
from .serializers import MembresiaSerializer, RegistroAccesoSerializer


class MembresiaViewSet(viewsets.ModelViewSet):
    queryset = Membresia.objects.all()
    serializer_class = MembresiaSerializer


class RegistroAccesoViewSet(viewsets.ModelViewSet):
    queryset = RegistroAcceso.objects.all()
    serializer_class = RegistroAccesoSerializer
