# PI Dog Material-UI
## Autor: Emiliano Rotta

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Objetivos del Proyecto 

- Mejorar todo el proyecto con MATERIAL UI
- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.


## Enunciado

Este proyecto una aplicación en la cual se pueden ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevos perros

### Tecnologías usadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

### Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: contiene una landing page con:
- [ ] Una imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: contiene:
- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros. 
- [ ] Botones/Opciones para filtrar por:
    - Temperamento 
    - Raza existente y creadas por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
    - Orden alfabético 
    - Peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas por página.

__Ruta de detalle de raza de perro__: contiene:
- [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

__Ruta de creación de raza de perro__: contiene:
- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Altura 
  - Peso 
  - Años de vida
- [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
- [ ] Botón/Opción para crear una nueva raza de perro

> El formulario de creación está validado con JavaScript y con validaciones HTML. 
 
#### Base de datos

El modelo de la base de datos contiene las siguientes entidades:

- [ ] Raza con las siguientes propiedades:
  - ID 
  - Nombre 
  - Altura 
  - Peso 
  - Años de vida
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades es de muchos a muchos ya que una raza de perro puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a múltiples razas de perro distintas. Por ejemplo la raza `pug` es docil, inteligente y sociable (entre otras). Pero a su vez existen otras razas de perro que también son sociables o inteligentes.

#### Backend

Contiene un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /dogs__:
  - Listado de las razas de perro
  - devuelve solo los datos necesarios para la ruta principal
- [ ] __GET /dogs?name="..."__:
  - Listado de las razas de perro que contiene la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro muestra un mensaje adecuado
- [ ] __GET /dogs/{idRaza}__:
  - El detalle de una raza de perro en particular
  - Trae solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluye los temperamentos asociados
- [ ] __GET /temperament__:
  - trae todos los temperamentos posibles
- [ ] __POST /dog__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos

