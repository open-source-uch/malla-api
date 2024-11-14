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

#### Nomenclatura de atributos extendidos

> **XA 00 10**

La primera tupla indica la siguiente ruta de búsqueda:

```
/fcfm/<ver-api>/cursos/XA
```

La segunda tupla indica el departamento:


* XA 00 -> Wildcard
  * XA 00 10 -> Formación Integral
    * XA 00 11 -> DR/EH/FG/EI/FT
    * XA 00 12 -> EH/FG
    * XA 00 13 -> Formación Integral Especialidad
  * XA 00 20 -> Electivo
    * XA 00 21 -> Electivo Licenciatura
    * XA 00 22 -> Electivo Especialidad
    * XA 00 23 -> Electivo de Línea de Especialización (DIE, DIM)
    * XA 00 24 -> Especialización (DII)
  * XA 00 30 -> Equivalencias
    * XA 00 31 -> 
    * XA 00 32 ->
    * XA 00 33 ->
    * XA 00 34 ->
    * XA 00 35 ->
    * XA 00 36 ->


* XA 03 ó AS -> Departamento de Astronomía 
* XA 05 ó CC -> Departamento de Ciencias de la Computación
  * XA 05 01 ó XA 05 01 -> Núcleo para Gestión de Ingenieros
* XA 06 ó CI -> Departamento de Ingeniería Civil
  * XA 06 01 ó XA CI 01 -> Optimización / Modelamiento y Optimización
  * XA 06 02 ó XA CI 02 -> Formación Especializada de Licenciatura
* XA 07 ó DR -> Área de Deportes, Educación Física y Expresiones Artísticas
* XA 08 ó EH -> Estudios Transversales en Humanidades para las Ingenierías y Ciencias
* XA 09 ó EI -> Área de Idiomas, Escuela de Ingeniería
* XA 10 ó EL -> Departamento de Ingeniería Eléctrica
  * XA 10 01 ó XA EL 01 -> Núcleo Línea de Especialización
  * XA 10 02 ó XA EL 02 -> Laboratorio de Línea de Especialización
* XA 12 ó ES -> Escuela de Ingeniería y Ciencias
* XA 13 ó FI -> Departamento de Física
* XA 15 ó GF -> Departamento de Geofísica
  * XA 15 01 ó XA GF 01 -> Probabilidades y Estadísticas / Probabilidades
  * XA 15 02 ó XA GF 02 -> Optimización / Modelamiento y Optimización
* XA 16 ó GL -> Departamento de Geología
* XA 19 ó IN -> Departamento de Ingeniería Industrial
* XA 21 ó MA -> Departamento de Ingeniería Matemática
* XA 22 ó ME -> Departamento de Ingeniería Mecánica
  * XA 06 01 ó XA CI 01 (Son lo mismo)
* XA 23 ó MI -> Departamento de Ingeniería de Minas
  * XA 06 01 ó XA CI 01 (Son lo mismo)
* XA 24 ó MT -> Doctorado en Ciencia de los Materiales
* XA 25 ó BT -> Pseudo-departamento de Biolotecnología (Null code)
* XA 26 ó IQ -> Pseudo-departamento de Química (Legacy code)
* XA 27 ó CM -> Pseudo-departamento de Ciencias de los Materiales (Stolen code from old 12/ES)


* XA 303 ó EP -> Escuela de Postgrado 
* XA 305 ó ED -> Doctorado en Ingeniería Eléctrica 
* XA 306 ó CM -> Departamento de Ciencia de los Materiales
* XA 307 ó QB -> Departamento de Ingeniería Química y Biotecnología
* XA 310 ó FG -> Plataforma
* XA 12060002 ó EI -> Área de Ingeniería e Innovación 
* XA 12060003 ó AA -> Área para el Aprendizaje de la Ingeniería y Ciencias A2IC

> TO-DO: Vincular la tercera tupla al semestre, no que sea secuencial.
