# Gravity — Fase 2: Cuentas de usuario (Firebase)

## Ya está hecho en el código
- Registro (`registro.html`), login (`login.html`), recuperar contraseña
  (`recuperar.html`) y "Mi cuenta" (`cuenta.html`).
- El link de la esquina superior derecha ahora dice "Iniciar sesión" o el
  nombre del cliente, según si hay sesión activa — en todas las páginas.
- Cada registro crea un documento en Firestore, colección `users`, con
  nombre, correo y fecha de creación.

## Lo único que falta de tu lado: publicar las reglas de Firestore

Sin esto, cualquier persona con tu configuración pública podría leer o
escribir datos de otros usuarios. Ve a **Firebase Console → tu proyecto
`gravityec` → Firestore Database → Reglas** y pega esto:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Esto dice: cada usuario solo puede leer/escribir su propio documento,
nadie más. Dale **Publicar**.

## Cómo probarlo
1. Abre `registro.html`, crea una cuenta de prueba.
2. Deberías caer en `cuenta.html` con tu nombre arriba.
3. Ve a cualquier otra página (ej. `index.html`) — el botón de la esquina
   ahora debería mostrar tu nombre en vez de "Iniciar sesión".
4. Prueba "Cerrar sesión" y confirma que vuelve a decir "Iniciar sesión".
5. Prueba "¿Olvidaste tu contraseña?" con el correo de prueba — debería
   llegarte un correo de Firebase para restablecerla.

## Qué NO incluye todavía esta fase
- El historial de pedidos está vacío a propósito — se llena en la Fase 4
  (carrito de compras), que todavía no se ha construido.
- No hay verificación de correo obligatoria (se puede agregar después si
  la quieres).
