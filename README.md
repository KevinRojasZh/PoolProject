# PoolProject

Proyecto de digitalización de entradas en piscinas mediante Django y PostgreSQL.

## Descripción

- **Usuarios (App `accounts`)**  
  - Modelo de usuario personalizado (`Usuario`), heredado de `AbstractUser`.  
  - Campos extra (`dni`, `telefono`).

- **Membresías (App `membership`)**  
  - **`Membresia`**: Modela un pase de temporada (1 julio - 31 agosto) o un bono de 10 entradas.  
  - **`RegistroAcceso`**: Registra cada entrada y descuenta entradas en el caso de bonos.

### Flujo Básico
1. El **usuario** se registra (o es dado de alta) y obtiene su **membresía** (temporada o bono de 10 entradas).
2. En la **entrada**, se escanea un **QR** con el `id` (UUID) de la membresía.
3. El **sistema** verifica la validez (fechas o entradas restantes) y registra el acceso.


