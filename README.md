# TechnicalTest

Esta aplicación es una plataforma de gestión de productos construida con Angular 18. Permite listar, crear, visualizar, editar y eliminar productos de manera sencilla y visual, integrando alertas y confirmaciones amigables para el usuario.

## Características principales

- **Listado de productos:**

  - Visualiza todos los productos disponibles en una interfaz moderna y responsiva.
  - Muestra detalles clave como título, descripción, categoría, precio, descuento, rating, stock e imágenes.
  - Solo se muestran productos activos (no eliminados lógicamente).

- **Crear producto:**

  - Formulario reactivo para agregar nuevos productos con validaciones.
  - Campos principales: título, descripción, categoría y precio.
  - Al crear un producto, se muestra una alerta de éxito y se redirige al listado.

- **Visualizar producto:**

  - Consulta el detalle completo de un producto seleccionado, incluyendo todas sus propiedades e imágenes.

- **Editar producto:**

  - Permite modificar los datos de un producto existente mediante un formulario reactivo.
  - Al guardar los cambios, se redirige al listado.

- **Eliminar producto:**

  - Elimina productos con confirmación mediante SweetAlert2.
  - La eliminación es lógica: el producto no se borra físicamente, solo se marca como eliminado y deja de mostrarse en la lista.
  - Al eliminar, se muestra una alerta de éxito.

- **Navegación:**
  - Navegación fluida entre listado, creación, edición y detalle de productos usando rutas de Angular.

## ¿Cómo funciona?

1. **Inicio:**

   - Al ingresar, se muestra la lista de productos activos.
   - Puedes crear un nuevo producto con el botón "+".

2. **Crear producto:**

   - Completa el formulario y presiona "Crear Producto".
   - Si el formulario es válido, el producto se agrega y verás una alerta de éxito.

3. **Ver/Editar/Eliminar:**
   - Desde la lista, puedes visualizar, editar o eliminar cualquier producto usando los botones correspondientes.
   - Al eliminar, se pedirá confirmación y el producto desaparecerá de la lista tras aceptar.

## Instalación y uso

1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Ejecuta el servidor de desarrollo:
   ```sh
   ng serve
   ```
3. Abre tu navegador en [http://localhost:4200/](http://localhost:4200/)


## Despliegue automático con GitHub Actions

Este proyecto incluye un flujo de trabajo de **GitHub Actions** para automatizar el proceso de integración continua y despliegue en un servidor remoto mediante SSH.

### ¿Qué hace el workflow?

- **Se ejecuta automáticamente** cada vez que hay un push a la rama `master`.
- **Instala las dependencias** del proyecto usando `npm ci`.
- **Compila la aplicación Angular** con `npm run build`.
- **Configura la conexión SSH** usando las llaves y variables de entorno definidas en los secrets del repositorio.
- **Limpia la carpeta de destino** en el servidor remoto (`/var/www/proyect/html/`).
- **Copia los archivos generados** en la carpeta `dist/technical-test/browser/` al servidor remoto usando `scp`.

### ¿Cómo funciona?

1. El workflow se define en `.github/workflows/deploy.yml`.
2. Cuando haces push a `master`, GitHub ejecuta los pasos definidos:
   - Clona el repositorio.
   - Usa Node.js 20 para el entorno de build.
   - Instala dependencias y construye el proyecto.
   - Configura la llave SSH y el host remoto.
   - Borra el contenido anterior en el servidor de destino.
   - Sube los archivos nuevos al servidor vía SCP.
3. El servidor remoto queda actualizado automáticamente con la última versión de la aplicación.

### Requisitos

- Debes tener configurados los secrets en GitHub: `SSH_PRIVATE_KEY`, `SSH_USER`, `SSH_HOST`, `SSH_PORT`.
- El servidor debe aceptar conexiones SSH y tener permisos de escritura en la carpeta de destino.


## Dependencias principales

- Angular 18+
- SweetAlert2 (para alertas y confirmaciones)
- TailwindCSS (para estilos)

## Notas

- La aplicación utiliza una API de ejemplo (DummyJSON) para simular operaciones CRUD.
- El borrado de productos es lógico (no se elimina físicamente, solo se oculta).

## Scripts útiles

- `ng serve` — Inicia el servidor de desarrollo.
- `ng build` — Compila la aplicación para producción.
- `ng test` — Ejecuta los tests unitarios.

## Ayuda adicional

Para más información sobre Angular CLI, ejecuta `ng help` o visita la [documentación oficial](https://angular.dev/tools/cli).
