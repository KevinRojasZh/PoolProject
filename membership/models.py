# membership/models.py
from django.db import models
from django.conf import settings
import uuid
from django.utils import timezone
from datetime import date

class Membresia(models.Model):
    """
    Representa el bono o membresía de un usuario.
    Puede ser una membresía de temporada o un bono de 10 entradas.
    """
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    TIPO_MEMBRESIA = (
        ('TEMPORADA', 'Temporada'),
        ('BONO10', 'Bono 10 Entradas'),
    )
    tipo = models.CharField(
        max_length=20,
        choices=TIPO_MEMBRESIA,
        verbose_name="Tipo de Membresía"
    )

    usuario = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="Usuario"
    )

    fecha_inicio = models.DateField(
        null=True,
        blank=True,
        verbose_name="Fecha de Inicio"
    )
    fecha_fin = models.DateField(
        null=True,
        blank=True,
        verbose_name="Fecha de Fin"
    )

    restantes = models.PositiveIntegerField(
        default=0,
        verbose_name="Entradas restantes"
    )

    activo = models.BooleanField(
        default=True,
        verbose_name="Membresía activa"
    )
    creado_en = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Creado en"
    )
    actualizado_en = models.DateTimeField(
        auto_now=True,
        verbose_name="Actualizado en"
    )

    def save(self, *args, **kwargs):
        """
        Si el tipo de membresía es 'TEMPORADA',
        fijamos automáticamente las fechas al 1 de julio y 31 de agosto
        del año actual (o del que prefieras).
        """
        if self.tipo == 'TEMPORADA':
            # Por ejemplo, usamos el año actual:
            ano_actual = timezone.now().year
            self.fecha_inicio = date(ano_actual, 7, 1)
            self.fecha_fin = date(ano_actual, 8, 31)

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.usuario.username} - {self.get_tipo_display()}"

    def es_valida_temporada(self) -> bool:
        if not (self.fecha_inicio and self.fecha_fin):
            return False
        hoy = timezone.now().date()
        return self.fecha_inicio <= hoy <= self.fecha_fin

    def puede_acceder(self) -> bool:
        if not self.activo:
            return False

        if self.tipo == 'TEMPORADA':
            return self.es_valida_temporada()
        elif self.tipo == 'BONO10':
            return self.restantes > 0
        return False


class RegistroAcceso(models.Model):
    membresia = models.ForeignKey(
        Membresia,
        on_delete=models.CASCADE,
        verbose_name="Membresía"
    )
    fecha_acceso = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Fecha de Acceso"
    )
    validador = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='validaciones',
        verbose_name="Validado por"
    )

    def __str__(self):
        return f"Acceso de {self.membresia.usuario.username} - {self.fecha_acceso}"

    def save(self, *args, **kwargs):
        if self.membresia.tipo == 'BONO10':
            if self.membresia.restantes <= 0:
                raise ValueError("La membresía no tiene entradas disponibles.")
            self.membresia.restantes -= 1
            self.membresia.save()

        super().save(*args, **kwargs)