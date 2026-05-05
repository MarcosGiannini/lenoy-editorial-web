<div align="center">

# Editorial Lenoy — Web Oficial

**Edición, difusión y preservación de literatura feminista y LGTB+**
**del único país hispanohablante de África: Guinea Ecuatorial.**

[![Estado](https://img.shields.io/badge/estado-en%20desarrollo-orange?style=flat-square)](https://github.com/MarcosGiannini/lenoy-editorial-web)
[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Licencia](https://img.shields.io/badge/licencia-MIT-green?style=flat-square)](./LICENSE)

*"Somos un mojoncillo necesario."* — Andrea Ramos, co-fundadora

</div>

---

## Sobre el proyecto

[Editorial Lenoy](https://editoriallenoy.com) es una editorial independiente española fundada por **Andrea Ramos** y **Trifonia Melibea Obono**. Publica y difunde literatura feminista y LGTB+ escrita desde Guinea Ecuatorial — un espacio donde escribir sobre disidencia es un acto de valentía.

Este repositorio contiene el código fuente de su web oficial: catálogo de libros, blog editorial, información sobre la asociación y sistema de compra directa.

> Este proyecto no es solo una web. Es la cara pública de un movimiento cultural y activista real. Cada libro que publican es un acto de resistencia frente al olvido.

---

## Stack tecnológico

| Tecnología | Versión | Para qué |
|---|---|---|
| [Astro](https://astro.build) | 5.0 | Framework principal — sitio estático, 0 JS por defecto |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Estilos — sistema de diseño con paleta africana personalizada |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Tipado estático en datos y componentes |

**Sin React. Sin Vue. Sin dependencias innecesarias.** El proyecto es intencionalmente ligero: más rápido, más seguro, más fácil de mantener.

---

## Empezar en local

### Requisitos previos
- Node.js 18 o superior
- npm 9 o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MarcosGiannini/lenoy-editorial-web.git
cd lenoy-editorial-web

# Instalar dependencias
npm install

# Arrancar el servidor de desarrollo
npm run dev
# → http://localhost:4321
```

### Comandos disponibles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload en `localhost:4321` |
| `npm run build` | Genera el sitio estático en `/dist` |
| `npm run preview` | Previsualiza el build de producción en local |
| `npx tsc --noEmit` | Verifica tipos TypeScript sin generar archivos |

---

## Estructura del proyecto

```
lenoy-editorial-web/
│
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── books/          ← portadas (pendiente — Andrea las tiene)
│       ├── authors/        ← fotos de autoras (pendiente)
│       └── blog/           ← imágenes de artículos (pendiente)
│
└── src/
    ├── layouts/
    │   └── BaseLayout.astro      ← head global, SEO, fuentes, nav, footer
    ├── components/
    │   ├── Navbar.astro          ← navegación sticky con 5 secciones
    │   ├── Footer.astro          ← pie de página con links y RRSS
    │   ├── BookCard.astro        ← tarjeta de libro con precio y compra
    │   ├── AuthorCard.astro      ← tarjeta de autora con bio y RRSS
    │   └── BlogPostCard.astro    ← tarjeta de artículo del blog
    ├── data/
    │   ├── books.ts              ← datos de libros (mock → reales próximamente)
    │   ├── authors.ts            ← datos de autoras (mock → reales próximamente)
    │   └── posts.ts              ← artículos del blog (mock → reales próximamente)
    └── pages/
        ├── index.astro           ← Home
        ├── publicaciones/        ← Catálogo de libros
        ├── que-es-lenoy.astro    ← Quiénes somos
        ├── editorial-lenoy.astro ← Línea editorial
        ├── publica-con-nosotras.astro ← Cómo publicar con la editorial
        ├── donde-comprar.astro   ← Dónde y cómo comprar
        └── blog/                 ← Blog editorial
```

---

## Sistema de diseño

La paleta de color es la identidad visual del proyecto. Inspirada en los tonos cálidos africanos.

| Nombre | Color principal | Uso |
|---|---|---|
| `terracotta` | `#c4603a` | Color principal, botones, acentos |
| `forest` | `#2d5016` | Fondos de secciones oscuras, footer |
| `sunset` | `#e8863a` | Badges, destacados, acento secundario |
| `cream` | `#faf8f3` | Fondo general de la web |

**Tipografía:**
- **Playfair Display** — serif elegante para títulos y nombres de libros
- **Inter** — sans-serif para cuerpo de texto, precios, UI

---

## Hoja de ruta

El avance detallado del proyecto está en [ROADMAP.md](./ROADMAP.md).

Estado actual de las páginas:

| Página | URL | Estado |
|---|---|---|
| Home | `/` | ✅ Operativa |
| Publicaciones (listado) | `/publicaciones` | ✅ Operativa (datos mock) |
| Ficha de libro | `/publicaciones/[id]` | ⏳ Pendiente — **Paso 1.1** |
| Blog (listado) | `/blog` | ✅ Operativa |
| Artículo | `/blog/[slug]` | ✅ Operativa |
| Qué es Lenoy | `/que-es-lenoy` | 🔄 Estructura lista, textos pendientes |
| Editorial Lenoy | `/editorial-lenoy` | 🔄 Estructura lista, textos pendientes |
| Publica con nosotras | `/publica-con-nosotras` | 🔄 Formulario listo, Formspree pendiente |
| Dónde comprar | `/donde-comprar` | 🔄 Estructura lista, Stripe pendiente |

---

## Contribuir

Este es un proyecto de encargo privado. Si has llegado aquí y quieres aportar algo, escribe a [hola@editoriallenoy.com](mailto:hola@editoriallenoy.com).

---

## Las personas detrás del proyecto

**[Trifonia Melibea Obono](https://www.eldiario.es/euskadi/trifonia-melibea-obono-activista-escritora-movimiento-negritud-no-autorizada-disidencia_128_12289483.html)** — Co-fundadora. Escritora y activista ecuatoguineana, referente del movimiento negritud y disidencia en Guinea Ecuatorial.

**Andrea Ramos** — Co-fundadora. Profesora de español, correctora, maquetadora. La persona que hace que los libros existan físicamente.

**[Marcos Giannini](https://github.com/MarcosGiannini)** — Desarrollo web. Sus abuelos emigraron de Italia a África — este proyecto le conecta de una forma que va más allá del trabajo.

---

## Licencia

[MIT](./LICENSE) — código libre, historia propia.

---

<div align="center">

Hecho con ♀ ♥ 🌈 para la literatura de Guinea Ecuatorial

*La visibilidad es un acto político. Publicar, también.*

</div>

