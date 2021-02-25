<p align="center">
  <img width="460" height="200" src="img/LogoRedColmillo.png">
</p>

# Definición del proyecto
&nbsp;
## Descripción y motivación

La “Red Colmillo” es un sistema de mensajería instantánea dedicada al Instituto Tecnológico Autónomo de México (ITAM). El propósito de este software es permitirle a todos los alumnos, profesores y personal administrativo del ITAM tener un medio de comunicación rápido y eficiente. 

Este proyecto surge ante la necesidad de tener un sistema de comunicación eficiente en la comunidad ITAM. La comunicación efectiva es una característica esencial para crear relaciones de trabajo positivas y productivas en un entorno educativo. Cuando la comunicación fluye a través de los integrantes de una institución, es posible difundir conocimiento y hacer más productivo el trabajo. Esto ayuda a cada miembro de la institución a alcanzar sus objetivos profesionales y personales. 

Los beneficios que intenta proveer este servicio son los siguientes. Primero, brinda un sistema de comunicación que le permite a los alumnos y profesores del ITAM tener un lugar de acceso fácil a la información que concierne las discusiones más relevantes de sus cursos. Segundo, les facilita a los miembros de la comunidad entablar conversaciones individuales o grupales con cualquier otro colega de la institución a través una interfaz amigable. Por último, la aplicación incluye un sistema de asistencia sobre asuntos estudiantiles por medio de un ChatBot.

## Metodología de desarrollo del software
La metodología de que elegimos para el desarrollo de la “Red Colmillo” es la metodología impulsada por funcionalidades (conocida en inglés como *feature driven*). Esta metodología ágil organiza el desarrollo de software al rededor del progreso e implementación de funcionalidades específicas. Es decir, el producto se construye a través de ciclos de desarrollo que se enfocan a implementar una única funcionalidad y probarla con el usuario. Una vez terminado el ciclo se puede pasar al desarrollo de otra funcionalidad en una nueva iteración. El valor del desarrollo basado en funcionalidades es que te permite enfocarte en las funcionalidades que son altamente valoradas por el usuario y desarrollar un producto de calidad basándose en la experiencia de usuario.

## Restricciones de diseño e implementación
La versión que se muestra en este respositorio es "Red Colmillo 1.0". Red Colmillo únicamente servirá como mensajería instantánea. No se podrán realizar llamadas de voz ni de video a través de la aplicación. Se utilizará el servicio de inicio de sesión del ITAM, así que el usuario tampoco podrá crear su propia cuenta, deberá ingresar con las credenciales proporcionadas por la institución. Por lo pronto, sólo se implementará el sistema en español, y únicamente como aplicación web. 


# Aspectos técnicos y de funcionalidad
&nbsp;
## Entorno operativo
El software estará diseñado para ser una aplicación web que opere con garantía en versiones más recientes de navegadores que soporten HTML5 y JavaScript. Se sugieren Google Chrome, Safari, Firefox y Microsoft Edge. Es decir, funciona sobre cualquier sistema operativo que soporte estos navegadores. Se tomará como base el funcionamiento de la aplicación sobre una computadora como dispositivo.

## Clases y características de usuario
Los usuarios que interactuarán con la aplicación son:
+ **Estudiantes:** todo individuo que esté tomando clases en la institución, ya sea licenciatura, maestría, doctorado, diplomado, etc.
+ **Profesores:** todos los catedráticos de la institución.
+ **Personal administrativo:** todos los miembros administrativos de las divisiones académicas y departamentos de servicios escolares (caja, becas, servicio social, etc.).
+ **Administrador del sistema:** persona (s) encargada (s) de mantener la página web y el ChatBot, así como asignar a los alumnos y profesores a los chat grupales de los cursos que les correspondan.

## Funciones del producto
Las principales funciones de Red Colmillo son:
+ Comunicarse con Colmillo: el alumno debe poder mandar mensajes al chat ChatBot del sistema.
+ Mandar mensajes a grupos: el alumno debe poder comunicarse con sus compañeros y profesor (a) de sus materias a través del chat grupal del curso.
+ Crear grupos: el alumno debe poder crear grupos para comunicarse con sus compañeros de equipo.
+ Mandar mensajes directos: el alumno debe poder comunicarse con los miembros de la comunidad ITAM.
+ Buscar contactos: el alumno debe poder buscar a los miembros de la comunidad ITAM para comunicarse con ellos.
+ Ver notificaciones: el alumno debe poder acceder a un log que muestre los mensajes de sus profesores (as) y los archivos recibidos.## Funciones del producto
Las principales funciones de Red Colmillo son:
+ Comunicarse con Colmillo: el alumno debe poder mandar mensajes al chat ChatBot del sistema.
+ Mandar mensajes a grupos: el alumno debe poder comunicarse con sus compañeros y profesor (a) de sus materias a través del chat grupal del curso.
+ Crear grupos: el alumno debe poder crear grupos para comunicarse con sus compañeros de equipo.
+ Mandar mensajes directos: el alumno debe poder comunicarse con los miembros de la comunidad ITAM.
+ Buscar contactos: el alumno debe poder buscar a los miembros de la comunidad ITAM para comunicarse con ellos.
+ Ver notificaciones: el alumno debe poder acceder a un log que muestre los mensajes de sus profesores (as) y los archivos recibidos.



# ¿Cómo se debe de utilizar?
&nbsp;
## Funcionalidades del sistema

### 4.1 Iniciar sesión
#### 4.1.1 Descripción y prioridad
A esta funcionalidad se le otorgó prioridad muy alta (1) porque el usuario debe poder iniciar sesión para llevar a cabo las demás funcionalidades.
Ningún miembro de la comunidad ITAM podrá crear su propia cuenta; esta será otorgada por la institución. Es por eso que, para el inicio de sesión, se usará el servicio de autenticación del ITAM.
#### 4.1.2 Secuencias de estímulo / respuesta
Las acciones del usuario y respuestas del sistema que estimulan el comportamiento definido para esta funcionalidad son:
1. El usuario está inscrito o empleado en el ITAM durante el semestre próximo.
2. El usuario cuenta con su nombre de usuario otorgado por la institución y con su contraseña.
3. El usuario ingresa a la página web de Red Colmillo.
4. El sistema redirige al usuario a la página de autenticación de las credenciales de inicio de sesión del ITAM.
5. El usuario ingresa su nombre de usuario y contraseña.
6. En caso de que el usuario haya ingresado las credenciales correctas, se redirige al alumno a la página principal de Red Colmillo.
7. En caso de que el usuario haya ingresado las credenciales incorrectas, se le hace saber al alumno que su nombre de usuario y/o contraseña no concuerdan, y se repite desde el punto 3.
#### 4.1.3 Requerimientos Funcionales
- *REQ-1: El ITAM debe generar y otorgar al usuario sus credenciales de inicio de sesión.*
- *REQ-2: Únicamente los miembros inscritos al ITAM pueden hacer uso de esta herramienta, por lo tanto solo ellos están autorizados a hacer login.*
- *REQ-3: El usuario no debe poder cambiar su nombre de usuario.*
- *REQ-4: El usuario debe poder cambiar su contraseña.*

### Crear Grupos
A esta funcionalidad se le otorgó una prioridad media (3) porque el objetivo del sistema es mejorar la comunicación de los alumnos con los profesores. Esta funcionalidad sirve para crear grupos nuevos entre alumnos de la escuela. Se pueden crear un número ilimitado de grupos, al iniciar cada semestre los grupos automáticos serán los de cada clase.

### 4.3 Buscar contactos
Para poder iniciar una conversación a través de un mensaje directo, un usuario debe buscar primero en contacto del miembro del ITAM con el que se quiere comunicar. Esto lo puede realizar a través de la sección de búsqueda que se proporcionará en la aplicación. Se considera que esta es una funcionalidad de prioridad alta (2) porque brinda a los alumnos la información necesaria para poder utilizar la aplicación de mensajería directa. Sin embargo, se le ha asignado prioridad 2 debido a que no es la principal función del sistema. El alumno podrá acceder en la parte superior de la interfaz a esta funcionalidad.

### 4.4 Comunicarse con el ChatBot de servicios escolares
Con el objetivo de acercar a los usuarios a la comunidad del ITAM se diseñó Colmillo, el chatbot propio del ITAM. El usuario entonces podrá interactuar con Colmillo para consultar las fechas y avisos importantes por parte de la escuela o bien para comunicarse con un área de servicios escolares (como cajas, becas, centro de tesis). Se considera que esta funcionalidad tiene una prioridad alta (2) dado que le brinda al software un valor añadido que ningun otro software podría ofrecer al acercar a los alumnos con servicios propios de la institución.

### 4.5 Mandar mensajes directos
Uno de los objetivos primordiales del software es precisamente que el usuario pueda tener una conversación, de forma segura y accesible, con cualquier miembro con quien así lo desee del ITAM. Es por ello que a esta funcionalidad se le determina una prioridad muy alta (1). El alumno entonces podrá acceder a una interfaz donde pueda mantener conversaciones de mensajería directa con los contactos deseados. Esta interfaz debe mostrar al centro de la imagen el área de mensajería.

### 4.6 Mandar mensajes a grupos
A esta funcionalidad se le otorgó una prioridad muy alta (1) porque los grupos son un punto de interacción clave entre maestro y alumno. Los mensajes deben llegar a todos los miembros del grupo y guardarse en un historial. 

### 4.7 Acceder a notificaciones
Al iniciar sesión, el alumno debe poder visualizar de manera rápida y sencilla los mensajes más importantes recibidos durante su ausencia. A esta funcionalidad se le otorgó prioridad alta (2): aunque le facilitará al usuario el seguimiento de sus conversaciones y le permitirá visualizar más facilmente los anuncios de sus profesores, no es indispensable para el funcionamiento del sistema. En un panel del lado derecho, se mostrarán únicamente los mensajes de sus profesores y los archivos que se hayan mandado en sus grupos.

### 4.8 Subir documentos
A esta funcionalidad se le otorgó una prioridad media (3). Para extender las capacidades de una red de comunicación simple, esta funcionalidad permite que los usuarios puedan subir documentos a los grupos para que todos los miembros puedan verlos, estos documentos pueden ser desde material de clase hasta tareas.

### 4.9 Cerrar sesión
Con el fin de resguardar su seguridad, el usuario podrá cerrar sesión cuando lo desee. Además, para proteger sus datos y conversaciones, el sistema también podrá finalizar la sesión del usuario en caso de que se detecte inactividad durante 7 minutos. Esta funcionalidad cumple con los requisitos de seguridad, es por eso que se le otorgó una prioridad alta (2), sin embargo, no es necesaria para el funcionamiento general del sistema.

# Documentación para replicar

Requisitos
- Descargar [Justinmind](https://www.justinmind.com/download).
- Clonar o descargar este repositorio.

A continuación se muestran los pasos a seguir para navegar sobre el prototipo del software.

1. Abrir Justinmind 
2. Abrir prototipo ```RedColmillo.vp```
3. Clic en simular prototipo.
4. Ingresar correo y contraseña, y clic en iniciar sesión.
![login](img/simular/login.png)
5. Clic en "Chat grupal".
6. Escribir "Mi computadora no tiene cámara :(((" como mensaje.
![chat grupal](img/simular/chat-grupal.png)
7. Clic en el ícono de enviar.
8. Clic en "Documentos".
9. Clic en "Materiales de clase".
10. Clic para regresar a documentos.
![regresar a documentos](img/simular/regresar-documentos.png)
11. Clic en "Tareas"
12. Clic en "Nuevo"
13. Clic en "Nuevo grupo"
14. Escribir "Equipo Inge Software" en nombre del grupo, escribir descripción y clic en "Crear Grupo".
![nuevo grupo](img/simular/nuevo-grupo.png)
15. Clic en ícono para buscar personas.
![personitas](img/simular/personitas.png)
16. Clic en "Agregar miembros".
17. Escribir "ruben" en la barra de buscador y clic en ícono de lupa.
![buscar ruben](img/simular/buscar-ruben.png)
18. Clic en "Rubén Romero Ortega".
19. Clic en ícono para buscar personas nuevamente.
20. Clic en notificación de "Liliana Millán".
![notificación](img/simular/notificacion.png)
21. Ir a la pestaña de mensajes.
![ir a mensajes](img/simular/ir-mensajes.png)
22. Clic en "Rubén Romero".
23. Escribir "Había tarea??????" en la barra de mensajes y enviar.
![mensaje privado](img/simular/habia-tarea.png)
24. Clic en "Nuevo chat"
25. Escribir "Andrea" en el buscador y clic en el la lupa.
![buscar Andrea](img/simular/buscar-andrea.png)
26. Clic en "Andrea Padilla".
27. Escribir "Rola la tareaaaaaaa" en la barra de mensajes y enviar.
28. Ir a la pestaña de Colmillo.
![Ir con Colmillo](img/simular/ir-colmillo.png)
29. Escribir y enviar (o clic) en "¿Qué fechas importantes se acercan?".
![Fechas importantes](img/simular/fechas.png)
30. Clic nuevamente en ícono de enviar.
31. Escribir y enviar "Comunícame con Cajas"
![Comunicar a cajas](img/simular/comunicar.png)
32. Clic nuevamente en ícono de enviar.
33. Abrir el chat de Cajas
![abrir chat Cajas](img/simular/cajas.png)
34. Dos veces clic en ícono de enviar.
35. Clic en "Regresar con Colmillo".
![Regresar con Colmillo](img/simular/regresa-colmillo.png)

