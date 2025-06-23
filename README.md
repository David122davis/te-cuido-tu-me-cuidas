# Te cuido, tú me cuidas 

Una aplicación desarrollada con **Ionic + Angular** orientada a mejorar la experiencia de cuidado y citas médicas, diseñada con un enfoque accesible, visualmente atractivo y funcional.  

##  Características implementadas (50% del contenido)

- Página de **inicio de sesión** con validación básica.
- **Formulario de registro** con campos personalizados (nombre, apellidos, edad, correo, dirección, teléfono, usuario y contraseña).
- Pantalla principal (Tab1) con opciones de:
  - Conocer datos de la cita.
  - Comenzar y finalizar cita (con feedback en pantalla).
  - Emergencia (mensaje simulado de contacto al 133).
  - Acceso a datos personales.
- **Pantalla de detalles de la cita (Tab2)** con datos precargados y estilo visual.
- **Pantalla de datos personales (Tab3)** editable y con opción de guardar cambios.
- Uso de estilos **pastel**, tipografía romántica y una imagen decorativa común en todas las pantallas.
- Navegación entre pantallas mediante router Ionic.

## Componentes utilizados

- `IonButton`
- `IonInput`
- `IonLabel`
- `IonCard`
- `IonContent`
- `IonToolbar`
- `IonTitle`
- `IonImg`
- `IonHeader`

##  Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/te-cuido-tu-me-cuidas.git
   cd te-cuido-tu-me-cuidas
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación:

   ```bash
   ionic serve
   ```

##  Problemas enfrentados y soluciones

- **Problema**: Error al cargar rutas en `app-routing.module.ts`.  
  **Solución**: Se verificaron los paths correctos y se agregó el módulo correspondiente (`home`, `registro`, `tabs/tab1`, `tab2`, `tab3`) en el enrutador.

- **Problema**: `'ion-label' is not a known element`  
  **Solución**: Se aseguraron las importaciones necesarias (`IonLabel`) en los componentes standalone, además de declarar correctamente los `schemas` si era necesario.

- **Problema**: Estilos no aplicaban correctamente.  
  **Solución**: Se definieron clases CSS personalizadas en `global.scss` y `tab1.page.scss` para lograr una visual atractiva con colores pastel.

##  Estructura del proyecto

```
src/
   app/
      registro/     # Registro de usuario
       tabs/
           tab1/         # Inicio de sesión
               home/         # Opciones principales
               tab2/         # Datos de la cita
               tab3/         # Datos personales editables
assets/
theme/
variables.scss    # Colores personalizados
global.scss           # Estilos globales
```

##  Estado actual

- Componentes principales funcionales.
- Estética visual romántica implementada.
- Navegación completa entre pantallas.
- Datos actualmente están simulados (sin base de datos); se espera conexión futura a backend.

---

Parte B

Nueva funcionalidad: Tab 4

Se ha agregado una nueva pestaña (tab4) a la aplicación.

Ubicación:
- `src/app/tab4/`

Características:
- Interfaz propia conectada al sistema de navegación por pestañas (`tabs.page.html`).
- Puede usarse para mostrar información adicional, estadísticas, o configuración de usuario (según necesidad).

Cómo acceder:
La pestaña está disponible desde la barra inferior de navegación junto a `Tab1`, `Tab2`, y `Tab3`.

Estado:
Integrado y funcional en la estructura principal de Ionic con rutas configuradas.

Desarrollado por David Elizalde
