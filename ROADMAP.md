# ROADMAP — EDITORIAL LENOY WEB
> Este archivo es la fuente de verdad del avance del proyecto.
> **El asistente de IA DEBE leer este archivo DESPUÉS de leer el PROMPT_MAESTRO y ANTES de tocar cualquier código.**
> Última actualización: **1 septiembre 2026 — SEO y seguridad básicos añadidos; deploy de Netlify pausado por créditos.**

---

## ⚠️ DECISIÓN ESTRATÉGICA — ESTRATEGIA DE CONTENIDOS (5 mayo 2026)

> **Situación:** Andrea no va a facilitar textos, portadas ni información real hasta que la web esté completamente construida.

**El modelo de trabajo acordado es:**
1. Marcos construye toda la estructura técnica de la web primero (casa vacía pero funcional)
2. Una vez lista, Andrea y Melibea hacen la **"mudanza"**: rellenan todos los textos `[PENDIENTE]`, suben portadas reales, añaden sus bios, etc.
3. La mudanza se hace a través del **CMS (Decap CMS)** — Marcos les enseña a usarlo. No necesitan saber código.

**Consecuencias para el ROADMAP:**
- Los pasos 1.2, 1.3, 1.4, 1.5 (páginas de contenido) ya tienen estructura base creada en el Paso 0.2. **No hace falta volver a tocarlos hasta la mudanza.**
- La prioridad técnica ahora es: terminar todo lo que se puede construir sin contenido (CMS, dark mode, SEO, seguridad, formularios), y dejar la mudanza para el final.
- El onboarding del CMS (Fase 2) se convierte en la **fase de transición** entre construcción y mudanza.
- Todo dato que falte pedir a Andrea/Melibea vive en `PENDIENTES_ANDREA.md`. Ese documento debe actualizarse cada vez que aparezca un nuevo `[PENDIENTE]`, bloqueo externo o dato recibido.

---

## PROTOCOLO DE INICIO DE SESIÓN

> Sigue este orden sin saltarte ningún paso. Siempre. Sin excepciones.

```
1. Leer PROMPT_MAESTRO_EDITORIAL_LENOY.md COMPLETO
   → Entiendes el proyecto, el cliente, las reglas, la paleta, la seguridad, las buenas prácticas.
   → Sin esto no puedes saber CÓMO hacer las cosas correctamente.

2. Leer este ROADMAP.md COMPLETO
   → Entiendes el estado actual, qué se ha hecho, qué toca ahora.
   → Sin el PROMPT_MAESTRO previo, este archivo no tiene suficiente contexto.

3. Leer PENDIENTES_ANDREA.md COMPLETO
   → Entiendes qué falta pedir a Andrea/Melibea, qué ya está resuelto y dónde vive cada dato en el repo.

4. Confirmar con Marcos
   → "He leído los documentos canónicos. El estado actual es [X]. El siguiente paso es [Y]. ¿Confirmas que empezamos?"

5. Solo entonces, actuar.
```

**Analogía para entenderlo:** Un arquitecto que llega a la obra cada mañana primero lee los planos del edificio (PROMPT_MAESTRO: qué se construye, materiales, normas), y luego lee el parte de obra de ayer (ROADMAP: qué se hizo, qué toca hoy). Nunca al revés.

---

## CÓMO USAR ESTE ARCHIVO

- Antes de tocar código: leer el estado actual y confirmar qué paso toca.
- Al iniciar un paso: crear una rama git con el nombre indicado en cada paso.
- Al terminar un paso y funcionar: hacer merge a `main`, push, y marcar como ✅ aquí.
- Si algo cambia (requisito nuevo, decisión, bloqueo): actualizar este archivo ANTES de continuar.
- Si algo afecta a información pendiente de Andrea/Melibea: actualizar también `PENDIENTES_ANDREA.md`.
- Al terminar cualquier tarea, el asistente debe cerrar de forma proactiva: estado actual, cambios pendientes, acción git recomendada (`commit`, crear rama, `merge`, `push` o borrar rama si toca), siguiente paso del ROADMAP y propuesta concreta de qué hacer ahora.
- Cada acción relevante debe explicarse como a un junior engineer: por qué se hace así, cómo se hace y cuándo toca dentro del flujo del proyecto, incluyendo comandos y jerga técnica cotidiana.
- **Nunca se avanza al siguiente paso sin que Marcos lo apruebe explícitamente.**

---

## PROTOCOLO DIDÁCTICO CONTINUO

> Esta sección es obligatoria durante todo el proyecto, no solo al empezar pasos grandes.

El asistente debe explicar cada acción relevante como una maestra técnica acompañando a un junior engineer:
- **Por qué:** qué problema resuelve, qué riesgo evita o qué criterio técnico justifica la decisión.
- **Cómo:** qué archivo, comando, patrón o herramienta se usa.
- **Cuándo:** en qué momento del flujo toca hacerlo y qué habilita después.
- **Qué significa:** explicar la jerga o comando si puede ser nuevo para Marcos.

Aplica a código, documentación, Git, terminal, builds, tests, merges, pushes, ramas, verificaciones, decisiones visuales, SEO, seguridad, CMS y propuestas de siguientes pasos.

Ejemplos obligatorios de conceptos que deben explicarse cuando aparezcan:
- `git add`: preparar cambios para el próximo commit.
- `git commit` / "comitear": guardar una foto del trabajo en el historial local.
- `git push` / "pushear": subir commits locales a GitHub.
- `git merge` / "mergear": integrar una rama en otra.
- `build`: generar la versión final de la web y detectar errores antes de publicar.
- `deploy`: publicar la web en el servidor/plataforma.

La explicación debe ser clara y breve: suficiente para que Marcos aprenda el razonamiento sin convertir cada respuesta en una clase larga.

---

## PROTOCOLO DE CIERRE PROACTIVO

> Esta sección es obligatoria al terminar tareas, revisiones, cambios de código o documentación.

El asistente debe terminar cada intervención útil con:
- **Estado:** rama activa, si hay cambios sin commit, si el build/test se ejecutó y si el ROADMAP queda actualizado.
- **Siguiente acción operativa:** recomendar si toca hacer commit, crear rama, mergear, pushear, borrar rama, arrancar servidor, pedir revisión visual o esperar aprobación.
- **Siguiente paso del roadmap:** indicar el paso exacto que viene después y si puede empezarse o requiere confirmación de Marcos.
- **Propuesta:** una recomendación concreta y breve, por ejemplo: "Propongo hacer commit de esta actualización documental y después, si confirmas, abrir la rama `paso-3.4-favicon-pwa`."

Si hay varias rutas posibles, ofrecer máximo 2 o 3 y recomendar una. Si el repo queda sucio, decirlo explícitamente.

---

## ESTADO ACTUAL DEL PROYECTO

| Categoría | Estado |
|---|---|
| **Rama activa** | `main` |
| **Build** | ✅ 19 páginas estáticas, sin errores (verificado 30 agosto 2026) |
| **Paso en curso** | Cierre y publicación de la revisión editorial de agosto |
| **Último paso completado** | Catálogo completo: 5 portadas y 5 sinopsis revisadas ✅ |
| **Siguiente paso** | Verificar el autodeploy de Netlify y confirmar Stripe, dominio/email y accesos CMS |
| **Deploy Netlify** | ✅ https://steady-scone-31c2af.netlify.app/ (auto-deploy en push a `main`) |
| **Bloqueantes de contenido** | Ninguno en `src/` |
| **Pendiente confirmar** | Stripe · dominio/email corporativo · onboarding/accesos CMS |
| **Contenido real integrado** | 5 libros · 4 autorías · 5 portadas · 5 sinopsis · textos institucionales · estatutos · prensa · legal/RGPD |

## PRIORIDAD ACTUAL

1. Publicar en `main` la sinopsis del Certamen, la regla de compra y el lenguaje inclusivo aprobados.
2. Verificar el autodeploy y revisar las páginas afectadas en Netlify.
3. Confirmar el estado real de Stripe, dominio/email y accesos CMS antes de reabrir esas fases.
4. Ejecutar una revisión final de lanzamiento cuando estén resueltos esos servicios externos.

> **Nota histórica:** las fases detalladas que siguen documentan cómo se construyó el proyecto desde mayo. Sus casillas antiguas no deben usarse para decidir el siguiente trabajo cuando contradigan el estado vigente anterior.

---

## FASE 0 — ARQUITECTURA DE NAVEGACIÓN
> **Objetivo:** Adaptar el Navbar y URLs a la estructura real que pide Andrea en su wireframe (5 secciones).
> **Por qué primero:** Sin la navegación correcta, todas las páginas que creemos después no tienen donde "colgar". Es como construir las habitaciones antes de diseñar la casa.

### Paso 0.1 — Reorganizar Navbar a 5 secciones
- **Rama:** `paso-0.1-navbar-estructura-andrea`
- **Estado:** ✅ Completado (5 mayo 2026)
- **Qué se hizo:**
  - `Navbar.astro`: `navLinks` cambiado de 3 a 5 links según wireframe de Andrea. Gap ajustado a `gap-5 lg:gap-8` para que 5 items quepan bien en pantallas medianas. CTA "Ver catálogo" actualizado a "Ver publicaciones" → `/publicaciones`, visible solo en `lg` (antes `md`) para evitar overflow.
  - `Footer.astro`: columna "Explorar" actualizada con las 5 secciones principales + sub-links de obras propias y colaboración con ONGs bajo `/publicaciones`.
- **Build:** ✅ 6 páginas, 0 errores, 2.99s
- **⚠️ Pendiente:** Los 5 links dan 404 hasta completar el Paso 0.2.
  1. Qué es Lenoy → `/que-es-lenoy`
  2. Editorial Lenoy → `/editorial-lenoy`
  3. Publicaciones → `/publicaciones` (renombrar `/catalog`)
  4. Publica con nosotras → `/publica-con-nosotras`
  5. Dónde comprar → `/donde-comprar`
- **Archivos a tocar:** `Navbar.astro`, `Footer.astro`
- **Test manual:** Abrir en móvil y escritorio. Todos los links deben aparecer. El menú hamburguesa debe funcionar.
- **Criterio de éxito:** Los 5 links visibles, sin errores 404 (las páginas estarán vacías pero existirán).

### Paso 0.2 — Crear páginas vacías con estructura base
- **Rama:** `paso-0.2-paginas-base-vacias`
- **Estado:** ✅ Completado (5 mayo 2026)
- **Qué se hizo:**
  - `src/pages/que-es-lenoy.astro`: hero forest-700, secciones quiénes somos / objetivos / trayectoria / equipo (Andrea + Melibea)
  - `src/pages/editorial-lenoy.astro`: hero terracotta-500, secciones línea editorial / misión-visión-valores / prensa
  - `src/pages/publicaciones/index.astro`: movida desde `catalog/index.astro`, SEO actualizado, anclas #obras-propias #colaboracion-ongs #autoras
  - `src/pages/publica-con-nosotras.astro`: hero forest-700, proceso 4 pasos, formulario honeypotat + privacidad, honeypot anti-spam
  - `src/pages/donde-comprar.astro`: hero terracotta-500, grid de libros con botones disabled (pending Stripe), info envío, link a /blog
  - `src/pages/catalog/` eliminado
  - `src/pages/index.astro`: 2 refs `/catalog` → `/publicaciones`
- **Build:** ✅ 10 páginas, 0 errores
- **Todos los textos:** `[PENDIENTE]` — a rellenar por Andrea

---

## FASE 1 — PÁGINAS CORE
> **Objetivo:** Construir el contenido real de cada sección que falta.
> **Por qué:** Son el corazón del negocio. Sin estas páginas, la web no puede lanzarse.

### Paso 1.1 — Ficha individual de libro `/publicaciones/[id].astro`
- **Rama:** `paso-1.1-ficha-libro`
- **Estado:** ✅ Completado (5 mayo 2026)
- **Qué se hizo:**
  - `src/pages/publicaciones/[id].astro`: ruta dinámica con `getStaticPaths()`, genera 5 fichas estáticas
  - Layout 2 columnas (portada sticky izquierda + contenido derecha), responsive (1 col en móvil)
  - Breadcrumb Inicio › Publicaciones › [Título], SEO único por libro (title + description)
  - Precio en terracotta, botón "Comprar" activo si `stripeButtonId` existe, disabled si no
  - Sección "Sobre la autora" cruzada con `authors.ts` por `bookIds`
  - Sección "Proyecto solidario" solo para libros `category: 'colaboracion-ongs'`
  - `BookCard.astro`: portada y título enlazados a la ficha, botón "Comprar" → "Ver ficha"
- **Build:** ✅ 15 páginas, 0 errores

### Paso 1.2 — Formulario de contacto funcional (Netlify Forms)
- **Rama:** `paso-1.2-formulario-netlify`
- **Estado:** ✅ Completado (5 mayo 2026)
- **Qué se hizo:**
  - `publica-con-nosotras.astro`: form migrado de Formspree a Netlify Forms. Atributos `name="propuesta-editorial"`, `data-netlify="true"`, `netlify-honeypot="bot-field"`, `action="/gracias"`. Campo oculto `form-name` requerido por Netlify. Honeypot renombrado a `bot-field` (estándar Netlify).
  - `src/pages/gracias.astro`: página de confirmación post-envío con icono ✓, mensaje amable, botones a `/publicaciones` y `/`
- **Cómo activarlo en producción:** En el panel de Netlify → Forms, aparecerá `propuesta-editorial` automáticamente tras el primer deploy. Configurar el email de notificación en `Settings → Forms → Email notifications`.
- **Build:** ✅ 16 páginas, 0 errores

### Paso 1.3 — Página 404 personalizada
- **Rama:** `paso-1.3-pagina-404`
- **Estado:** ✅ Completado (5 mayo 2026)
- **Qué se hizo:**
  - `src/pages/404.astro`: página de error 404 con diseño Editorial Lenoy. Número 404 decorativo en terracotta-100, icono de libro con fondo forest-100, título serif "Esta página no está en el catálogo", dos CTAs (Ver publicaciones → terracotta, Volver al inicio → borde gris). Fondo con círculos difuminados igual que el hero del home.
- **Build:** ✅ 17 páginas, 0 errores

### ~~Paso 1.4 — Rellenar contenido de páginas base~~
> ⏸️ **BLOQUEADO — Esperando mudanza de Andrea**
> Los textos `[PENDIENTE]` de `/que-es-lenoy`, `/editorial-lenoy`, `/publica-con-nosotras` y `/donde-comprar` los rellenará Andrea una vez esté el CMS instalado (Fase 2). No hay que tocar estas páginas hasta entonces.

### ~~Paso 1.5 — Portadas reales de libros~~
> ⏸️ **BLOQUEADO — Andrea tiene los archivos**
> Las portadas reales irán a `public/images/books/[id].jpg`. Andrea las subirá a través del CMS. Hasta entonces, los placeholders de gradiente son correctos.

---

## FASE 2 — CMS PARA ANDREA Y MELIBEA (la "mudanza")
> **Objetivo:** Que ellas puedan añadir libros, noticias y autoras sin tocar código. Esta es la fase de transición entre "construir la casa" y "vivir en ella".
> **Por qué:** Sin esto, cada novedad del catálogo requiere a Marcos. No es sostenible.
> **Decisión tomada:** Decap CMS (antes Netlify CMS). Gratuito, sin dependencias externas, los cambios son commits en GitHub.
> **Cuándo se activa:** Cuando la estructura técnica esté completa (Fases 1, 3, 4 terminadas). Entonces Andrea y Melibea hacen la mudanza: rellenan textos, suben portadas, configuran precios Stripe.

### Paso 2.1 — Migrar datos a Astro Content Collections
- **Rama:** `paso-2.1-content-collections`
- **Estado:** ✅ Completado (5 mayo 2026)
- **Qué se hizo:**
  - `src/content/config.ts`: schemas Zod para `books` (type:data), `authors` (type:data) y `blog` (type:content)
  - `src/content/books/`: 5 archivos JSON (uno por libro)
  - `src/content/authors/`: 3 archivos JSON (uno por autora)
  - `src/content/blog/`: 3 archivos Markdown (uno por post, frontmatter + cuerpo)
  - `src/data/books.ts`, `src/data/authors.ts`, `src/data/posts.ts`: eliminados
  - 6 páginas actualizadas para usar `getCollection()` de `astro:content`
  - 3 componentes actualizados (interfaces inline en lugar de imports de data files)
  - `sharp` instalado como dependencia (requerida por Astro para el build en este entorno)
- **Build:** ✅ 17 páginas, 0 errores

### Paso 2.2 — Instalar y configurar Decap CMS
- **Rama:** `paso-2.2-decap-cms`
- **Estado:** ✅ Completado (5 mayo 2026)
- **Qué se hizo:**
  - `public/admin/index.html`: panel cargado desde CDN (sin npm). Decap CMS v3 + Netlify Identity widget. `noindex, nofollow` para que Google no lo indexe.
  - `public/admin/config.yml`: 3 colecciones en español. Libros (JSON, 10 campos), Autoras (JSON, 6 campos), Blog (Markdown + body). Media folders por colección.
  - `src/layouts/BaseLayout.astro`: script de redirección post-login (no-op hasta que Netlify Identity esté activo).
- **⚠️ El login NO funciona hasta el Paso 8.1:** Netlify Identity se activa al hacer deploy en Netlify y configurar Git Gateway.
- **Build:** ✅ 17 páginas, 0 errores

### Paso 2.3 — Guía de uso y sesión de onboarding con Andrea y Melibea
- **Rama:** `paso-2.3-guia-cms`
- **Estado:** ✅ Completado (5 mayo 2026)
- **Qué se hizo:**
  - `GUIA-CMS.md`: documento completo sin tecnicismos con instrucciones para añadir libros, editar autoras, escribir posts, subir imágenes y preguntas frecuentes. Tablas con ejemplos para cada campo.
- **⏳ Pendiente (depende del deploy):** Sesión de onboarding en persona con Andrea y Melibea en Madrid (verano 2026). Entonces les enseñamos a entrar y hacen la mudanza de contenido.

---

### ✅ FASE 2 CERRADA — 13 mayo 2026

**Todos los pasos técnicos de Fase 2 completados.** La "casa" está construida y el CMS configurado. La mudanza de contenido queda bloqueada hasta que Andrea valide los datos y el deploy en Netlify esté activo.

**Estado al cierre:**
- Estructura técnica de la web: ✅ completa y funcional (17 páginas, build sin errores)
- CMS Decap instalado: ✅ `/admin/` accesible, config.yml con 3 colecciones
- Guía de uso para Andrea/Melibea: ✅ `GUIA-CMS.md` disponible
- Contenido actual: ⚠️ todo provisional/IA — catálogo, autoras y blog requieren validación de Andrea
- Identidad visual: ⚠️ logo provisional, tipografía pendiente de decisión, portadas ausentes
   - Simulación visual enviada a Andrea: ✅ PDF `Editorial-Lenoy-Simulacion-Web-v2.pdf` (33 páginas, v2 corregida, generado 13 mayo 2026)
- Mensaje de validación para Andrea preparado: ✅ WhatsApp + lista 28 preguntas + brief profesional (en AI CORE)

**Bloqueantes activos hasta mudanza:**
| Bloqueante | Quién lo desbloquea |
|------------|-------------------|
| Logo/símbolo vectorial real | Romualdo Faura (diseñador) vía Andrea |
| Tipografía definitiva (Playfair Display vs Source Serif Pro) | Andrea decide |
| Portadas reales de libros (`public/images/`) | Andrea |
| Catálogo validado (títulos, autoras, ISBNs) | Andrea |
| Textos institucionales (`[PENDIENTE]`) | Andrea via CMS |
| Email definitivo (`lenoyediciones@gmail.com` vs `hola@editoriallenoy.com`) | Andrea |
| Cuenta Stripe | Andrea |
| Dominio real | Andrea |

**Siguiente fase técnica (bloqueada):** No avanzar a Paso 4.1 (SEO/sitemap), deploy ni cambios de contenido hasta recibir respuesta de Andrea. El contenido provisional podría indexarse y aparecer en buscadores antes de estar validado.

---

## FASE 3 — MODERNIDAD Y POLISH VISUAL
> **Objetivo:** Que la web se vea y se sienta como una web de 2026: modo oscuro, animaciones, guiños LGTB+.
> **Por qué aquí y no antes:** Primero el contenido (fases 0-2), luego el polish. Con el CMS activo, Andrea puede ver la web real y dar feedback visual concreto.

### Paso 3.1 — Modo oscuro / claro
- **Rama:** `paso-3.1-modo-oscuro`
- **Estado:** ✅ Completado (5 mayo 2026)
- **Qué se hizo:**
  - `tailwind.config.mjs`: `darkMode: 'class'` activado
  - `BaseLayout.astro`: script inline anti-parpadeo (lee `localStorage` o `prefers-color-scheme` antes de renderizar). Body con `dark:bg-[#1a1510]`
  - `Navbar.astro`: toggle sol/luna en desktop y móvil, `aria-label` dinámico, persiste en `localStorage`
  - `BookCard`, `AuthorCard`, `BlogPostCard`: fondos, textos y bordes con variantes `dark:`
  - `index.astro`, `publicaciones/index.astro`: secciones principales adaptadas
- **Auditoría posterior — archivos corregidos (fix/dark-mode-auditoria):**
  - `publicaciones/[id].astro`: breadcrumb, título, etiquetas, sinopsis, sección autora — todo adaptado
  - `blog/[slug].astro`: header, breadcrumb, titulares, cuerpo del artículo, etiquetas
  - `que-es-lenoy.astro`: headings, párrafos, tarjetas del equipo
  - `editorial-lenoy.astro`: headings, párrafos, cards misión/visión/valores
  - `publica-con-nosotras.astro`: headings, pasos, formulario (inputs y labels con dark bg/border/text)
  - `donde-comprar.astro`: tarjetas de libros, sección envío, sección blog
  - `gracias.astro`: icono, heading, párrafos, botón secundario
  - `404.astro`: heading, párrafos, botón secundario
- **Problema detectado y resuelto:** `classList.toggle('dark', force)` daba comportamiento inconsistente en Astro; cambiado a `classList.add/remove` explícito
- **Bug `blog/[slug].astro`:** Semicolón mal colocado en `{line.slice(3)}` del renderado dinámico — corregido

### Paso 3.2 — Guiños visuales LGTB+ y feministas
- **Rama:** `paso-3.2-identidad-lgtb-feminista`
- **Estado:** ✅ Completado (6 mayo 2026)
- **Qué se hizo:**
  - `BookCard.astro`: banda arcoíris fina en la parte superior de cada tarjeta y badges especiales para géneros `LGTB+` y `Feminismo`, derivados de los datos existentes.
  - `publicaciones/[id].astro`: banda identitaria en la ficha de libro y mismos badges especiales en los géneros, con variantes de modo oscuro.
  - `publicaciones/index.astro`: banda arcoíris sutil en el hero y microcopy inclusivo con "personas lectoras".
  - `que-es-lenoy.astro`: banda en el hero y nueva sección "Compromiso" con símbolo ♀ decorativo y texto `[PENDIENTE]` para Andrea.
  - `publica-con-nosotras.astro`: banda en el hero, símbolo ♀ decorativo en la sección de obras y placeholder ajustado con "personas autoras".
- **Nota de diseño:** Intensidad elegida: sutil. No se añadieron dependencias, no se tocaron schemas/CMS, no se modificaron datos de libros ni rutas.
- **Build:** ✅ 17 páginas, 0 errores

### Paso 3.3 — View Transitions y animaciones de scroll
- **Rama:** `paso-3.3-animaciones`
- **Estado:** ✅ Completado (6 mayo 2026)
- **Qué se hizo:**
  - `BaseLayout.astro`: activado `ClientRouter` de Astro para transiciones suaves entre páginas, sin dependencias externas.
  - `BaseLayout.astro`: estilos globales `data-reveal` con fade + desplazamiento vertical sutil, y fallback seguro para que el contenido quede visible si no hay JavaScript.
  - `BaseLayout.astro`: script con Intersection Observer, reactivado en `astro:page-load` para funcionar también tras navegación cliente y protegido contra listeners duplicados.
  - `BookCard.astro`, `AuthorCard.astro`, `BlogPostCard.astro`: tarjetas marcadas como animables con `revealDelay` opcional para escalonado discreto.
  - Páginas principales e institucionales: bloques de hero, secciones, grids, ficha de libro y blog marcados con `data-reveal`. No se animaron navegación ni columna sticky.
- **Accesibilidad:** Respeta `prefers-reduced-motion`; si el usuario reduce animaciones, no hay fades, desplazamientos ni transiciones.
- **Build:** ✅ 17 páginas, 0 errores, 3.02s

### Paso 3.4 — Favicon completo y PWA básica
- **Rama:** `paso-3.4-favicon-pwa`
- **Estado:** ✅ Completado (6 mayo 2026)
- **Qué se hizo:**
  - `public/favicon.svg`: se reutiliza como fuente visual del icono, coherente con el logo circular terracotta del Navbar/Footer.
  - Generados PNGs de favicon: `public/favicon-16x16.png`, `public/favicon-32x32.png` y `public/apple-touch-icon.png` (180x180).
  - Generados iconos PWA: `public/icons/icon-192x192.png` y `public/icons/icon-512x512.png`.
  - `public/manifest.json`: añadido con nombre, short name, colores, idioma, modo standalone e iconos.
  - `BaseLayout.astro`: añadidos `theme-color`, `apple-mobile-web-app-title`, enlaces a favicon PNG/SVG, Apple touch icon y manifest.
- **Build:** ✅ 17 páginas, 0 errores

---

## FASE 4 — SEO Y PERFORMANCE
> **Objetivo:** Que Google encuentre la web y que cargue rápido. Fundamental para que el nicho cultural la descubra.

### Paso 4.1 — Sitemap XML + robots.txt
- **Rama:** `fix/contenido-ong-seo-basico`
- **Estado:** 🟡 Parcial (1 septiembre 2026)
- **Sitemap:** Instalar `@astrojs/sitemap` (oficial de Astro, gratuito). Genera `/sitemap.xml` automáticamente en cada build con todas las URLs del sitio. Requiere definir el dominio real en `astro.config.mjs`.
- **robots.txt:** ✅ `public/robots.txt` permite el sitio público y excluye `/admin/`.
- **Bloqueo:** el sitemap queda pendiente hasta confirmar el dominio definitivo; no se usará la URL temporal de Netlify como dominio canónico.

### Paso 4.2 — Schema.org JSON-LD en fichas de libros
- **Rama:** `paso-4.2-schema-org`
- **Estado:** ⬜ No iniciado
- **Por qué importa:** Google puede mostrar los libros en resultados enriquecidos (con portada, precio, reseñas). Completamente gratis, solo código.
- **Tipo:** `schema.org/Book` con campos: name, author, isbn, price, currency, description, image.

### Paso 4.3 — Open Graph completo y Twitter Cards
- **Rama:** incluido en `paso-4.2`
- **Estado:** ⬜ No iniciado
- **Qué añade:** Cuando alguien comparte un libro en WhatsApp, Twitter o Instagram, sale la portada del libro con título y precio. Actualmente sale el og:image genérico de la editorial.

### Paso 4.4 — Auditoría Lighthouse y optimización
- **Rama:** `paso-4.4-lighthouse`
- **Estado:** ⬜ No iniciado
- **Objetivo:** Score > 90 en Performance, Accessibility, Best Practices, SEO.
- **Herramientas:** Chrome DevTools → Lighthouse. Gratis, incluido en el navegador.
- **Optimizaciones típicas:** Imágenes WebP con `<Image>` de Astro, eliminar CSS no usado, caché de fuentes.

### Paso 4.5 — Página 404 personalizada
- **Rama:** incluido en `paso-4.4`
- **Estado:** ⬜ No iniciado
- **Por qué:** Actualmente si alguien va a una URL inexistente, ve una página de error genérica del servidor. Una 404 personalizada mantiene el diseño de la web y propone alternativas ("Volver al inicio", "Ver catálogo").
- **Archivo:** `src/pages/404.astro`

---

## FASE 5 — TESTING Y CALIDAD
> **Objetivo:** Asegurar que la web funciona bien en todos los dispositivos y navegadores antes del lanzamiento.
> **Por qué es importante (y lo pasan por alto los junior):** Una web que funciona en Chrome de escritorio puede romperse en Safari de iPhone. Los lectores de Guinea Ecuatorial pueden usar Android con datos limitados — debe funcionar en conexiones lentas.

### Paso 5.1 — Test manual multiplataforma
- **Rama:** No requiere rama (es revisión)
- **Estado:** 🟡 Parcial (1 septiembre 2026)
- **Verificación automatizada:** 18/18 rutas públicas responden HTTP 200; 10 imágenes referenciadas cargan; 21 documentos HTML sin assets locales rotos; las 19 páginas públicas tienen `main`, un único `h1`, título único y metadescripción; todas las imágenes incluyen `alt`.
- **Pendiente:** revisión manual en navegadores y dispositivos reales, navegación por teclado, contraste y conexión lenta.
- **Checklist:**
  - [ ] Chrome (Windows/Mac/Android)
  - [ ] Safari (Mac/iPhone)
  - [ ] Firefox (Windows/Mac)
  - [ ] Samsung Internet (Android — muy usado en África)
  - [ ] Móvil iPhone 12 y Android gama media
  - [ ] Tablet iPad y Android
  - [ ] Pantallas 1280px, 1920px, 2560px (ultrawide)
  - [ ] Con conexión lenta simulada en Chrome DevTools (3G slow)

### Paso 5.2 — Test de accesibilidad completo
- **Rama:** `paso-5.2-accesibilidad`
- **Estado:** ⬜ No iniciado
- **Herramientas gratuitas:**
  - WAVE (browser extension) — detecta errores de accesibilidad visualmente
  - axe DevTools — plugin Chrome, muy potente
  - Lighthouse (ya en paso 4.4) — da puntuación de accesibilidad
- **Checklist WCAG AA:**
  - [ ] Contraste de texto ≥ 4.5:1 en texto normal, ≥ 3:1 en texto grande
  - [ ] Toda la web navegable con solo teclado (Tab, Enter, Esc)
  - [ ] Skip-to-content link visible al tabular desde el inicio
  - [ ] Imágenes con `alt` descriptivo (no vacío, no "imagen")
  - [ ] Formularios con labels asociados correctamente
  - [ ] Focus styles visibles (no eliminados con `outline: none` sin alternativa)
  - [ ] Modales/menús cierran con Escape
  - [ ] Sin contenido que parpadea más de 3 veces/segundo (epilepsia)

### Paso 5.3 — Test de formularios
- **Rama:** No requiere rama
- **Estado:** ⬜ No iniciado (depende de Paso 1.4)
- **Qué testear:**
  - [ ] Enviar formulario vacío → debe mostrar errores de validación
  - [ ] Enviar con email inválido → debe bloquearlo
  - [ ] Enviar correctamente → debe llegar el email a `hola@editoriallenoy.com`
  - [ ] El honeypot funciona (campo oculto que rellenan los bots)

---

## FASE 6 — SEGURIDAD
> **Objetivo:** Proteger la web, los datos de los usuarios y la reputación de la editorial.
> **Por qué (explicado fácil):** Una web sin medidas básicas de seguridad puede ser usada para engañar a los visitantes (phishing), ralentizar el servidor (DoS) o filtrar datos. Aunque esta web es estática y sin base de datos, hay formas de hacerla más segura.

### Paso 6.1 — Cabeceras HTTP de seguridad
- **Rama:** `fix/contenido-ong-seo-basico`
- **Estado:** 🟡 Parcial (1 septiembre 2026)
- **Implementado:** `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` y `X-Frame-Options` en `public/_headers`.
- **Pendiente:** definir CSP cuando estén confirmados el dominio, Stripe y los servicios externos definitivos, para no bloquear el CMS ni futuras compras.
- **Cómo:** Archivo `public/_headers` (específico de Netlify). Define cabeceras que el servidor envía con cada página.
- **Cabeceras a incluir:**
  ```
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://buy.stripe.com; frame-src https://buy.stripe.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  ```
- **Por qué cada una (explicado fácil):**
  - `CSP`: Impide que se cargue código JavaScript de sitios no autorizados (protege contra XSS)
  - `X-Frame-Options`: Impide que la web se muestre dentro de un iframe de otro sitio (protege contra clickjacking)
  - `X-Content-Type-Options`: Impide que el navegador "adivine" el tipo de archivo (protege contra MIME sniffing)
  - `Referrer-Policy`: Controla qué información se envía cuando el usuario hace clic en un link externo

### Paso 6.2 — Protección de formularios contra spam
- **Rama:** incluido en Paso 1.4 y 1.5
- **Estado:** ⬜ No iniciado
- **Técnicas:**
  - **Honeypot field:** Campo de texto oculto con CSS. Los bots lo rellenan, los humanos no. Si viene relleno, se descarta la solicitud.
  - **No usar CAPTCHA:** Perjudica la accesibilidad para personas con discapacidad visual. El honeypot es suficiente para este volumen.
  - Formspree y Netlify Forms incluyen protección anti-spam propia.

### Paso 6.3 — Verificación de seguridad de Stripe
- **Rama:** No aplica (Stripe Payment Links no requieren código adicional de seguridad)
- **Estado:** ⬜ No iniciado
- **Notas:**
  - Los Payment Links de Stripe son URLs externas a `buy.stripe.com`. No hay código de Stripe en la web.
  - La seguridad del pago la gestiona Stripe completamente (PCI DSS compliant).
  - Lo único que hay que hacer: asegurar que la URL del Payment Link en el código es correcta y no es un link de test en producción.
  - Nunca almacenar datos de pago en ningún archivo del repo.

### Paso 6.4 — Cumplimiento legal España (LOPD/GDPR)
- **Rama:** `paso-6.4-legal`
- **Estado:** ⬜ No iniciado
- **Obligatorio por ley española para webs con ventas y formularios:**
  - **Aviso Legal:** Quién es el responsable de la web, datos de la asociación.
  - **Política de Privacidad:** Qué datos se recogen (email del formulario), para qué, cuánto tiempo, con quién se comparten (Stripe, Formspree), derechos del usuario.
  - **Política de Cookies:** Qué cookies se usan. Astro estático con Google Fonts usa cookies de terceros.
  - **Banner de cookies:** Obligatorio por GDPR si hay cookies de terceros. Opción ligera: `cookie-consent` como componente Astro sin dependencias.
  - **Enlace en Footer** a las tres páginas legales.
- **Nota:** Los textos legales deben ser revisados por alguien con conocimiento legal. Hay plantillas gratuitas para asociaciones sin ánimo de lucro españolas.

---

## FASE 7 — ANALYTICS Y MONITORIZACIÓN
> **Objetivo:** Saber cuánta gente visita la web, qué páginas leen y desde qué países. Completamente opcional pero muy útil para la editorial.

### Paso 7.1 — Analytics respetuoso con la privacidad
- **Rama:** `paso-7.1-analytics`
- **Estado:** ⬜ No iniciado
- **Por qué NO Google Analytics:** Requiere banner de cookies, procesa datos en EE.UU., complejo de configurar para cumplir GDPR.
- **Opción recomendada: Plausible Analytics**
  - Pago (~9€/mes) pero con 30 días gratis.
  - Alternativa gratuita: **Umami** (self-hosted en Railway.app o Vercel, gratis).
  - Sin cookies, sin banner de consentimiento, cumple GDPR automáticamente.
  - Panel simple con visitas, páginas más vistas, países, dispositivos.
- **Implementación:** Un solo `<script>` en `BaseLayout.astro`. 5 minutos de trabajo.

### Paso 7.2 — Monitorización de uptime
- **Rama:** No requiere código
- **Estado:** ⬜ No iniciado
- **Herramienta:** UptimeRobot (gratuito, 50 monitores, comprueba cada 5 minutos).
- **Qué hace:** Envía un email a Marcos si la web se cae. Gratis para siempre.
- **Configurar:** Solo requiere crear cuenta en uptimerobot.com y añadir la URL del sitio.

---

## FASE 8 — DEPLOY Y DATOS REALES
> **Objetivo:** Sacar la web al mundo con los datos reales de la editorial.
> **Dependencias externas que bloquean esta fase:** portadas de Andrea, textos reales, cuenta Stripe.

### Paso 8.1 — Deploy en Netlify (staging)
- **Rama:** No requiere rama
- **Estado:** ⬜ No iniciado
- **Qué es staging:** Una URL pública tipo `lenoy-editorial.netlify.app` donde Andrea puede ver la web en vivo para dar feedback, sin que sea el dominio definitivo.
- **Pasos:**
  1. Crear cuenta en netlify.com (gratuita)
  2. Conectar con el repo de GitHub (`MarcosGiannini/lenoy-editorial-web`)
  3. Netlify detecta Astro automáticamente y despliega en cada push a `main`
- **Resultado:** Cada vez que Marcos (o el CMS) haga un commit, la web se actualiza en minutos.

### Paso 8.2 — Datos reales (depende de Andrea)
- **Rama:** `paso-8.2-datos-reales`
- **Estado:** ⬜ Esperando a Andrea
- **Qué necesita Andrea:**
  - [ ] Portadas de libros en alta resolución (formato JPG/PNG, mínimo 600x900px)
  - [ ] Títulos definitivos, sinopsis, ISBNs, precios de cada libro
  - [ ] Fotos de Andrea y Melibea (o confirmar que usamos avatares con inicial)
  - [ ] Textos para "Qué es Lenoy": quiénes somos, objetivos, trayectoria
  - [ ] Textos para "Editorial Lenoy": línea editorial
  - [x] Links reales a RRSS de la asociación: Instagram `https://www.instagram.com/lenoy_ediciones/` · Facebook `https://www.facebook.com/share/1CrZCXCvp4/`
  - [ ] Email real `hola@editoriallenoy.com` funcionando
  - [ ] Estatutos (PDF) si quieren publicarlos

### Paso 8.3 — Cuenta Stripe y Payment Links
- **Rama:** No requiere código nuevo (solo actualizar `books.ts`)
- **Estado:** ⬜ Esperando a Andrea+Melibea
- **Pasos para ellas:**
  1. Crear cuenta en stripe.com/es con el email de la asociación
  2. Completar verificación de identidad (DNI) — obligatorio para recibir pagos
  3. Vincular cuenta bancaria de la asociación
  4. Crear un "Payment Link" por cada libro (desde el panel de Stripe)
  5. Enviar las URLs de Payment Links a Marcos
- **Pasos de Marcos:** Actualizar campo `stripePaymentLink` en cada libro y activar los botones de compra.

### Paso 8.4 — Dominio propio
- **Rama:** No requiere código
- **Estado:** ⬜ Pendiente de decisión
- **Opciones recomendadas:**
  - `editoriallenoy.com` (registrar en Namecheap, ~10€/año)
  - `editoriallenoy.es` (más local, RRSS españolas lo ven bien)
- **Configurar en Netlify:** Panel DNS → apuntar el dominio a Netlify (guía paso a paso disponible).
- **Email corporativo:** Con el dominio, configurar `hola@editoriallenoy.com`. Opció gratuita: Zoho Mail. Opción pagada y más fiable: Google Workspace (6€/mes).
- **HTTPS:** Netlify lo activa automáticamente y gratis con Let's Encrypt.

---

## FASE 9 — POST-LANZAMIENTO
> **Estas tareas son para después de que la web esté en producción con datos reales.**

### Paso 9.1 — Newsletter (Brevo)
- **Estado:** ⬜ No iniciado — post-lanzamiento
- Formulario de suscripción en el footer. Brevo (antes Sendinblue): gratuito hasta 300 emails/día. Sin cookies. Fácil de integrar.

### Paso 9.2 — Sección de prensa
- **Estado:** ⬜ No iniciado — post-lanzamiento
- Logos de El País, ElDiario.es + cita + link al artículo. Genera credibilidad enorme ante públicos nuevos.

### Paso 9.3 — Bilingüe ES / EN
- **Estado:** ⬜ No iniciado — pendiente de confirmar si es requisito real
- **Nota:** Astro tiene i18n integrado pero requiere duplicar todos los textos. Es trabajo de 2-3 sesiones. **Confirmar con Andrea si el público anglófono es prioritario para ellas.** Si no hay presupuesto para esto, no hacerlo.

### Paso 9.4 — Mejoras del blog
- **Estado:** ⬜ No iniciado — post-lanzamiento
- Tiempo de lectura estimado, artículos relacionados, tags navegables.

### Paso 9.4 — Mejoras del blog
- **Estado:** ⬜ No iniciado — post-lanzamiento
- Tiempo de lectura estimado, artículos relacionados, tags navegables.

### Paso 9.5 — Optimización de imágenes con CDN
- **Estado:** ⬜ No iniciado — si las portadas son muchas y pesadas
- Cloudinary o Imgix para transformación automática de imágenes. Gratis hasta cierto volumen.

### Paso 9.6 — Revisión y actualización del README
- **Estado:** ⬜ No iniciado
- **Cuándo:** El README se revisa en dos momentos concretos:
  1. **Antes del primer deploy público** (Fase 8): actualizar badges de estado, añadir la URL real de producción, actualizar capturas de pantalla si las hay.
  2. **Cuando cambie algo estructural**: si cambia el stack, se añade una dependencia importante, o cambia la forma de hacer deploy.
- **Qué revisar:** URL de producción, estado del proyecto (WIP → Live), instrucciones de instalación, créditos, licencia.
- **Nota:** El README está orientado a desarrolladores que quieran contribuir o entender el proyecto. No es para Andrea ni para los lectores de la editorial.

---

## REGLAS DE GIT PARA ESTE PROYECTO

```bash
# Iniciar un paso:
git checkout main
git pull
git checkout -b paso-X.X-descripcion-corta

# Al terminar y funcionar:
git add -A
git commit -m "feat: descripcion de lo que se hizo"
git checkout main
git merge paso-X.X-descripcion-corta
git push
git branch -d paso-X.X-descripcion-corta  # borrar rama local ya fusionada
```

**Convención de commits:**
- `feat:` — nueva funcionalidad
- `fix:` — corrección de un bug
- `style:` — cambio visual sin cambio de lógica
- `content:` — actualización de textos o datos
- `docs:` — actualización de documentación (este archivo, el .md maestro)

---

## CHECKLIST DE BUENAS PRÁCTICAS — REVISAR EN CADA PASO

Antes de hacer merge de cualquier rama a `main`, verificar:

### TypeScript
- [ ] Sin ningún `any` en el código nuevo
- [ ] Todas las funciones tienen tipos de entrada y salida declarados
- [ ] Sin `@ts-ignore` sin comentario explicativo
- [ ] Sin `as TipoX` a menos que se haya verificado el tipo antes

### Seguridad
- [ ] Sin claves de API ni secretos en el código (van en `.env`, nunca en el repo)
- [ ] Todo `target="_blank"` lleva `rel="noopener noreferrer"`
- [ ] `set:html` solo con contenido propio del repo, nunca con input de usuario
- [ ] Formularios con honeypot field y validación HTML5 nativa
- [ ] `.env` está en `.gitignore` y NO aparece en `git diff --staged`

### HTML y accesibilidad
- [ ] Solo un `<h1>` por página
- [ ] Imágenes con `alt` descriptivo (no vacío, no "imagen")
- [ ] HTML semántico correcto (`<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`)
- [ ] Todo el contenido accesible con solo teclado (Tab, Enter, Esc)
- [ ] El viewport no bloquea el zoom del usuario

### Performance
- [ ] Imágenes usando `<Image>` de Astro (no `<img>` nativo)
- [ ] No se ha importado ninguna librería nueva sin justificación escrita
- [ ] Sin JavaScript de cliente innecesario (`client:load` solo si es imprescindible)

### Legal (solo verificar antes del DEPLOY final, no en cada paso)
- [ ] Aviso Legal existe en `/aviso-legal`
- [ ] Política de Privacidad existe en `/privacidad`
- [ ] Política de Cookies y banner funcional
- [ ] Checkbox de consentimiento en formularios (no pre-marcado)

---

---

## DECISIONES TÉCNICAS TOMADAS

| Decisión | Elegida | Descartada | Motivo |
|---|---|---|---|
| Framework | Astro 5 | Next.js, Nuxt | Sitio estático puro, sin servidor, más rápido y barato |
| Estilos | Tailwind CSS | CSS Modules, Styled Components | Velocidad de desarrollo, sin JS en producción |
| CMS | Decap CMS | Sanity.io | Gratuito, sin API externa, cambios como commits en GitHub |
| Pagos | Stripe Payment Links | Stripe Checkout API | Sin backend, más simple, mismo nivel de seguridad |
| Deploy | Netlify | Vercel | Mejor integración con Decap CMS, Netlify Forms incluidos |
| Analytics | Plausible/Umami | Google Analytics | Sin cookies, cumple GDPR, sin banner obligatorio |
| Formularios | Formspree / Netlify Forms | Backend propio | Sin servidor, gratuito, suficiente para el volumen esperado |
| Bilingüe | Pendiente de Andrea | — | No confirmar si es requisito antes de invertir tiempo |

---

## PREGUNTAS ABIERTAS PARA ANDREA

1. ¿El título del tercer libro es definitivamente "Maleidra"? (aparece con "¿?" en el wireframe)
2. ¿Cuántos libros hay en el catálogo real total?
3. ¿Tienen ISBNs los libros?
4. ✅ RRSS activas recibidas de Andrea: Instagram `https://www.instagram.com/lenoy_ediciones/` y Facebook `https://www.facebook.com/share/1CrZCXCvp4/`.
5. ¿Pueden crear una cuenta de GitHub para acceder al CMS?
6. ¿El email `hola@editoriallenoy.com` ya existe o es futuro?
7. ¿Quieren publicar los estatutos de la asociación en la web?
8. ¿El bilingüe ES/EN es un requisito real o un deseo para el futuro?
9. ¿Tienen foto de ellas dos que quieran usar en la web?
10. ¿La Fundación Pedro Zerolo tiene algún texto validado que quieran incluir?
