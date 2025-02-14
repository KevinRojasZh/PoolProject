from django.db import models
from django.contrib.auth.models import AbstractUser

class Usuario(AbstractUser):
    """
    AbstractUser ya incluye:
      - username, password, email, first_name, last_name
      - is_staff, is_active, is_superuser, date_joined, etc.
    """
    dni = models.CharField(
        max_length=20,
        blank=True,
        null=True,
        unique=True,
        verbose_name="DNI"
    )
    telefono = models.CharField(
        max_length=20,
        blank=True,
        null=True,
        verbose_name="Teléfono"
    )

    def __str__(self):
        return self.username
