# Weekly 24/05
* Revisamos los puntos del Sprint 3 y dividimos actividades.

## Crear Retro Sprint 2

Conversamos sobre los desafíos enfrentados y las cuestiones a mejorar. RESPONSABLE: Belén.

## Tablero de trabajo

Consultar al profe por la modificación del tablero. RESPONSABLE: Natalia.

## Crear Archivo Weekly.md

* Decidimos tener reuniones los días miércoles 18.30 hs y los días sábado 15.30 hs. RESPONSABLE DE SUBIR PRIMER ARCHIVO Y RESUMEN: Belén.

## Implementar el motor de templates

En esto habíamos avanzado en el Sprint 2. Queda implementar los controllers. RESPONSABLE: Natalia.

## Crear carpeta partials

Franco venía trabajando en modularizar header y footer. Queda consultar al profesor por fallas a la hora de aplicar. RESPONSABLE: Franco.

## Definir campos necesarios para productos y usuarios

Realizamos una lista tentativa:

ATRIBUTOS PARA PRODUCTO

* Identificador: id
* Nombre del producto: name
* Descripción: description
* Imagen: image
* Categoría: category
* Marca : nombre
* Color: color
* Cantidad: number
* Talle: talle
* Precio: price
* En Oferta : booleano
* Descuento : number
**Carpeta data con archivo products.json**

ATRIBUTOS PARA USUARIO
* Identificador: id
* Nombre: text
* Apellido: text
* Email: text
* Contraseña : hash, 10
* Imagen: image → MULTER
* Categoría: category → si es admin o no
**Carpeta data con archivo users.json**