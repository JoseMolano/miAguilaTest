# Mi Aguila test

En este respositorio se encuentra la solución a la prueba para mi aguila, en donde se desarrolla una API Rest en node.js y typescript, usando API Gateway, Lambda y serverless de **AWS** para el despliegue y conexión.

Como se muestra en la [documentación](https://app.swaggerhub.com/apis/JoseMolano/dev-miaguilatest/20191127T041504Z#/), esta API cuenta con cuatro endpoints:

- GET /trips para obtener la cantidad de viajes totales.
- GET /trips/{city} para obtener la cantidad de viajes totales por ciudad.
- POST /trip para crear un viaje.
- PUT /trip para modificar un viaje.

El diagrama de la arquitectura es el siguiente:

![Texto alternativo](/architecture.png)

A partir del llamado en API Gateway, cuyo trabajo es activar la función lambda correspondiente, el controlador procede a llamar al servicio que invoca al middleware para obtener la información de la base de datos. Todo está desplegado en AWS haciendo uso de serverless.

### **Notas:**

- Por lo general uso **GitFlow** como flujo de desarrollo, pero al ser un proyecto pequeño decidí no usarlo y solo subirlo al repositorio al terminar.
- Documentación: [swagger](https://app.swaggerhub.com/apis/JoseMolano/dev-miaguilatest/20191127T041504Z#/) (https://app.swaggerhub.com/apis/JoseMolano/dev-miaguilatest/20191127T041504Z#/).
- Endpoints AWS:

  - GET - https://3wq13an9g7.execute-api.us-east-1.amazonaws.com/dev/trips
  - GET - https://3wq13an9g7.execute-api.us-east-1.amazonaws.com/dev/trips/{city}
  - POST - https://3wq13an9g7.execute-api.us-east-1.amazonaws.com/dev/trips
  - PUT - https://3wq13an9g7.execute-api.us-east-1.amazonaws.com/dev/trips
