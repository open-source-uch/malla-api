# Malla API

Unofficial API para mallas de cursos en Beauchef.

## API

La dirección oficial:
```
https://malla-api.uch.osec.cl
```

### Datos de Malla API

* `/fcfm`
  * Información sobre la API.

* `/fcfm/vX.Y.Z/xattr_table`
   * Tabla de atributos extendidos.

* `/fcfm/vX.Y.Z/mallas`
  * Listado de mallas oficiales.

### Malla Plan Común

* `/fcfm/vX.Y.Z/mallas/pc`
  * Listado de versiones de Malla Plan Común.

* `/fcfm/vX.Y.Z/mallas/pc/<ver>/<graf>/<sem>`
  * `<ver>` es la versión de la malla.
    * `v3` para 2007-2018 (WIP).
    * `v5` para 2019-today.
  * `<graf>` son las relaciones con las carreras:
    * `stub` no tiene *unlocks* de carreras.
    * `full` tiene *unlocks* de todas las carreras (WIP).
  * `<sem>` es el número del semestre.
    * Parten desde el número 1.
    * Contiene el listado de cursos.

### Malla Carrera

* `/fcfm/vX.Y.Z/mallas/<major>`
  * Listado de versions de Malla *<major>*.

* `/fcfm/vX.Y.Z/mallas/<major>/<ver>/<degree>/<sem>`
  * `<major>` es la sigla de la carrera.
    * `dcc` para Ingeniería Civil en Computación.
    * ... WIP el resto de las carreras.
  * `<ver>` es la versión de la malla.
    * `v1` para ????-2000 (WIP).
    * `v2` para 2001-2006 (WIP).
    * `v3` para 2007-2018 (WIP).
    * `v5` para 2019-today.
  * `<degree>` es el título que emite la facultad.
    * `licenciatura` para los primeros 4 semestres.
    * `especialidad` para el resto de los semestres.
  * `<sem>` es el número del semestre.
    * Parten desde el número 1.
    * Contiene el listado de cursos.
    * No considera Plan Común.

## Devel

### Bloque de curso

Contiene todos sus atributos.

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

Tiene atributos extendidos.

```
{
  "code": "XA0011",
  "name": "Formación Integral",
  "credits": 3,
  "requires": [],
  "unlocks": []
}
```

Desglozando XA0011 se tiene:

* **XA:** El curso debe buscarse en *xattr_table*
* **00:** El departamento (real o ficticio)
* **11:** Los atributos extendidos del curso

```
}
  "11": {
  "name_array": [ "Formación Integral" ],
  "dept_array": [ "DR", "EH", "FG", "EI", "FT"],
  "courses_array": []
}
```

### Nomenclatura de xattr_table

> *XA 00 10*

**Capa de compatibilidad con las mallas, permite imitar los bloques de la malla en el front-end.**

* `XA 00` -> Wildcard
  * `XA 00 10` -> Formación Integral
    * `XA 00 11` -> Plan Común (DR/EH/FG/EI/FT)
    * `XA 00 12` -> Licenciatura (EH/FG)
    * `XA 00 13` -> Especialidad
  * `XA 00 20` -> Electivo
    * `XA 00 21` -> Electivo Licenciatura
    * `XA 00 22` -> Electivo Especialidad
    * `XA 00 23` -> Electivo de Línea de Especialización (DIE, DIM)
    * `XA 00 24` -> Especialización (DII)
  * `XA 00 30` -> Equivalencias de desbloqueos
    * `XA 00 31` -> Termodinámica / Termodinámica Química
    * `XA 00 32` -> `XA 05 01`
    * ...
  * `XA 00 40` -> Equivalencias de requisitos
    * ...
* `XA 01` -> Requisitos de créditos (Base-36)
  * `XA 01 1C` ->  40 créditos aprobados
  * `XA 01 7I` -> 270 créditos aprobados

**Capa de compatibilidad con U-Campus, permite crear cursos arbitrarios y vincularlos a un departamento.**

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
  * `XA 06 01` => (Son lo mismo)
* `XA 16` | GL - Departamento de Geología
* `XA 19` | IN - Departamento de Ingeniería Industrial
* `XA 21` | MA - Departamento de Ingeniería Matemática
* `XA 22` | ME - Departamento de Ingeniería Mecánica
  * `XA 06 01` => (Son lo mismo)
* `XA 23` | MI - Departamento de Ingeniería de Minas
  * `XA 06 01` => (Son lo mismo)
* `XA 24` | MT - Doctorado en Ciencia de los Materiales

**Adaptador entre Malla API y U-Campus:**

* `XA 25` | BT - Pseudo-departamento de Biolotecnología (Null code)
* `XA 26` | IQ - Pseudo-departamento de Química (Legacy code from Química Básica)
* `XA 27` | CM - Pseudo-departamento de Ciencias de los Materiales (Old code for 12/ES)

**Departamentos especiales de U-Campus donde guarda cursos.**

> Malla API no tiene definido cómo manejarlos (sólo 307/QB).

* `XA 303` | EP -> Escuela de Postgrado 
* `XA 305` | ED -> Doctorado en Ingeniería Eléctrica
* `XA 306` | CM -> Departamento de Ciencia de los Materiales
* `XA 307` | QB -> Departamento de Ingeniería Química y Biotecnología
* `XA 310` | FG -> Plataforma
* `XA 12060002` | EI -> Área de Ingeniería e Innovación 
* `XA 12060003` | AA -> Área para el Aprendizaje de la Ingeniería y Ciencias A2IC
