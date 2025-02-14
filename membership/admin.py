# membership/admin.py
from django.contrib import admin
from .models import Membresia, RegistroAcceso

@admin.register(Membresia)
class MembresiaAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'tipo', 'activo', 'restantes', 'fecha_inicio', 'fecha_fin')
    list_filter = ('tipo', 'activo')
    search_fields = ('usuario__username',)

@admin.register(RegistroAcceso)
class RegistroAccesoAdmin(admin.ModelAdmin):
    list_display = ('membresia', 'fecha_acceso', 'validador')
    list_filter = ('fecha_acceso',)
    search_fields = ('membresia__usuario__username', 'validador__username')