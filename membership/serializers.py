# membership/serializers.py
from rest_framework import serializers
from .models import Membresia, RegistroAcceso

class MembresiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Membresia
        fields = '__all__'


class RegistroAccesoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroAcceso
        fields = '__all__'
