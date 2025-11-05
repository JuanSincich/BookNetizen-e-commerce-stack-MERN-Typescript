# 📚 Book Netizen - Seguimiento de Proyecto

# Issue: Dejar listo theme.tsx

# Issue: Publicar libro

## 🔐 Auth

- [x] Botón "Publicar Libro" siempre visible
- [x] Redirección a `/login` si !isAuthenticated
- [ ] Guardar ruta de origen (`from`) para post-login
- [ ] Mostrar Snackbar "Debes iniciar sesión" al redirigir

## ✨ Formulario de Carga

### Vista Previa

- [ ] Implementar switch ON/OFF
- [ ] Reutilizar componente `Book.tsx` para preview
- [ ] Placeholders para datos faltantes (ej: imagen)

### Validaciones

- [ ] Campos obligatorios (título, autor, precio)
- [ ] Formatear precio (ej: `1000` → `$1,000`)

## 🚀 Backend

- [ ] Endpoint POST `/books`
  - [ ] Headers con JWT
  - [ ] Subida de imágenes (FormData)
- [ ] Manejo de errores (ISBN duplicado, etc.)

## 🎨 UX

- [ ] Snackbar de éxito/error
- [ ] Loader durante submit
- [ ] Redirección a `/book/:id` tras publicación

## 💡 Ideas Futuras

- [ ] Tags dinámicos (autocompletado)
- [ ] Búsqueda por ISBN
- [ ] Edición de libros existentes

## 🐛 Bugs Conocidos

| Fecha      | Descripción                         | Prioridad |
| ---------- | ----------------------------------- | --------- |
| 2024-07-15 | NavBar no actualiza estado al login | Alta      |

## 📅 Changelog

// todo esto es ejemplo de cambios realizados

- **2024-07-15**: Auth básico implementado.
- **2024-07-16**: Diseño inicial del formulario.

## formulario de addBook:

Columna 2 (Detalles):

Portada - subir imagen (obligatorio)

Categoría - dropdown (obligatorio)

Precio (obligatorio)
