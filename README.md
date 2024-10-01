# Proyecto de Gestión de Usuarios FrontEnd

Este es un proyecto de gestión de usuarios realizado con React y Node.js. La aplicación permite a los usuarios iniciar sesión, visualizar y gestionar usuarios, así como realizar publicaciones.

## Tecnologías Utilizadas

- **Frontend**: React, Material-UI, React Router
- **Backend**: Node.js, Express, Sequelize
- **Base de Datos**: MySQL
- **Autenticación**: JWT, bcrypt

## Estructura del Proyecto

- **pages/**: Contiene las paginas principales
- **src/**: Contiene los componentes de React, incluyendo:
  - **Inicio.jsx**: Componente principal que muestra el menú y el carrusel.
  - **Menu.jsx**: Componente que representa el menú de navegación.
  - **Routes.jsx**: Manejo de rutas en la aplicación.
  - **components/**: Contiene componentes reutilizables como tablas de usuarios, formularios de usuario, etc.
  - **context**: Contiene los contextos de la aplicacion, para poder trabajar con un mismo contexto.
  - **service**: Manejo de la APi desde el frontend, consultas http.



## Instalación

Para instalar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/laloooxx/ProyectUserFrontend
   cd ProyectUserFrontend
   npm install
   npm run dev


## Uso

La aplicación permite a los usuarios registrarse y realizar login.
Los usuarios pueden ver una lista de otros usuarios y sus perfiles.
Se puede gestionar la creación, actualización y eliminación de usuarios.
Las publicaciones son accesibles a través de rutas específicas.


## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature-nombre).
Realiza tus cambios y haz commit (git commit -m 'Agregando nueva funcionalidad').
Haz push a la rama (git push origin feature-nombre).
Crea un nuevo Pull Request.
