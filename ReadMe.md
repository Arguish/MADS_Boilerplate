# Modular Api Data Service (MADS)


Este proyecto es una aplicación backend construida con Node.js, utilizando Express como framework web y MongoDB para la base de datos. La aplicación está diseñada para ser modular, con una estructura que separa las preocupaciones lógicamente en módulos, controladores, modelos, y rutas. Además, implementa funcionalidades básicas de autenticación de usuarios.

<!-- TOC tocDepth:2..3 chapterDepth:2..6 -->

-   [1. Estructura del Proyecto](#1-estructura-del-proyecto)
-   [2. Características Principales](#2-características-principales)
-   [3. Herramientas y Tecnologías](#3-herramientas-y-tecnologías)
-   [4. Configuración y Uso](#4-configuración-y-uso)
    -   [4.1. Creación de Módulos Automatizada](#41-creación-de-módulos-automatizada)
-   [5. Desarrollo Futuro](#5-desarrollo-futuro)
-   [6. Actualizaciones](#6-actualizaciones)
    -   [6.1. 14/02/2024 - User Crud](#61-14022024---user-crud)
    -   [6.2. 15/02/2024 - Autenticación con Códigos de Verificación](#62-15022024---autenticación-con-códigos-de-verificación)
    -   [6.3. 15/02/2024 - Verificacion con JWT](#63-15022024---verificacion-con-jwt)

<!-- /TOC -->

## 1. Estructura del Proyecto

La aplicación sigue una estructura de directorios modular para facilitar la escalabilidad y el mantenimiento:

-   `src/`: Contiene el código fuente de la aplicación.
    -   `config/`: Configuraciones del proyecto, incluyendo la conexión a la base de datos.
    -   `modules/`: Cada módulo representa una funcionalidad distinta (por ejemplo, login).
        -   `login/`: Contiene todo lo relacionado con la autenticación y registro de usuarios.
            -   `controllers/`: Lógica de negocio para el manejo de solicitudes.
            -   `models/`: Esquemas de Mongoose para los modelos de datos.
            -   `routes/`: Definición de rutas de Express específicas del módulo.
    -   `app.js`: Punto de entrada principal de la aplicación que configura el servidor Express.
    -   `server.js`: Inicializa y escucha en el puerto definido.
-   `.env`: Almacena variables de entorno, como la cadena de conexión a MongoDB.
-   `package.json`: Define las dependencias y scripts del proyecto.

## 2. Características Principales

-   **Conexión a MongoDB**: Utiliza Mongoose para conectar con MongoDB Atlas, permitiendo operaciones de base de datos.
-   **Autenticación de Usuarios**: Implementa registro y CRUD de usuarios con hashing de contraseñas y verificacion MX de correo.
-   **Modularidad**: Estructura el proyecto por módulos para mantener una separación clara de responsabilidades.
-   **Creación de modulos**: La base de los modulos se puede crear por comando, manteniendo la estructura de archivos y nomenclatura.
-   **Logging**: Incorpora Morgan para el registro de solicitudes HTTP, facilitando el debugging y monitoreo.

## 3. Herramientas y Tecnologías

-   [Node.js](https://nodejs.org/)
-   [Express](http://expressjs.com/)
-   [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
-   [bcryptjs](https://www.npmjs.com/package/bcryptjs) para hashing de contraseñas.
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para manejo de tokens JWT.
-   [Morgan](https://www.npmjs.com/package/morgan) para logging.

## 4. Configuración y Uso

1. **Instalación de Dependencias**: Ejecuta `npm install` para instalar las dependencias necesarias.
2. **Variables de Entorno**: Configura las variables de entorno necesarias en el archivo `.env`.
3. **Ejecución del Proyecto**: Utiliza `npm run dev` para iniciar el servidor con `nodemon`, permitiendo el desarrollo con recarga automática.
4. **Estructura de Clases y Snippets**: Implementa clases y snippets para mejorar la estructura y mantenibilidad del código.

### 4.1. Creación de Módulos Automatizada

Para facilitar la expansión y mantenimiento de nuestro proyecto, hemos implementado un comando personalizado que permite la creación automática de módulos con una estructura de archivos predefinida. Este comando simplifica el proceso de añadir nuevas funcionalidades al proyecto, asegurando la coherencia en la estructura de directorios y la nomenclatura de archivos.

Para crear un nuevo módulo, simplemente ejecuta el siguiente comando desde la raíz del proyecto:

```bash
npm run create-module <nombreDelModulo>
```

Reemplaza `<nombreDelModulo>` con el nombre que deseas darle a tu nuevo módulo. El comando generará automáticamente una nueva carpeta bajo `src/modules`, conteniendo los archivos básicos del módulo, asi como un CRUD sencillo, cada uno con una plantilla inicial básica.

Este enfoque no solo mejora la eficiencia al evitar la creación manual de archivos y directorios comunes sino que también promueve una estructura de proyecto uniforme, facilitando la colaboración y el mantenimiento a largo plazo.

## 5. Desarrollo Futuro

El proyecto está configurado para facilitar la adición de nuevas funcionalidades y módulos, siguiendo los principios de diseño y arquitectura ya establecidos.


-   Códigos de Verificación: Se implementó una función en JavaScript para generar códigos aleatorios de 4 dígitos. Posteriormente, se añadió lógica para eliminar estos códigos de la base de datos después de 2 minutos, usando setTimeout junto con operaciones async/await para manejar las acciones de eliminación conforme a las prácticas recomendadas por Mongoose.
-   Manejo de Formularios de Contacto: Se estableció una configuración específica para que los formularios de contacto sean enviados automáticamente al correo personal mediante Resender. Esto mejora la interacción con los usuarios al asegurar que sus mensajes sean revisados y atendidos de manera prioritaria.

### 6.3. 15/02/2024 - Verificacion con JWT
