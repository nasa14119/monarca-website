# Lenguaje

> [!IMPORTANT]
> Todos las rutas esperadas deben estar disponibles en español. Esto porque es la pagina por defecto a falta del idioma utilizado.

## Agregar un nuevo idioma a soportar

1. Crear un nuevo directorio en `src/i18n` con el _\*locale_ del idioma
2. Actualizar la constante `SUPORT_LOCALES` en `src/lib/const.ts` agregando el locale
3. Automaticamente va a pedir que se actualice la variable `LANGUAGE_LABELS` en `src/lib/const.ts` con el nuevo locale.
4. Agregar un directorio con el mismo locale en `src/pages/[locale]`
5. Ahora puedes agregar las traducciones en la rutas que se deseen.

> [!NOTE]
> El programa automaticamente usara español para las rutas que no tengan traducciones.

\* Abreviatura del idioma en -> ingles, es -> español, etc.

## Info

Todas las paginas estan en dos partes `src/pages/[locale]/[page].astro`. y en `src/sections/[Locale].astro`. Para agregar más rutas se puede agrgar archivos en `src/pages/[nueva_ruta]`
Para traducir una ruta se debe hacer el siguiente procedimiento:

```ts
---
// Base agrega la navegacion y el footer
import Base from "@layouts/Base.astro";
// La ruta que se esta traduciendo debe tener un componente
// con el mismo nombre en mayusculas
import Section from "@/sections/Route.astro";
// Importar el archivo con la traduccion
import locale from "@18n/[locale]/route.ts";
---
// Opcionalmente se puede agregar un titulo a la ruta en el idioma
// Default a "Ruta Monarca"
<Base content={{title : "Titulo"}}>
  <Section content={locale} />
</Base>
```

## Archvios de taduccion

Todas las rutas tienen una interfaz en `src/i18n/layouts/[route].ts`. Importando esta puedes recibir informacion de lo que falta en el tipo (todo lo que debe contenener). Los archivos tienen como clave los nombres de las secciones. Por ejemplo: hero_section, proyect_section, relevance_section. El editor de codigo deberia ayudar a revisar que no hayan errores.

`@i18n/[locale]/route.ts`

```ts
  import type { Route } from "@i18n/layouts/route";
  export default {
    main_content: {
      title: "Titulo",
      content: ["Contenido"],
    },
    // ...
  } satifies Route;
```

Porteriormente de crear el archivo se puede seguir el proceso anterior para agregar la nueva ruta.

- Agregar la ruta en `src/pages/[locale]/[route].astro`
- Agregar Base
- Importar la traduccion y pasarla como parametro `content={importendLocale}`
