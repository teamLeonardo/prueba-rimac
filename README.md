## Arquitectura del Proyecto

La arquitectura de la **Prueba Rimac** está diseñada para cumplir con los requisitos del proyecto, asegurando un desarrollo limpio, escalable y eficiente. A continuación, se detallan los aspectos clave de la arquitectura:

### Estructura del Proyecto

La estructura del proyecto sigue un enfoque modular y limpio, organizado en los siguientes directorios:

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Agrupa los componentes reutilizables de la aplicación, con una organización que sigue la metodología BEM para una mejor mantenibilidad:
    - **elements/**: Elementos básicos (ej. logos, botones).
    - **layouts/**: Estructuras de página que definen el diseño general.
    - **modules/**: Componentes específicos que implementan funcionalidades clave (ej. encabezados, pies de página, formularios).
    - **widgets/**: Componentes más complejos que encapsulan lógica y presentación.
  - **pages/**: Componentes que representan diferentes páginas de la aplicación.
  - **shared/**: Recursos y utilidades compartidos, incluyendo estilos, hooks personalizados y tipos TypeScript.
    - **assets/**: Fuentes e imágenes utilizadas globalmente.
    - **hooks/**: Hooks personalizados para el manejo de lógica compartida.
    - **style/**: Archivos SCSS y Tailwind CSS globales.
    - **types/**: Definiciones TypeScript para tipado estricto.
    - **utils/**: Funciones utilitarias, como cálculos y helpers.
  - **module/**: Agrupación de lógica relacionada con los planes y los usuarios, que incluye los stores y tipos necesarios para la gestión de datos.

### Dependencias

El proyecto incluye varias dependencias que facilitan su desarrollo y mantenimiento:
- **React y Redux**: Para la creación de componentes y la gestión del estado.
- **React Router**: Para la navegación entre páginas.
- **Tailwind CSS + scss**: Para un estilo rápido y responsivo (opcional).
- **Vitest**: Para la implementación de pruebas unitarias.

### Scripts

El archivo `package.json` incluye diversos scripts que facilitan el desarrollo:
- **dev**: Inicia el servidor de desarrollo.
  ```bash
    pnpm run dev
  ```
- **build**: Compila la aplicación para producción.
  ```bash
    pnpm run build
  ```
- **test**: Ejecuta las pruebas unitarias.
  ```bash
    pnpm run test
  ```
- **lint**: Verifica el código con ESLint para mantener su calidad.
  ```bash
    pnpm run lint
  ```
- **format**: Formatea el código con Prettier y ESLint.
  ```bash
    pnpm run format:check
  ```

### Consumo de APIs

El proyecto maneja adecuadamente el consumo de APIs, asegurando una integración fluida de datos y funcionalidades. La validación de formularios se implementa utilizando `react-hook-form` para una gestión eficiente de los datos de entrada.

### Código Limpio y Performance

Se aplica la filosofía de **Clean Code** a lo largo del desarrollo, asegurando que el código sea legible y fácil de mantener. Además, se implementan prácticas de optimización para garantizar un buen rendimiento de la aplicación.

### Manejo de Git y Github

Se mantiene un manejo adecuado de Git y GitHub, facilitando la colaboración y el control de versiones del proyecto.

Con esta arquitectura modular y el uso de tecnologías modernas, la **Prueba Rimac** está diseñada para ser fácilmente extensible y mantenible, adaptándose a futuras necesidades y requisitos.
