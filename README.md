# ![Logo](https://github.com/Ingenieria-de-Software-ITAM-2020/Top-Tiers/blob/main/LogoRedColmillo.png)

**Ingeniería de Software**
**Proyecto Final** 

**Equipo Top Tiers**

**Integrantes:**
- Manuel Fernández Verda — 166496
- Andrea Carolina Padilla Rodriguez — 166605
- Ruben Romero Ortega — 174178
- Juan Carlos Sigler Pliego — 174215

---- 
# Tabla de contenido
1. **[Documento de Requerimientos](#documento-de-requerimientos)**
    1. [Introducción](#1-introducción)
        1. [Propósito](#11-propósito)
        2. [Convenciones del documento](#12-convenciones-del-documento)
        3. [Audiencia prevista y sugerencia de lectura](#13-audiencia-prevista-y-sugerencia-de-lectura)
        4. [Alcance del producto](#14-alcance-del-producto)
        5. [Referencias](#15-referencias)
    2. [Descripción General](#2-descripción-general)
        1. [Perspectiva del producto](#21-perspectiva-del-producto)
        2. [Funciones del producto](#22-funciones-del-producto)
        3. [Clases y características de usuario](#23-clases-y-características-de-usuario)
        4. [Entorno operativo](#24-entorno-operativo)
        5. [Restricciones de diseño e implementación](#25-restricciones-de-diseño-e-implementación)
        6. [Documentación del usuario](#26-documentación-del-usuario)
        7. [Supuestos y dependencias](#27-supuestos-y-dependencias)
    3. [Requerimientos de la interfaz externa](#3-requerimientos-de-la-interfaz-externa)
        1. [Interfaz de usuario](#31-interfaz-de-usuario)
        2. [Interfaz de hardware](#32-interfaz-de-hardware)
        3. [Interfaz de software](#33-interfaz-de-software)
        4. [Interfaz de comunicación](#34-interfaz-de-comunicación)
    4. [Funcionalidades del sistema](#4-funcionalidades-del-sistema)
        1. [Iniciar Sesión](#41-iniciar-sesión)
        2. [Crear grupos](#42-crear-grupos)
        3. [Buscar contactos](#43-buscar-contactos)
        4. [Comunicarte con el chatbot de servicios escolares](#44-comunicarse-con-el-chatbot-de-servicios-escolares)
        5. [Mandar mensajes directos](#45-mandar-mensajes-directos)
        6. [Mandar mensajes a grupos](#46-mandar-mensajes-a-grupos)
        7. [Acceder a notificaciones](#47-acceder-a-notificaciones)
        8. [Configurar mi perfil](#48-configurar-el-perfil)
        9. [Cerrar sesión](#49-cerrar-sesión)
    5. [Otros requerimientos no funcionales](#5-otros-requerimientos-no-funcionales)
        1. [Requerimientos de rendimiento](#51-requerimientos-de-rendimiento)
        2. [Safety Requirements](#52-safety-requirements)
        3. [Security Requirements](#53-security-requirements)
        4. [Atributos de calidad de software](#54-atributos-de-calidad-de-software)
        5. [Reglas de negocio](#55-reglas-de-negocio)
2. **[Plan de calidad](#plan-de-calidad)**
    1. [Identificador del plan de prueba](#1-identificador-del-plan-de-prueba)
    2. [Referencias](#2-referencias)
    3. [Introducción](#3-introducción)
    4. [Elementos de prueba](#4-elementos-de-prueba)
    5. [Problemas de riesgo de software](#5-problemas-de-riesgo-de-software)
    6. [Funcionalidades a probar](#6-funcionalidades-a-probar)
    7. [Funcionalidades que no se deben probar](#7-funcionalidades-que-no-se-deben-probar)
    8. [Enfoque](#8-enfoque)
    9. [Criterios de aprobación / falla del elemento](#9-criterios-de-aprobación--falla-del-elemento)
    10. [Criterios de suspensión y requisitos de reanudación](#10-criterios-de-suspensión-y-requisitos-de-reanudación)
    11. [Entregables de prueba](#11-entregables-de-prueba)
    12. [Tareas de prueba restantes](#12-tareas-de-prueba-restantes)
    13. [Necesidades ambientales](#13-necesidades-ambientales)
    14. [Necesidades de personal y capacitación](#14-necesidades-de-personal-y-capacitación)
    15. [Responsabilidades](#15-responsabilidades)
    16. [Horario](#16-horario)
    17. [Planificación de riesgos y contingencias](#17-planificación-de-riesgos-y-contingencias)
    18. [Aprobaciones](#18-aprobaciones)
    19. [Glosario](#19-glosario)
3. **[Arquitectura](#arquitectura)**
4. **[Metodología](#metodología)**
5. **[Documentación para replicar](#documentación-para-replicar)**
----

# Documento de Requerimientos

## 1. Introducción
### 1.1 Propósito
A continuación, se presenta el documento de especificación de requerimientos para la “Red Colmillo”, un sistema de comunicación interna dedicado al Instituto Tecnológico Autónomo de México. El propósito de este software será permitirle a todos los alumnos y profesores inscritos en el ITAM poder comunicarse con sus distintos compañeros, colegas o areas administrativas del ITAM a lo largo de todo el ciclo escolar. El panorama que seguirá este SRS será dar perspectivas, definiciones y descripciones del software, además de especificar los requerimientos de cada una de las funcionalidades que ofrecerá el software. La versión que se muestra en este documento es "Red Colmillo 1.0".
### 1.2 Convenciones del documento
Para este documento de Especificación de Requerimientos de Software (SRS, por sus siglas en inglés), las prioridades de los requisitos se definieron de la siguiente manera: a los más esenciales, se les asignó la prioridad 1, mientras que a los menos esenciales se les otorgó la 5.
### 1.3 Audiencia prevista y sugerencia de lectura
Este documento va dirigido al personal encargado de darle mantenimiento a la página web Red Colmillo, así como al personal administrativo y de cómputo que utilizarán y explicarán su uso a nuevos usuarios. Para el personal técnico o de desarrollo, se recomienda leer todo el documento de manera secuencial. Para nuevos usuarios, se recomienda leer únicamente la sección 1  de Introducción y la sección 2 de Descripción General.
### 1.4 Alcance del producto
La "Red Colmillo" es un software que le permite a los alumnos y profesores del Instituto Tecnológico Autónomo de México (ITAM) tener un medio rápido y eficiente de comunicación. La comunicación efectiva es una característica esencial para crear relaciones de trabajo positivas y productivas. Cuando la comunicación fluye a través de los integrantes de una institución educativa, se es posible difundir el conocimiento y volver más productivo el trabajo ayudando a alcanzar los objetivos, tanto profesionales, como personales, de cada miembro de la institución. Los beneficios que ofrece la Red Colmillo es brindar un sistema de comunicación que le permite a los alumnos y profesores tener un lugar de acceso fácil a la información que concierne las discusiones más relevantes que se llevan a cabo en los distintos cursos a los que estén inscritos durante el semestre. También, les facilita entablar conversaciones con culquier miembro del ITAM. Todo esto se lorga a través de una interfaz amigable para añadir para poder iniciar conversaciónes individuales o grupales con miembros de la institución. Además, es un sistema que incluye la conversación de los miembros de la institución con un ChatBot 

## 2. Descripción General
### 2.1 Perspectiva del producto
### 2.2 Funciones del producto
### 2.3 Clases y características de usuario
### 2.4 Entorno operativo
### 2.5 Restricciones de diseño e implementación
### 2.6 Documentación del usuario
### 2.7 Supuestos y dependencias

## 3. Requerimientos de la interfaz externa
### 3.1 Interfaz de usuario
### 3.2 Interfaz de hardware
### 3.3 Interfaz de software
### 3.4 Interfaz de comunicación

## 4. Funcionalidades del sistema

### 4.1 Iniciar sesión
#### 4.1.1 Descripción y prioridad
#### 4.1.2 Secuencias de estímulo / respuesta
#### 4.1.3 Requerimientos Funcionales
- REQ-1:

### 4.2 Crear Grupos
#### 4.2.1 Descripción y prioridad
#### 4.2.2 Secuencias de estímulo / respuesta
#### 4.2.3 Requerimientos Funcionales
- REQ-1:

### 4.3 Buscar contactos
#### 4.3.1 Descripción y prioridad
#### 4.3.2 Secuencias de estímulo / respuesta
#### 4.3.3 Requerimientos Funcionales
- REQ-1:

### 4.4 Comunicarse con el chatbot de servicios escolares
#### 4.4.1 Descripción y prioridad
#### 4.4.2 Secuencias de estímulo / respuesta
#### 4.4.3 Requerimientos Funcionales
- REQ-1:

### 4.5 Mandar mensajes directos
#### 4.5.1 Descripción y prioridad
#### 4.5.2 Secuencias de estímulo / respuesta
#### 4.5.3 Requerimientos Funcionales
- REQ-1:

### 4.6 Mandar mensajes a grupos
#### 4.6.1 Descripción y prioridad
#### 4.6.2 Secuencias de estímulo / respuesta
#### 4.6.3 Requerimientos Funcionales
- REQ-1:

### 4.7 Acceder a notificaciones
#### 4.7.1 Descripción y prioridad
#### 4.7.2 Secuencias de estímulo / respuesta
#### 4.7.3 Requerimientos Funcionales
- REQ-1:

### 4.8 Configurar el perfil
#### 4.8.1 Descripción y prioridad
#### 4.8.2 Secuencias de estímulo / respuesta
#### 4.8.3 Requerimientos Funcionales
- REQ-1:

### 4.9 Cerrar sesión
#### 4.9.1 Descripción y prioridad
#### 4.9.2 Secuencias de estímulo / respuesta
#### 4.9.3 Requerimientos Funcionales
- REQ-1:

## 5. Otros requerimientos no funcionales
### 5.1 Requerimientos de rendimiento
El sistema debe tener un tiempo de respuesta menor a 200ms. Además de esto, se requiere que los servidores y bases de datos del ITAM se encuentren activos para que la aplicación funcione correctamente.

### 5.2 Safety Requirements
Dada la naturaleza personal de la mensajería privada y los riesgos que esta puede provocar, se protegerá la privacidad y seguridad de los usuarios incorporando cifrado de extremo a extremo en nuestra aplicación. Sabiendo que podrían existir usuariso que le den un mal uso a esta herramienta, los usuarios podrán evitar que alguien se comunique con ellos directamente desde un chat utilizando la función de bloqueo. Esto evitará permitir que esta plataforma se utilice con objetivos de bullying o acoso. 

Es un hecho que las pantallas causan fatiga ocular (ojo seco, visión borrosa, dolor de cabeza...) por lo que se recomiensa a los usuarios tomarse un descanso de 5 minutos después de cada hora que pasen utilizando nuestra aplicación. 

### 5.3 Security Requirements
* El software protegerá la confidencialidad de los usuarios resguardando los datos sensibles como nombres de usuarios y grupos a los que están inscritos los distintos alumnos. Las conversaciones privadas se mantendrán de esta forma y su contenido solo podr+a visualizarse por los miembros de la conversación. Toda conversación será protegida y encriptada al momento de ser enviada, procesada o almacenada la Red Colmillo para mantener la privacidad de los usuarios y sus conversaciones.

* Todas los usarios que inicien sesión serán automáticamente veriicados utilizando un microservicio provisto por el Instituto Tecnológico Autónomo de México. La Red Colmillo proverá al sistema del ITAM el usuario y contraseña del individuo que esté solicitando tener acceso a la página de tal forma que la contraseña se provea ya hasheada para evitar un filtro de esta información sensible durante el proceso de comunicación con los servidores del ITAM.

* Se protegerá la integridad de los datos para que no hayan modificaciones erróneas en las especificaciones de los alumnos y sus características, en el contenido de las conversaciones y en los archivos que se hayan subido al sistema.

* Se harán backups cada minuto de la información del sistema, las conversaciones y los grupos existentes.

* Ante una caída del sistema, existirá un tiempo máximo de tolerancia y espera de 30 minutos. Durante las dos semanas del curso y las últimas 3 semanas del curso (que incluyen los exámenes finales) el tiempo de máxima tolerancia y espera ante una caida debe reducirse a 15 minutos.

* Service Level Agreements = 90%

* El software utilizará autenticación dos pasos cada vez que un usuario ingrese al sistema de un dispositivo no marcado previamente como confiable. Este proceso le requerirá al alumno confirmar el inicio de sesión a traves de un correo institucionales que se le mandará.

* Los permisos administrativos que permitan alterar la información de los cursos y sus gruposno deberán asignarse a los alumnos y/o profesores, solo al administrador del sistema. Los profesors y alumnos podrán modificar la información de los grupos que ellos creen de manera independiente.

* Cada acción que se lleve a cabo en la Red Colmillo deberá de guardarse en el log del sistema. Las acciones correspondientes a mandar mensaje únicamente deberán de indicar las personas que están entablando una conversación, más nos e guardara el contenido de esta.

* Cada que se altere la información de un curso, deberá de notificarse al profesor del mismo. El sistema deberá verificar diariamente que los miembros pertenecientes a cada grupo sigan inscritos al mismo, de lo contrario deberá eliminar al alumno. Si por alguna razón un profesor abandona la institución durante el semestre, deberá protegerse el grupo. El profesor será eliminado y los permisos que tenía pasarán al administrador del sistema.

### 5.4 Atributos de calidad de software
- **Portabilidad:** 
- **Confiabilidad:**  
- **Mantenibilidad:** 
- **Facilidad de testeo:**  
- **Reusabilidad:**

### 5.5 Reglas de negocio

# Plan de calidad
## 1. Identificador del plan de prueba
## 2. Referencias
## 3. Introducción
## 4. Elementos de prueba
## 5. Problemas de riesgo de software
## 6. Funcionalidades a probar
## 7. Funcionalidades que no se deben probar
## 8. Enfoque
## 9. Criterios de aprobación / falla del elemento
## 10. Criterios de suspensión y requisitos de reanudación
## 11. Entregables de prueba
## 12. Tareas de prueba restantes
## 13. Necesidades ambientales
## 14. Necesidades de personal y capacitación
## 15. Responsabilidades
## 16. Horario
## 17. Planificación de riesgos y contingencias
## 18. Aprobaciones
## 19. Glosario

# Arquitectura

# Metodología

# Documentación para replicar
