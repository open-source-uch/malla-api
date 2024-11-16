# Malla API

Unofficial API para mallas de cursos en Beauchef.

## Devel

### Bloque de curso

Este es curso con todos sus atributos contenidos en el bloque.

```
{
  "code": "MA1001",
  "name": "Introducción al Cálculo",
  "credits": 6,
  "requires": [],
  "unlocks": [
    "MA1002",
    "FI1100"
  ]
}
```

### Bloque de meta-curso

Este es un meta curso con atributos extendidos en otro bloque.

```
{
  "code": "XA0010",
  "name": "Formación Integral",
  "credits": 3,
  "requires": [],
  "unlocks": []
}
```

```
{ 
  "XA0010": {
    "dept": [
      "DR",
      "EH",
      "FG",
      "EI",
      "FT"
    ],
    "courses": []
}
```

#### Nomenclatura de atributos extendidos

> **XA 00 10**

La primera tupla indica una búsqueda en la tabla de atributos extendidos:

```
/fcfm/<ver-api>/xattr_table
```

La segunda tupla indica el departamento:

> Cualquier requisito extraño es mapeado aquí:

* `XA 00` -> Wildcard
  * `XA 00 10` -> Formación Integral
    * `XA 00 11` -> DR/EH/FG/EI/FT
    * `XA 00 12` -> EH/FG
    * `XA 00 13` -> Formación Integral Especialidad
  * `XA 00 20` -> Electivo
    * `XA 00 21` -> Electivo Licenciatura
    * `XA 00 22` -> Electivo Especialidad
    * `XA 00 23` -> Electivo de Línea de Especialización (DIE, DIM)
    * `XA 00 24` -> Especialización (DII)
  * `XA 00 30` -> Equivalencias
    * `XA 00 31` -> 
    * `XA 00 32` ->
    * `XA 00 33` ->
    * `XA 00 34` ->
    * `XA 00 35` ->
    * `XA 00 36` ->
* `XA 01` -> Requisitos de créditos (Base-36)
  * `XA 01 1C` ->  40 créditos aprobados
  * `XA 01 7I` -> 270 créditos aprobados

> Capa de compatibilidad con U-Campus aquí:

> Los códigos de dos letras no son únicos !!

* `XA 03` | AS - Departamento de Astronomía 
* `XA 05` | CC - Departamento de Ciencias de la Computación
  * `XA 05 01` => Núcleo para Gestión de Ingenieros
* `XA 06` | CI - Departamento de Ingeniería Civil
  * `XA 06 01` => Optimización / Modelamiento y Optimización
  * `XA 06 02` => Formación Especializada de Licenciatura
* `XA 07` | DR - Área de Deportes, Educación Física y Expresiones Artísticas
* `XA 08` | EH - Estudios Transversales en Humanidades para las Ingenierías y Ciencias
* `XA 09` | EI - Área de Idiomas, Escuela de Ingeniería
* `XA 10` | EL - Departamento de Ingeniería Eléctrica
  * `XA 10 01` => Núcleo Línea de Especialización
  * `XA 10 02` => Laboratorio de Línea de Especialización
* `XA 12` | ES - Escuela de Ingeniería y Ciencias
  * `XA 12 10` => Área de Ingeniería e Innovación
* `XA 13` | FI - Departamento de Física
* `XA 15` | GF - Departamento de Geofísica
  * `XA 15 01` => Probabilidades y Estadísticas / Probabilidades
  * `XA 15 02` => Optimización / Modelamiento y Optimización
* `XA 16` | GL - Departamento de Geología
* `XA 19` | IN - Departamento de Ingeniería Industrial
* `XA 21` | MA - Departamento de Ingeniería Matemática
* `XA 22` | ME - Departamento de Ingeniería Mecánica
  * `XA 06 01` => (Son lo mismo)
* `XA 23` | MI - Departamento de Ingeniería de Minas
  * `XA 06 01` => (Son lo mismo)
* `XA 24` | MT - Doctorado en Ciencia de los Materiales

> Los siguientes códigos no son válidos en U-Campus:

> Se utilizan para mantener la estructura de la API !!

* `XA 25` | BT - Pseudo-departamento de Biolotecnología (Null code)
* `XA 26` | IQ - Pseudo-departamento de Química (Legacy code)
* `XA 27` | CM - Pseudo-departamento de Ciencias de los Materiales (Stolen code from old 12/ES)

> Los siguientes códigos son especiales en U-Campus:

> En particular `307` y `12060002` aparecen en las mallas.

* `XA 303` | EP -> Escuela de Postgrado 
* `XA 305` | ED -> Doctorado en Ingeniería Eléctrica 
* `XA 306` | CM -> Departamento de Ciencia de los Materiales
* `XA 307` | QB -> Departamento de Ingeniería Química y Biotecnología
* `XA 310` | FG -> Plataforma
* `XA 12060002` | EI -> Área de Ingeniería e Innovación 
* `XA 12060003` | AA -> Área para el Aprendizaje de la Ingeniería y Ciencias A2IC

> TO-DO: Vincular la tercera tupla al semestre, no que sea secuencial.
