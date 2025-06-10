# ProjectBreak_Backend: Interfaz de base de datos de ropa

## Índice
  - [Advertencias](#Advertencias)
  - [Acceso a través de la web visual](#Acceso-a-través-de-la-web-visual)

## Advertencias
  - Este es un proyecto en desarrollo. Algunos aspectos de la web pueden no ser totalmente funcionales, como la separación por categorías de las prendas de ropa.
  - Es posible que tarde un poco en iniciar debido al hosting de Render.
  - Actualmente sólo tiene versión para ordenador, en un dispositivo de menor tamaño se visualizará incorrectamente.

## Acceso a través de la web visual
Para acceder a la interfaz visual lo haremos a través del enlace https://projectbreak-backend-4cll.onrender.com
Aquí podremos ver los elementos que componen la base de datos. Al hacer click en la sección de `Más detalles...` accederemos al detalle del producto en particular.
Para poder acceder a más funcionalidades deberemos iniciar a través del enlace del menú superior `Acceder`.
El dashboard se ve igual que el apartado inicial pero ahora, al acceder a los detalles de un producto se puede editar dicho producto a través de un formulario o eliminarlo directamente.
Además, para añadir un nuevo producto a la base de datos, se hará a través de un formulario al que se puede acceder pulsando sobre `Añadir producto` en el menú superior.
### Resumen URLs
  - https://projectbreak-backend-4cll.onrender.com/products : Acceso público de lectura a la base de datos.
  - https://projectbreak-backend-4cll.onrender.com/products/:productId : Acceso público de lectura a los detalles de un producto concreto de la base de datos.
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
