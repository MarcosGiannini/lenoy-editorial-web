# ROADMAP — EDITORIAL LENOY WEB
> Este archivo es la fuente de verdad del avance del proyecto.
> **El asistente de IA DEBE leer este archivo DESPUÉS de leer el PROMPT_MAESTRO y ANTES de tocar cualquier código.**
> Última actualización: **5 mayo 2026 — Sesión #2. Roadmap inicial creado. Protocolo de sesión definido.**

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

3. Confirmar con Marcos
   → "He leído ambos documentos. El estado actual es [X]. El siguiente paso es [Y]. ¿Confirmas que empezamos?"

4. Solo entonces, actuar.
```

**Analogía para entenderlo:** Un arquitecto que llega a la obra cada mañana primero lee los planos del edificio (PROMPT_MAESTRO: qué se construye, materiales, normas), y luego lee el parte de obra de ayer (ROADMAP: qué se hizo, qué toca hoy). Nunca al revés.

---

## CÓMO USAR ESTE ARCHIVO

- Antes de tocar código: leer el estado actual y confirmar qué paso toca.
- Al iniciar un paso: crear una rama git con el nombre indicado en cada paso.
- Al terminar un paso y funcionar: hacer merge a `main`, push, y marcar como ✅ aquí.
- Si algo cambia (requisito nuevo, decisión, bloqueo): actualizar este archivo ANTES de continuar.
- **Nunca se avanza al siguiente paso sin que Marcos lo apruebe explícitamente.**

---

## ESTADO ACTUAL DEL PROYECTO

| Categoría | Estado |
|---|---|
| **Rama activa** | `main` |
| **Build** | ✅ Funciona, sitio estático, sin errores |
| **Paso en curso** | Ninguno — pendiente de aprobación de Marcos |
| **Último paso completado** | **0.1** — Navbar reorganizado a 5 secciones (5 mayo 2026) |
| **Siguiente paso** | **0.2** — Crear páginas vacías con estructura base |
| **Bloqueantes externos** | Portadas reales (Andrea) · Cuenta Stripe (Andrea+Melibea) · Dominio (pendiente) |

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
- **Estado:** ⬜ No iniciado
- **Qué hace:** Crea cada página nueva con hero básico y placeholder de contenido, para que los links del navbar no rompan.
  - `src/pages/que-es-lenoy.astro`
  - `src/pages/editorial-lenoy.astro`
  - `src/pages/publicaciones/index.astro` (mover/renombrar catalog)
  - `src/pages/publica-con-nosotras.astro`
  - `src/pages/donde-comprar.astro`
- **Archivos a tocar:** Nuevas páginas + posiblemente `catalog/index.astro` → `publicaciones/index.astro`
- **Test manual:** Hacer clic en cada link del Navbar. Debe cargar sin errores.

---

## FASE 1 — PÁGINAS CORE
> **Objetivo:** Construir el contenido real de cada sección que falta.
> **Por qué:** Son el corazón del negocio. Sin estas páginas, la web no puede lanzarse.

### Paso 1.1 — Ficha individual de libro `/publicaciones/[id].astro`
- **Rama:** `paso-1.1-ficha-libro`
- **Estado:** ⬜ No iniciado
- **Por qué es crítico:** Actualmente no existe. Al pulsar "Comprar" o el título de un libro, no pasa nada. Es el paso más importante del flujo de venta.
- **Contenido de la página:**
  - Breadcrumb: Inicio > Publicaciones > [Título]
  - Portada a tamaño grande (columna izquierda, ratio 2:3)
  - Título (Playfair Display, grande), autor/a, año, géneros como chips
  - Sinopsis COMPLETA (sin truncar)
  - Precio prominente en terracotta
  - Botón "Comprar esta obra" (grande, terracotta, preparado para Stripe aunque aún sin link)
  - Bloque informativo: "Envío físico desde Madrid · Plazo estimado 3-5 días hábiles"
  - Sección "Sobre la autora" con `AuthorCard` correspondiente
  - Si es colaboración ONG: sección especial con contexto del proyecto
  - Meta SEO único por libro (title, description, og:image)
- **Archivos nuevos:** `src/pages/publicaciones/[id].astro`
- **Archivos a tocar:** `BookCard.astro` (añadir link a la ficha)
- **Test manual:** Entrar a cada ficha de libro. Verificar en móvil. Verificar que el SEO del `<head>` cambia por libro.
- **Criterio de éxito:** Las 5 fichas de libros mock cargan sin error, son responsivas y tienen contenido diferente cada una.

### Paso 1.2 — Página "Qué es Lenoy" (`/que-es-lenoy`)
- **Rama:** `paso-1.2-que-es-lenoy`
- **Estado:** ⬜ No iniciado
- **Contenido:**
  - Hero con título y subtítulo de la asociación
  - Sección "Quiénes somos": historia de la asociación, cuándo se fundó, por qué
  - Sección "Objetivos": lista clara de objetivos de la editorial
  - Sección "Trayectoria": timeline de hitos (placeholder hasta que Andrea dé datos)
  - Sección "Estatutos": enlace a PDF de estatutos (pendiente de Andrea) o placeholder
  - Sección "Equipo": Andrea Ramos + Trifonia Melibea Obono con foto, rol, bio corta
  - Sección "Por qué Guinea Ecuatorial": contexto cultural para lectores nuevos
- **Notas:** Todos los textos serán placeholder hasta que Andrea los facilite. Usar texto marcado: `[PENDIENTE: texto de Andrea]`
- **Test manual:** Responsive, todos los links a perfiles externos abren en pestaña nueva (`target="_blank" rel="noopener"`).

### Paso 1.3 — Página "Editorial Lenoy" (`/editorial-lenoy`)
- **Rama:** `paso-1.3-editorial-lenoy`
- **Estado:** ⬜ No iniciado
- **Contenido:**
  - Línea editorial: qué tipo de obras publican y por qué
  - Misión, Visión, Valores (ampliar lo que ya hay en el Home)
  - Sección de apariciones en prensa (El País, ElDiario.es — links reales a artículos de Gonzalo Abaha y Melibea)
  - Sección de colaboraciones y alianzas (Fundación Pedro Zerolo, ONGs)
- **Notas:** Esta página refuerza la credibilidad con instituciones culturales y medios.

### Paso 1.4 — Página "Publica con nosotras" (`/publica-con-nosotras`)
- **Rama:** `paso-1.4-publica-con-nosotras`
- **Estado:** ⬜ No iniciado
- **Contenido:**
  - Explicación de la línea editorial y qué tipo de obras encajan
  - Proceso de propuesta (pasos numerados)
  - Lo que ofrecen (edición, maquetación, distribución, presencia en feria)
  - Formulario de contacto para enviar propuesta (campo: nombre, email, título del proyecto, sinopsis breve, extracto)
  - Nota sobre plazos de respuesta
- **Formulario:** Usar Formspree (gratuito, 50 envíos/mes, sin backend) o Netlify Forms si se deploya en Netlify.
- **Seguridad del formulario:** Añadir honeypot field (campo oculto) para prevenir spam de bots.

### Paso 1.5 — Página "Dónde comprar" (`/donde-comprar`)
- **Rama:** `paso-1.5-donde-comprar`
- **Estado:** ⬜ No iniciado
- **Contenido:**
  - Listado completo de libros disponibles con precio y botón de compra individual (Payment Link de Stripe)
  - Sección "La ploma" — blog editorial (enlace destacado al blog)
  - Info de envío: físico desde Madrid, tarifas aproximadas, plazos
  - Sección de contacto para pedidos especiales o institucionales
  - RRSS: Instagram, Twitter (cuando existan las URLs reales)
- **Nota Stripe:** El botón de compra estará preparado en el HTML pero desactivado visualmente hasta que existan los Payment Links reales.

---

## FASE 2 — CMS PARA ANDREA Y MELIBEA
> **Objetivo:** Que ellas puedan añadir libros, noticias y autoras sin tocar código.
> **Por qué:** Sin esto, cada novedad del catálogo requiere a Marcos. No es sostenible.
> **Decisión tomada:** Decap CMS (antes Netlify CMS). Gratuito, sin dependencias externas, los cambios son commits en GitHub.

### Paso 2.1 — Migrar datos a Astro Content Collections
- **Rama:** `paso-2.1-content-collections`
- **Estado:** ⬜ No iniciado
- **Por qué primero:** Decap CMS trabaja con archivos `.md`/`.json`, no con archivos `.ts`. Hay que migrar la forma en que se almacenan los datos antes de instalar el CMS.
- **Qué cambia:**
  - `src/data/books.ts` → `src/content/books/[id].json` (uno por libro)
  - `src/data/authors.ts` → `src/content/authors/[id].json` (uno por autora)
  - `src/data/posts.ts` → `src/content/blog/[slug].md` (uno por post)
  - Definir schemas con Zod en `src/content/config.ts`
- **Qué NO cambia:** El diseño visual, las páginas, los componentes. Solo cambia dónde viven los datos.
- **Test:** El build debe pasar sin errores. Todas las páginas deben mostrar el mismo contenido que antes.

### Paso 2.2 — Instalar y configurar Decap CMS
- **Rama:** `paso-2.2-decap-cms`
- **Estado:** ⬜ No iniciado
- **Qué instala:**
  - `public/admin/index.html` — panel de administración accesible en `/admin`
  - `public/admin/config.yml` — define los formularios para libros, autoras, posts
  - Autenticación: GitHub OAuth (ellas se loguean con la cuenta de GitHub del proyecto)
- **Campos del formulario de libro:** título, autora, sinopsis, año, categoría, géneros, precio, stripe link, portada (upload), destacado sí/no
- **Test:** Entrar a `/admin`, logarse, editar un libro, verificar que se genera un commit en GitHub.

### Paso 2.3 — Guía de uso para Andrea y Melibea
- **Rama:** incluido en `paso-2.2`
- **Estado:** ⬜ No iniciado
- **Qué es:** Un documento `GUIA-CMS.md` en el repo (o una sección dentro de la web en `/admin/ayuda`) con capturas de pantalla y pasos numerados: "Cómo añadir un libro nuevo", "Cómo publicar una noticia", "Cómo subir una foto de autora".
- **Formato:** Sencillo, sin términos técnicos. Para alguien que nunca ha usado un CMS.

---

## FASE 3 — MODERNIDAD Y POLISH VISUAL
> **Objetivo:** Que la web se vea y se sienta como una web de 2026: modo oscuro, animaciones, guiños LGTB+.
> **Por qué aquí y no antes:** Primero el contenido (fases 0-2), luego el polish. Con el CMS activo, Andrea puede ver la web real y dar feedback visual concreto.

### Paso 3.1 — Modo oscuro / claro
- **Rama:** `paso-3.1-modo-oscuro`
- **Estado:** ⬜ No iniciado
- **Cómo funciona en Tailwind:** Se activa `darkMode: 'class'` en `tailwind.config.mjs`. Se añade la clase `dark` al `<html>` cuando el usuario elige oscuro.
- **Lo que incluye:**
  - Toggle accesible (botón con icono sol/luna) en el Navbar
  - Respeta la preferencia del sistema operativo (`prefers-color-scheme: dark`) por defecto
  - Guarda la preferencia en `localStorage` para que se recuerde entre visitas
  - Paleta oscura: fondo `#1a1510` (marrón muy oscuro, no negro puro), textos cream, acentos terracotta y forest se mantienen
- **Accesibilidad:** El toggle debe tener `aria-label` descriptivo ("Activar modo oscuro" / "Activar modo claro").

### Paso 3.2 — Guiños visuales LGTB+ y feministas
- **Rama:** `paso-3.2-identidad-lgtb-feminista`
- **Estado:** ⬜ No iniciado
- **Qué incluye (sutil, no panfletario):**
  - Banda de colores arcoíris muy fina (2-3px) como separador en secciones clave
  - Badge "LGTB+" y "Feminismo" en colores propios para los géneros de los libros
  - Símbolo ♀ integrado en títulos de secciones relevantes (Publica con nosotras, etc.)
  - Microcopy inclusivo: "lectoras y lectores" o neutro "personas lectoras"
  - Sección visible en "Qué es Lenoy" que explica el compromiso explícito
- **Nota de diseño:** Estos elementos deben reforzar la identidad sin distraer. Andrea tiene la última palabra sobre lo que entra.

### Paso 3.3 — View Transitions y animaciones de scroll
- **Rama:** `paso-3.3-animaciones`
- **Estado:** ⬜ No iniciado
- **View Transitions:** API nativa de Astro. Un solo `<ViewTransitions />` en BaseLayout da transiciones suaves entre páginas sin recargar. Sin librerías externas.
- **Animaciones de scroll:** Intersection Observer API nativo (el navegador lo incluye). Las tarjetas de libros, autoras y secciones entran con un fade+desplazamiento al hacer scroll. Sin instalar nada.
- **Importante:** Respetar `prefers-reduced-motion` — si el usuario tiene configurado "reducir animaciones" en su sistema, no se muestran.

### Paso 3.4 — Favicon completo y PWA básica
- **Rama:** `paso-3.4-favicon-pwa`
- **Estado:** ⬜ No iniciado
- **Favicon:** SVG con el círculo terracotta y "L" blanca (código del Navbar, adaptado). PNG 16x16, 32x32, 180x180.
- **PWA básica:** `public/manifest.json` con nombre, colores, iconos. Permite que Chrome proponga "Instalar app" en móvil. Gratis, sin backend, solo un archivo JSON.

---

## FASE 4 — SEO Y PERFORMANCE
> **Objetivo:** Que Google encuentre la web y que cargue rápido. Fundamental para que el nicho cultural la descubra.

### Paso 4.1 — Sitemap XML + robots.txt
- **Rama:** `paso-4.1-seo-basico`
- **Estado:** ⬜ No iniciado
- **Sitemap:** Instalar `@astrojs/sitemap` (oficial de Astro, gratuito). Genera `/sitemap.xml` automáticamente en cada build con todas las URLs del sitio. Requiere definir el dominio real en `astro.config.mjs`.
- **robots.txt:** Archivo en `/public/robots.txt` con reglas básicas: permitir todo a buscadores, disallow `/admin/`.

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
- **Estado:** ⬜ No iniciado
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
- **Rama:** `paso-6.1-security-headers`
- **Estado:** ⬜ No iniciado
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
  - [ ] Links reales a RRSS de la asociación
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

### Paso 9.5 — Optimización de imágenes con CDN
- **Estado:** ⬜ No iniciado — si las portadas son muchas y pesadas
- Cloudinary o Imgix para transformación automática de imágenes. Gratis hasta cierto volumen.

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
4. ¿Tienen RRSS activas (Instagram, Twitter) con URLs ya definidas?
5. ¿Pueden crear una cuenta de GitHub para acceder al CMS?
6. ¿El email `hola@editoriallenoy.com` ya existe o es futuro?
7. ¿Quieren publicar los estatutos de la asociación en la web?
8. ¿El bilingüe ES/EN es un requisito real o un deseo para el futuro?
9. ¿Tienen foto de ellas dos que quieran usar en la web?
10. ¿La Fundación Pedro Zerolo tiene algún texto validado que quieran incluir?
