# ProjectBreak_Backend: Interfaz de base de datos de ropa

## Índice
  - [Advertencias](#Advertencias)
  - [Acceso a través de la web visual](#Acceso-a-través-de-la-web-visual)
  - [Acceso a la API](#Acceso-a-la-API)
  - [Tecnologías empleadas](#Tecnologías-empleadas)
  - [Deploy](#Deploy)

## Advertencias
  - Este es un proyecto en desarrollo. Algunos aspectos de la web pueden no ser totalmente funcionales, como la separación por categorías de las prendas de ropa.
  - Es posible que tarde un poco en iniciar debido al hosting de Render.
  - Actualmente sólo tiene versión para ordenador, en un dispositivo de menor tamaño se visualizará incorrectamente.

## Acceso a través de la web visual
Para acceder a la interfaz visual lo haremos a través del enlace https://projectbreak-backend-4cll.onrender.com

Aquí podremos ver los elementos que componen la base de datos. Al hacer click en la sección de `Más detalles...` accederemos al detalle del producto en particular.

Para poder acceder a más funcionalidades deberemos iniciar a través del enlace del menú superior `Acceder`. Necesitaremos conocer la contraseña de administrador para poder autenticarnos en el sistema y continuar.

El dashboard se ve igual que el apartado inicial pero ahora, al acceder a los detalles de un producto se puede editar dicho producto a través de un formulario o eliminarlo directamente.

Además, para añadir un nuevo producto a la base de datos, se hará a través de un formulario al que se puede acceder pulsando sobre `Añadir producto` en el menú superior.

Para cerrar la sesión de administrador, sólo será necesario pulsar en `Desconectar` en la parte superior derecha de la ventana y esto nos devolverá a la página pública de los productos.

### Resumen URLs
  - https://projectbreak-backend-4cll.onrender.com/products : Acceso público de lectura a la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/products/:productId : Acceso público de lectura a los detalles de un producto concreto de la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/auth : Página de acceso y autenticación como administrador
  - https://projectbreak-backend-4cll.onrender.com/dashboard : Acceso de administrador de lectura a la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/dashboard/:productId : Acceso de administrador de lectura a los detalles de un producto concreto de la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/dashboard/new : Acceso de administrador al formulario de creación de producto en la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/dashboard/:productId/edit : Acceso de administrador para editar un producto de la base de datos.

## Acceso a la API
Se puede acceder a la base de datos a través de código con respuestas en formato `.json` que incluyen:
  - `_id`: Un texto con el identificador del producto
  - `nombre`: Un texto con el nombre del producto
  - `descripcion`: Un texto con la descripción del producto
  - `imagen`: Un texto con la url de la imagen
  - `categoria`: Un texto de los siguientes [`Camisetas`, `Pantalones`, `Zapatos`, `Accesorios`]
  - `talla`: Un texto de los siguientes [`XS`, `S`, `M`, `L`, `XL`]
  - `precio`: Un número con el precio del producto

### Resumen URLs API
  - https://projectbreak-backend-4cll.onrender.com/api/products : Devuelve todos los productos de la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/api/products/:productId : Devuelve un producto concreto de la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/api/create : Permite crear un nuevo producto en la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/api/update/:productId : Permite actualizar un producto concreto de la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/api/delete/:productId : Permite eliminar un producto concreto de la base de datos.

## Tecnologías empleadas
  - express para levantar el servidor.
  - dotenv para gestionar variables de entorno.
  - mongoose y mongodb para gestionar la conexión a la base de datos.
  - cors para permitir conexiones diferentes.
  - method-override para enviar datos de formulario con los métodos PUT y DELETE.
  - multer-storage-cloudinary, multer y cloudinary para gestionar las imágenes de los productos.
  - express-session y body-parser para gestionar el acceso de administrador con autenticación.

## Deploy
Para utilizar el código de este proyecto deberá descargarse en una carpeta y comenzar ejecutando el comando `npm i` para instalar las dependencias de los paquetes de Node.

A continuación se debe crear un archivo .env donde se deben colocar las variables de entorno como son:
  - MONGO_URI : Un texto con la dirección de conexión a la base de datos.
  - PORT : El puerto en el que se pretende lanzar el servicio.
  - CLOUDINARY_NAME, CLOUDINARY_API_KEY y CLUDINARY_SECRET : Variables del entorno de cloudinary.
  - PASSWORD : La constraseña de administrador

Por último se ejecutará el comando `npm start` que ejecutará el servicio en local en el puerto establecido en la variable PORT.