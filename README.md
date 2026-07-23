# technical-challenge

Proyecto desarrollado como parte de un reto técnico utilizando NestJS, Next.js, TypeORM y MySQL. Aunque era mi primera vez trabajando con estas herramientas, venir de Java hizo que varios conceptos como modularidad, DTOs, decoradores e inyección de dependencias resultaran familiares y facilitaran el proceso.

Tecnologías utilizadas:

Backend:
NestJS,
TypeORM,
MySQL,
Swagger,
Class Validator,
API REST

Frontend:
Next.js,
shadcn/ui,
React Hook Form,
API REST (consumo del backend)

Ejecución del proyecto:

Backend (Puerto 4000):
Entrar en la carpeta backend
Instalar dependencias con npm install
Ejecutar el servidor con npm run start:dev

Base de datos (MySQL):
Para inicializar la base de datos utilicé Laragon. Solo fue necesario instalarlo, ejecutarlo y usar el servicio de MySQL incluido. TypeORM crea automáticamente las tablas necesarias al iniciar el backend.

Frontend (Puerto 3000):
Entrar en la carpeta frontend
Instalar dependencias con npm install
Ejecutar con npm run dev

Documentación de la API:
Swagger disponible en http://localhost:4000/api

Decisiones, dificultades y aprendizajes:

Aunque era mi primera vez con NestJS y Next.js, mi experiencia previa con Java ayudó a entender conceptos como modularidad, DTOs y decoradores. El frontend fue la parte más desafiante y donde más tiempo se invirtió, quedando algunos temas pendientes por falta de experiencia con Next.js.

Surgió el problema de CORS al trabajar con backend y frontend en dominios distintos. Se solucionó agregando una configuración de CORS en el archivo main.ts del backend. También aparecieron errores de sintaxis y configuración, especialmente en el archivo tsconfig.json, donde la opción baseUrl generaba errores debido a la configuración inicial generada por Nest.

En la entidad Task, la propiedad completed tiene default: false. Esto significa que si no se envía un valor desde el frontend, la base de datos asigna false automáticamente. Inicialmente intenté siempre enviar el valor, pero no era necesario.

No pude implementar completamente el manejo de errores del backend en el frontend. Consideré replicar validaciones en el frontend para evitar modificar la API, pero quedó pendiente. El manejo de funciones asíncronas y respuestas entre servidores fue parte importante del aprendizaje.

Mejoras futuras:

Agregar autenticación e inicio de sesión.
Tareas por usuario.
Mejorar la interfaz.
Agregar tareas con temporizadores y estados como “time out”.
Implementar manejo completo de errores entre backend y frontend.
Seguir profundizando en las herramientas para perfeccionar habilidades mediante más práctica.

Uso de IA:
Durante el desarrollo utilicé Copilot como herramienta de apoyo para resolver dudas.
