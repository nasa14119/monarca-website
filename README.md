# Pagina web monarca

## Installación

### Requerimientos previos

- Instalar [Node.js](https://nodejs.org/es/download/)
- Instalar [git](https://git-scm.com/install/)
- Una cuenta de [Github](https://github.com/)

Se recomienda utilizar [VSCode](https://code.visualstudio.com/download) como editor de texto.

Para saber si se instalo de forma correcta node y git, se puede correr el comando `node -v` y `git --version`.

De no estar instalados no reconocerá el comando. De estarlo deberia aparecer la versión del software instalado.

Se necesita utilizar la terminal para navegar a donde se quiere instalar el proyecto.
Antes de meterte en la terminal es importante crear la carpeta y recordar la ruta de donde se encuntre (si se puede crear en la terminal pero pues es para evitar complicaciones).

- Windows: [comandos basicos de Windows](https://www.xataka.com/basics/comandos-basicos-para-dar-tus-primeros-pasos-consola-windows-cmd)
- MacOS: [comandos basicos de MacOS](https://www.xataka.com/basics/39-comandos-basicos-para-dar-tus-primeros-pasos-terminal-macos)

> [!NOTE]
> El comando clave es `cd` para cambiar de directorio en ambos sistemas operativos.
> `ls` o `dir` para listar los archivos y carpetas.

### Existen dos formas de instalar el proyecto

Se puede instalar el poryecto en si (recomendado) o se puede crear una copia en tu propia cuenta de Github (Fork, vea un tutorial de como hacerlo de forma correcta).

```sh
  git clone https://github.com/nicolasamaya/monarca-website.git .
```

```sh
  git fork https://github.com/nicolasamaya/monarca-website.git .
```

Al correr cualquiera de los dos comandos en la terminal, se agregaran todos los archivos en el directorio actual.

## Comandos importantes

Intalación de los paquetes adicionales

> [!TIP]
> Este comando debe correrse despues de la instalación del proyecto.

```sh
  npm install
```

Entorno de desarrollo.

```sh
  npm run dev
```

Build (compilación a los archivos estáticos)

```sh
  npm run build
```

Previsualización de los archivos estáticos

```sh
  npm run preview
```

> [!NOTE]
> Estos comandos te diran que debes poner en tu navegador para su visualización.
> Normalmente se abre en el puerto `http://localhost:4321`.

> [!TIP]
> Los archivos estaticos finales se encontraran en la carpeta ./dist

## Lenguajes

Visita este sitio para revisar la documentación: [docs lang](https://github.com/nasa14119/monarca-website/tree/main/src/i18n/docs.md). Toda la información relevante a los leguajes esta disponible en la carpeta `src/i18n`.

## Constantes

El proyecto tiene una seria de valores que no cambian y pueden ser encontrados en la carpeta `src/lib/const.ts`. Es importante el de los idimas soportardos. Y hay otros tipos de configuraciones en el mismo, como el link de donaciones.

## Estructura de archivos

```
.
├── public
│   └── imgs
│       └── HomeCarrousel
└── src
    ├── assets
    │   ├── icons
    │   ├── imgs
    │   ├── logos
    │   └── sponsors
    ├── components
    │   ├── about
    │   ├── contact
    │   ├── footer
    │   ├── home
    │   ├── jardines
    │   ├── monarca
    │   ├── navegation
    │   ├── oais
    │   ├── oasis
    │   ├── shared
    │   ├── shrines
    │   └── ui
    ├── i18n
    │   ├── en
    │   ├── es
    │   └── layouts
    ├── layouts
    ├── lib
    ├── pages
    │   └── en
    ├── sections
    └── styles
```

## Notas iniciales para desarrollo

Para este proyecto se intenta mantener un _"screaming archictecture"_. Este es un proyecto creado con el uso de Astrojs en conjunto con node.

### Desarrollado por

Nicolas Amaya Sarmiento \
web: [nicolas-amaya.onrender.com](https://nicolas-amaya.onrender.com/) \
© 2026
