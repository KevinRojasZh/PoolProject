# accounts/serializers.py
from rest_framework import serializers
from .models import Usuario


class UsuarioSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Usuario.
    Controla cómo se convierten los objetos Usuario a JSON y viceversa.
    """
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = '__all__'

    def create(self, validated_data):
        """
        Sobrescribimos create para manejar el password de forma segura.
        """
        password = validated_data.pop('password', None)

        usuario = self.Meta.model(**validated_data)
        if password:
            usuario.set_password(password)  
        usuario.save()
        return usuario

    def update(self, instance, validated_data):
        """
        Sobrescribimos update para manejar el password de forma segura.
        """
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if password:
            instance.set_password(password)
        instance.save()
        return instance