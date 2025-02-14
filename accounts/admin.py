from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario

@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    fieldsets = (
        (None, {
            'fields': (
                'username',
                'password',
            )
        }),
        ('Información Personal', {
            'fields': (
                'first_name',
                'last_name',
                'email',
                'dni',
                'telefono',
            )
        }),
        ('Permisos', {
            'fields': (
                'is_active',
                'is_staff',
                'is_superuser',
                'groups',
                'user_permissions',
            )
        }),
        ('Fechas Importantes', {
            'fields': (
                'last_login',
                'date_joined',
            )
        }),
    )