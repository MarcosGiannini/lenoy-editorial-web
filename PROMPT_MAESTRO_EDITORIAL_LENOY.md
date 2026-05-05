# PROMPT MAESTRO — PROYECTO EDITORIAL LENOY
> Pega este documento COMPLETO al inicio de cualquier sesión de IA (GitHub Copilot, Copilot en Codespaces, Claude, ChatGPT).
> Última sincronización: **5 mayo 2026 — `main` en GitHub está al día con todos los cambios locales.**

---

## 0. PUNTO DE PARTIDA: CÓMO TRABAJAR HOY

El repositorio está completamente subido y actualizado en GitHub:

**Repo:** `https://github.com/MarcosGiannini/lenoy-editorial-web`
**Rama activa:** `main`
**Estado:** limpio, sin cambios pendientes, sin conflictos.

### Si estás en GitHub Codespaces (PC de empresa, sin admin)
1. Ve a `https://github.com/MarcosGiannini/lenoy-editorial-web`
2. Haz clic en el botón verde **"Code"** → pestaña **"Codespaces"** → **"Create codespace on main"**
3. Se abrirá VS Code en el navegador con el proyecto ya clonado.
4. En la terminal del Codespace ejecuta:
   ```bash
   npm install
   npm run dev
   ```
5. Codespaces mostrará un mensaje de "Puerto 4321 disponible" — haz clic en "Abrir en navegador" para ver la web en vivo.
6. Guarda cambios con `Ctrl+S`, haz commit desde el panel de Source Control o con:
   ```bash
   git add -A
   git commit -m "descripción del cambio"
   git push
   ```

### Si estás en local (PC propio con admin)
```bash
git clone https://github.com/MarcosGiannini/lenoy-editorial-web.git
cd lenoy-editorial-web
npm install
npm run dev   # → http://localhost:4321
```

---

## 1. IDENTIDAD DEL PROYECTO

### ¿Qué es Editorial Lenoy?
Una editorial independiente española con sede espiritual en Guinea Ecuatorial y sede física en Madrid. Su misión es la **edición, difusión y preservación de literatura feminista y LGTB del único país hispanohablante de África: Guinea Ecuatorial.**

No es una editorial comercial masiva. Es un proyecto cultural, político y de amor. Cada libro que publican es un acto de resistencia frente al olvido. El nicho es pequeño pero consistente y con conexiones al activismo LGTB español de primer nivel (Fundación Pedro Zerolo, medios como El País, ElDiario).

**El nombre "Lenoy"** es el nombre artístico/editorial que han elegido Andrea y Melibea para su asociación.

### Las dos personas detrás del proyecto

#### Andrea Ramos (co-fundadora, interlocutora principal del proyecto web)
- Profesora de español. Vivió en Guinea Ecuatorial.
- Se ocupa de: correcciones, maquetaciones, decisiones de impresión y acabados, artes finales. Tiene TODAS las portadas en alta calidad lista para usar.
- Actualmente en **Tashkent, Uzbekistán** (UTC+5, diferencia de +4h con España en verano) trabajando un semestre en la universidad.
- Vuelve a España en julio 2026 (antes si la operan de una pierna — se sabrá en los próximos días).
- Maneja WhatsApp activamente. Responde por mensajes. Da feedback visual rápido y claro.
- **No es técnica** pero entiende diseño. Tiene sus propias ideas visuales para la web (adjuntó un documento con su visión).
- Tono: cálida, directa, entusiasta, con sentido del humor ("somos un mojoncillo necesario").

#### Trifonia Melibea Obono (co-fundadora, escritora y activista)
- Escritora ecuatoguineana reconocida a nivel nacional e internacional.
- Activista del movimiento negritud y disidencia en Guinea Ecuatorial.
- Referencia: https://www.eldiario.es/euskadi/trifonia-melibea-obono-activista-escritora-movimiento-negritud-no-autorizada-disidencia_128_12289483.html
- Actualmente con una beca posdoctoral en Alemania. Viene a España en verano 2026 para conferencias.
- Menos involucrada en el día a día de la web, pero co-propietaria y voz principal de la editorial.

#### El desarrollador (Marcos Giannini)
- Desarrollador web independiente. Está construyendo esta web como proyecto paralelo.
- Contexto personal relevante: acaba de cambiar de trabajo (empresa nueva, multinacional, más carga), en medio de obra en casa nueva en Hortaleza (Madrid). Tiene mujer e hija. Tiempo limitado pero muy eficiente, especialmente con IA.
- Sus abuelos emigraron de Italia a África (Angola y Etiopía): el proyecto le conecta emocionalmente.
- Planea quedar en persona con Andrea y Melibea en Madrid en verano 2026 para enseñarles la web.

### Logística de ventas (importante para el desarrollo)
- Los libros son **físicos**. Los envían ellas mismas desde **casa de la madre de Andrea en Madrid**.
- No hay almacén, ni sistema de stock automatizado, ni envío externalizado.
- Los pagos irán a la cuenta bancaria de la asociación (aún por configurar en Stripe).
- Las portadas existen en alta resolución (artes finales de imprenta) — Andrea las entregará cuando puedan verse.

---

## 2. CONTRATO Y ALCANCE

### Opción elegida: "Web-Catálogo" — 700 € + IVA

Esta es la única opción contratada. No hay presupuesto para más. El alcance exacto es:

| Incluido ✅ | No incluido ❌ |
|---|---|
| Web completa y profesional | Carrito multi-producto (eso es Opción 2, 1.100€) |
| Catálogo de libros con compra individual por Stripe | Stock automático / gestión de envíos |
| Blog editorial | Aplicación móvil |
| Página "Nosotras" / Equipo | Backend propio / base de datos |
| Panel de gestión sencillo para que ellas actualicen sin código | Multi-idioma (a futuro) |
| 0 € mensuales si no hay ventas | |
| SEO básico + metadatos Open Graph | |
| Diseño responsive (móvil + escritorio) | |
| Accessibilidad (WCAG AA básico) | |

**Modelo de cobro por ventas:** Stripe cobra ~1,4% + 0,25 € por transacción. Sin cuota mensual fija. Ideal para volúmenes pequeños.

---

## 3. STACK TECNOLÓGICO — DETALLE COMPLETO

### Framework y librerías
```
Astro 5.0          → Framework principal (output: 'static', sin SSR)
@astrojs/tailwind  → Integración oficial de Tailwind
Tailwind CSS 3.4   → Estilos utilitarios
TypeScript 5.x     → Tipado estático en datos y componentes
```

**Dependencias actuales en package.json:**
```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/tailwind": "^5.1.4",
    "tailwindcss": "^3.4.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

**Nota importante:** el proyecto es intencionalmente ligero. No hay React, Vue, ni ningún framework JS innecesario. Las "Astro Islands" (componentes con hidratación) solo se añadirán si la funcionalidad lo exige (p.ej. un modal de compra).

### Configuración de Astro (`astro.config.mjs`)
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',  // sitio estático puro, sin servidor
});
```

### Sistema de diseño — Paleta de color completa (`tailwind.config.mjs`)

La paleta es la identidad visual del proyecto. No cambiarla sin consultar a Andrea.

```
terracotta  → Color principal. Terroso, marrón-anaranjado cálido africano.
             50: #fdf5f2  100: #fbe8e0  200: #f6cfc0  300: #eeae97
             400: #e4826a  500: #c4603a (PRINCIPAL)  600: #b04e2c
             700: #943f25  800: #7b3523  900: #682f22

forest      → Verde oscuro profundo. Naturaleza, Guinea Ecuatorial.
             50: #f2f7ec  100: #e0ecd3  200: #c4daab  300: #9ec27a
             400: #7aa852  500: #5d8c38  600: #47702b
             700: #2d5016 (MUY USADO — fondo de footer y sección misión)
             800: #264418  900: #213a17

sunset      → Naranja cálido. Acento secundario, badges, destacados.
             400: #fb923c  500: #e8863a (badge "Destacado del mes")
             600: #c86d22

cream       → Fondo general de la web. Blanco roto cálido.
             100: #faf8f3 (FONDO PRINCIPAL)
             200: #f5f0e8  300: #ede5d5  400: #ddd0b8  500: #c8b898
```

### Tipografía (Google Fonts, cargadas en BaseLayout.astro)
- **Playfair Display** — Serif elegante para títulos, nombres de libros, secciones destacadas. Pesos: 400, 600, 700, italic.
- **Inter** — Sans-serif limpia para cuerpo de texto, UI, precios, metadatos. Pesos: 300, 400, 500, 600.

---

## 4. ESTRUCTURA COMPLETA DEL PROYECTO

```
lenoy-editorial-web/
│
├── astro.config.mjs          # Config Astro: estático + tailwind
├── tailwind.config.mjs       # Paleta completa + tipografía
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencias (muy ligero)
│
├── public/
│   ├── favicon.svg           # Favicon (actualmente placeholder)
│   └── images/               # ← VACÍO, pendiente de imágenes reales
│       ├── books/            # Portadas de libros (Andrea las tiene)
│       ├── authors/          # Fotos de autoras
│       └── blog/             # Imágenes de artículos del blog
│
└── src/
    ├── env.d.ts
    │
    ├── layouts/
    │   └── BaseLayout.astro  # Layout global: head + SEO + fuentes + nav + footer
    │
    ├── components/
    │   ├── Navbar.astro      # Cabecera sticky: logo + links + CTA + menú móvil
    │   ├── Footer.astro      # Pie: logo + links + contacto + RRSS (Instagram, Twitter)
    │   ├── BookCard.astro    # Tarjeta de libro: portada/placeholder + precio + botón comprar
    │   ├── AuthorCard.astro  # Tarjeta de autora: foto/inicial + bio + RRSS
    │   └── BlogPostCard.astro# Tarjeta de artículo: imagen + fecha + título + excerpt + tags
    │
    ├── data/                 # ← DATOS MOCK (pendiente de reemplazar con datos reales)
    │   ├── books.ts          # 5 libros de ejemplo con interfaz Book tipada
    │   ├── authors.ts        # 3 autoras de ejemplo con interfaz Author tipada
    │   └── posts.ts          # 3 artículos de ejemplo con interfaz BlogPost tipada
    │
    └── pages/
        ├── index.astro           # HOME
        ├── catalog/
        │   └── index.astro       # CATÁLOGO (listado de libros + autoras)
        └── blog/
            ├── index.astro       # BLOG (listado de artículos)
            └── [slug].astro      # ARTÍCULO INDIVIDUAL (rutas estáticas desde posts.ts)
```

---

## 5. CÓDIGO EXISTENTE — INVENTARIO DETALLADO

### BaseLayout.astro
- Carga fuentes Google (Playfair Display + Inter)
- Metadatos SEO: `<meta description>`, Open Graph (`og:title`, `og:description`, `og:image`, `og:type`), Twitter Card
- `<body class="bg-cream-100 text-gray-900 font-sans antialiased">` — fondo crema base
- Incluye `<Navbar />` y `<Footer />` automáticamente en todas las páginas

### Navbar.astro
- Sticky top, `bg-cream-100/95 backdrop-blur-sm`, borde inferior en cream-300
- Logo: círculo terracotta-500 con "L" blanca serif + texto "Editorial Lenoy"
- Links: Inicio / Catálogo / Blog (activo con borde inferior terracotta)
- CTA: botón "Ver catálogo" en terracotta redondeado (hidden en móvil)
- Menú hamburguesa en móvil con aria correctas
- `aria-current="page"` dinámico según `Astro.url.pathname`

### Footer.astro
- Fondo `bg-forest-700`, texto cream
- 3 columnas: Logo + tagline | Links internos | Contacto + RRSS
- Email de contacto: `hola@editoriallenoy.com` (placeholder)
- Ubicación: "Malabo, Guinea Ecuatorial" (placeholder — sede real: Madrid)
- RRSS: Instagram + Twitter (URLs placeholder)
- Copyright dinámico con año actual

### pages/index.astro (HOME)
**Sección 1 — Hero** (`bg-cream-100`, min-h-90vh)
- Decoración: círculos difuminados en terracotta, forest y sunset (posicionados absolutamente)
- Badge: "Guinea Ecuatorial · Literatura que transforma" (fondo terracotta-100, texto terracotta-600)
- Heading principal: "Literatura que / **libera** (terracotta) y / **transforma** (forest)"
- Subtítulo de la misión de la editorial
- Dos CTAs: "Descubrir el catálogo →" (botón terracotta relleno) + "Leer el blog" (botón forest outline)
- Columna derecha: libro destacado con `getFeaturedBook()` — portada simulada rotada 2°, hover a 0°, badge "Destacado del mes" (sunset)

**Sección 2 — Misión** (`bg-forest-700`, py-20)
- 3 pilares en grid: Edición (terracotta) / Difusión (sunset) / Preservación (forest-400)
- Cada pilar: icono SVG + título serif cream + descripción cream-300

**Pendiente en home:** sección de últimas publicaciones / novedades, sección de "quiénes somos" breve, posible sección de prensa/apariciones mediáticas.

### pages/catalog/index.astro (CATÁLOGO)
- Hero: `bg-forest-700` con título "Catálogo editorial" + descripción
- Sección "Obras propias": grid 3 columnas de `<BookCard>`, filtrado por `category: 'obras-propias'`
- Sección "Colaboración con ONGs": grid 3 columnas, filtrado por `category: 'colaboracion-ongs'`
- Sección "Nuestras autoras": grid de `<AuthorCard>` con las autoras del archivo `authors.ts`
- Anclas de navegación: `#obras-propias`, `#colaboracion-ongs`, `#autoras`

### pages/blog/index.astro (BLOG)
- Hero: `bg-terracotta-500`, título "Blog"
- Grid 3 columnas de `<BlogPostCard>`, ordenados por fecha descendente

### pages/blog/[slug].astro (ARTÍCULO INDIVIDUAL)
- `getStaticPaths()` genera rutas estáticas desde `blogPosts`
- Header con breadcrumb (Inicio > Blog > Título), categoría, fecha, autor
- Renderizado de markdown casero: parsea `#` y `##` → `<h2>/<h3>`, resto → `<p>`. Funcional pero mejorable.
- Sección de tags al final
- **Pendiente:** botón "Volver al blog", artículos relacionados

### BookCard.astro
- Portada: gradiente `from-terracotta-100 to-sunset-100` con título y autor centrado (placeholder hasta tener imágenes reales)
- Badge de categoría: "Obra propia" / "Colaboración ONG" (forest-700/80)
- Body: título (serif, hover terracotta), autor + año, chips de géneros, sinopsis (3 líneas clamp)
- Footer de la card: precio en terracotta (ej. "18,99 €") + botón "Comprar" (terracotta, icono carrito)
- **El botón "Comprar" está sin conectar a Stripe. Es un `<button type="button">` sin acción.**

### AuthorCard.astro
- Avatar: círculo con gradiente forest con inicial del nombre (placeholder)
- Header: nombre (serif) + ciudad de origen con icono pin terracotta
- Bio completa con línea clamp
- Links a RRSS si existen (Twitter, Instagram, web personal) — iconos pequeños

### BlogPostCard.astro
- Imagen: gradiente forest con categoría y título superpuestos (placeholder)
- Metadata: fecha localizada en es-ES + autor
- Título (serif, hover terracotta, link a `/blog/[slug]`)
- Excerpt 2 líneas clamp
- Tags como chips
- CTA "Leer más →" con animación de flecha

---

## 6. DATOS MOCK ACTUALES

> ⚠️ TODOS ESTOS DATOS SON INVENTADOS. Hay que reemplazarlos con los datos reales de Editorial Lenoy que proporcione Andrea.

### Interfaz `Book` (`src/data/books.ts`)
```typescript
interface Book {
  id: string;               // slug para URL
  title: string;
  author: string;
  synopsis: string;
  cover: string;            // ruta en /public/images/books/
  year: number;
  category: 'obras-propias' | 'colaboracion-ongs';
  genre: string[];          // tags como ['Ficción', 'LGTB+', 'Novela contemporánea']
  price: number;            // en euros, ej. 18.99
  stripeButtonId?: string;  // ID del Payment Link de Stripe (pendiente)
  featured?: boolean;       // si true, aparece en el hero del home
}
```

**Libros mock actuales (5 en total):**
| Título | Autor | Categoría | Precio | Featured |
|---|---|---|---|---|
| Lo rarito que eres | Amina Nse Obiang | obras-propias | 18,99€ | ✅ |
| Hijas de la mujer | Beatriz Ela Nguema | obras-propias | 15,99€ | — |
| Voces del mango | Celestina Abeso Mba | obras-propias | 12,99€ | — |
| El silencio roto | Diversas autoras | colaboracion-ongs | 14,99€ | — |
| Amor sin fronteras | Colectivo Arcoíris GE | colaboracion-ongs | 13,99€ | — |

### Interfaz `Author` (`src/data/authors.ts`)
```typescript
interface Author {
  id: string;
  name: string;
  bio: string;
  photo: string;            // ruta en /public/images/authors/
  origin: string;           // ciudad, país
  bookIds: string[];        // relación con libros por id
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    web?: string;
  };
}
```

**Autoras mock actuales (3):** Amina Nse Obiang, Beatriz Ela Nguema, Celestina Abeso Mba.

### Interfaz `BlogPost` (`src/data/posts.ts`)
```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;          // markdown en string plano
  date: string;             // ISO format 'YYYY-MM-DD'
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
}
```

**Posts mock actuales (3):**
1. "El auge de la literatura LGTB+ en Guinea Ecuatorial"
2. "Feminismo africano: perspectivas desde Guinea Ecuatorial"
3. "Presentación: Lo rarito que eres de Amina Nse Obiang"

---

## 7. BACKLOG PRIORIZADO — QUÉ FALTA HACER

### PRIORIDAD 1 — Bloqueantes para el lanzamiento

#### P1.1 — Imágenes reales de portadas
- Andrea tiene los artes finales en alta calidad.
- Hay que crear la carpeta `/public/images/books/` y `/public/images/authors/`.
- Nomeclatura esperada: `lo-rarito-que-eres.jpg`, `amina-nse-obiang.jpg`, etc.
- En `BookCard.astro`: reemplazar el gradiente placeholder por `<img src={book.cover} alt={book.title} />` con aspect-ratio `2/3` y `object-cover`.
- En `AuthorCard.astro`: reemplazar el círculo con inicial por `<img src={author.photo} alt={author.name} class="rounded-full" />`.
- Hay que decidir si hacer lazy loading (`loading="lazy"`) e incluir `width` y `height` para evitar CLS.

#### P1.2 — Datos reales de libros y autoras
- Confirmar con Andrea: ¿cuántos libros tiene el catálogo real? ¿Cuáles son las categorías exactas? ¿Cuáles tienen ISBNs?
- El primer libro real mencionado es de Gonzalo Abaha (ref: https://elpais.com/planeta-futuro/2025-03-20/gonzalo-abaha-escritor-ecuatoguineano...)
- Sustituir todo el contenido de `books.ts` y `authors.ts` con datos reales.
- Considerar migrar de archivos `.ts` a **Astro Content Collections** con markdown/MDX si se va a usar CMS.

#### P1.3 — Integración de Stripe (compra por libro)
- Modelo recomendado: **Stripe Payment Links** (sin backend, sin servidor).
  - Crear un Payment Link por libro en el dashboard de Stripe.
  - Cada link tiene una URL tipo `https://buy.stripe.com/XXXX`.
  - En `BookCard.astro`: el botón "Comprar" se convierte en `<a href={book.stripePaymentLink} target="_blank">`.
  - En `books.ts`: añadir campo `stripePaymentLink: string` a la interfaz `Book`.
- **Prerequisito:** Andrea y Melibea deben crear cuenta en Stripe (https://stripe.com/es) y vincular cuenta bancaria de la asociación.
- No se puede activar hasta que ellas tengan la cuenta Stripe configurada.
- No implementar servidor de Stripe (webhooks, checkout API) — fuera del presupuesto y scope.

#### P1.4 — Página individual de libro (`/catalog/[id].astro`)
- Actualmente no existe. El botón "Comprar" en BookCard no tiene enlace a página de detalle.
- Crear `src/pages/catalog/[id].astro` con `getStaticPaths()` desde `books.ts`.
- Contenido de la página de detalle:
  - Portada a tamaño grande (columna izquierda)
  - Título, autor, año, géneros, precio, sinopsis COMPLETA (no truncada)
  - Botón de compra Stripe (grande y prominente)
  - Info de envío (física, desde Madrid, indicar plazo estimado)
  - Sección "Sobre la autora" enlazando con `AuthorCard` correspondiente
  - Breadcrumb: Inicio > Catálogo > [Título del libro]
  - Meta SEO específica del libro (title, description, og:image con la portada)

### PRIORIDAD 2 — Importantes para la experiencia

#### P2.1 — Página "Nosotras" (`/nosotras` o `/sobre-nosotras`)
- La página más importante para generar confianza en el nicho cultural activista.
- Contenido:
  - Historia de la asociación: cuándo se fundó, por qué, qué las mueve
  - Sección de Andrea Ramos: foto, bio, rol en la editorial
  - Sección de Melibea Obono: foto, bio, rol, links a su trabajo (eldiario.es, etc.)
  - Misión, visión, valores (ya existen en el home, ampliar)
  - Posible sección de "Por qué Guinea Ecuatorial" (contexto cultural para lectores que no conozcan)
- Añadir enlace a esta página en Navbar y Footer.

#### P2.2 — CMS para gestión de contenido (sin código)
- Andrea y Melibea necesitan poder actualizar libros y posts sin tocar código.
- **Opción recomendada para este presupuesto: Decap CMS (antes Netlify CMS)**
  - Gratuito. Open source. Interfaz web en `/admin`.
  - Se configura con un `config.yml` que define los campos de cada colección.
  - Los cambios se guardan como archivos en el repo de GitHub (commits automáticos).
  - Requiere autenticación con GitHub — ellas necesitan cuenta de GitHub o se configura Netlify Identity.
  - Hay que migrar los datos de `.ts` a **Astro Content Collections** con archivos `.md` o `.json`.
- **Alternativa: Sanity.io**
  - Plan gratuito generoso (sin límite de proyectos, 10GB de assets).
  - Interfaz de edición mucho más pulida ("Studio").
  - Requiere una integración con la API de Sanity en Astro (fetch en tiempo de build).
  - Más potente a largo plazo, más complejo de configurar inicialmente.

#### P2.3 — Formulario de contacto
- Para pedidos especiales, consultas de prensa, colaboraciones con ONGs.
- Email de destino: `hola@editoriallenoy.com` (cuando sea real).
- **Opción sin backend: Netlify Forms**
  - Si el deploy es en Netlify (recomendado), basta con añadir `netlify` como atributo del form.
  - Reciben los envíos por email automáticamente. Gratuito hasta 100 envíos/mes.
- **Alternativa: Formspree** — igual de simple, 50 envíos/mes gratis, sin necesidad de Netlify.
- Página de destino: `/contacto` o modal en la página "Nosotras".

#### P2.4 — Favicon real
- Actualmente usa el favicon default de Astro.
- Crear un favicon SVG con el círculo terracotta-500 y la "L" blanca (ya existe el logo en el Navbar).
- También generar versiones PNG (16x16, 32x32, 180x180 para Apple touch icon).
- Añadir en `BaseLayout.astro`: `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`

### PRIORIDAD 3 — Mejoras de calidad y SEO

#### P3.1 — SEO avanzado
- **Sitemap XML:** Astro tiene integración oficial `@astrojs/sitemap`. Añadir a `astro.config.mjs` con el `site` real (dominio).
- **Schema.org para libros:** Añadir JSON-LD en las páginas de libros con tipo `Book`:
  ```json
  { "@type": "Book", "name": "...", "author": {...}, "isbn": "...", "price": "..." }
  ```
- **Metadatos por página:** Cada libro debe tener su propia og:image (la portada), title y description únicos.
- **robots.txt:** Crear `/public/robots.txt` básico.

#### P3.2 — Mejoras del blog
- Markdown real: actualmente el contenido de los posts está en strings con markdown manual. Migrar a archivos `.md` en `/src/content/blog/` con Astro Content Collections.
- **Lectura estimada** del artículo (calcular palabras / 200 palabras por minuto).
- Artículos relacionados al final de cada post (misma categoría o tags).
- Botón "Volver al blog" al final del artículo (actualmente falta).
- Imágenes de portada de artículo reales.

#### P3.3 — Mejoras del Home
- **Sección de novedades/últimas publicaciones:** grid con los 3 libros más recientes (filtrado por año).
- **Sección de prensa/apariciones mediáticas:** logos de El País, ElDiario.es con links a los artículos reales de Gonzalo Abaha y Melibea.
- **CTA newsletter:** captura de email con Mailchimp o Brevo (tier gratuito). Importante para el nicho cultural — los lectores quieren ser avisados de novedades.
- Animaciones suaves de entrada al scroll (Intersection Observer API nativo — sin librerías).

#### P3.4 — Accesibilidad
- Ya está implementada en gran parte (aria-labels, roles, `aria-current`, navegación por teclado).
- Pendiente: verificar ratios de contraste con herramienta Lighthouse.
- Añadir `skip to content` link al principio del Navbar.
- Asegurar que las imágenes de portada tengan `alt` descriptivos (no vacíos).

#### P3.5 — Performance
- Optimización de imágenes: usar `<Image>` de Astro en lugar de `<img>` nativo para lazy loading y formatos modernos (WebP, AVIF).
- Asegurar que las fuentes de Google Fonts tengan `display=swap` (ya está).
- Score de Lighthouse > 90 en todas las categorías (objetivo de calidad).

### PRIORIDAD 4 — Post-lanzamiento

#### P4.1 — Newsletter
- Mailchimp o Brevo (ambos con tier gratuito generoso).
- Formulario de suscripción embebido en el footer o como sección dedicada.

#### P4.2 — Sección de prensa
- Recopilar todas las apariciones mediáticas de Melibea y Gonzalo Abaha.
- Logos de medios + cita destacada + link al artículo.
- Genera confianza para lectores nuevos y para instituciones culturales.

#### P4.3 — Multi-idioma
- La literatura de Guinea Ecuatorial tiene audiencia en francés e inglés.
- Astro tiene soporte de i18n integrado.
- A futuro: inglés como segundo idioma básico.

#### P4.4 — Página de libro individual para ONGs
- Las colaboraciones con ONGs podrían tener información extendida sobre la organización colaboradora.
- Link a la web de la ONG, misión, contexto del proyecto.

---

## 8. DEPLOY Y DOMINIO

### Plataforma de deploy recomendada: Netlify
- Gratuita para sitios estáticos con tráfico moderado.
- CI/CD automático: cada push a `main` despliega automáticamente.
- Formularios de contacto integrados (Netlify Forms).
- Compatibilidad perfecta con Decap CMS.
- CDN global incluido → carga rápida para usuarios en España y Guinea Ecuatorial.
- URL de staging gratuita (ej. `lenoy-editorial.netlify.app`) antes de tener dominio propio.

**Alternativa: Vercel** — igual de buena para sitios Astro estáticos. Menos integrado con Decap CMS.

### Dominio
- Aún no contratado. Opciones recomendadas por precio y marca:
  - `editoriallenoy.com` — internacional, preferido
  - `editoriallenoy.es` — español, más local
- Registradores recomendados: Namecheap (~10€/año), Dondominio (español).
- El footer ya usa `hola@editoriallenoy.com` — necesitarán email corporativo con ese dominio (Google Workspace 6€/mes, o Zoho Mail gratuito).

---

## 9. REGLAS PARA EL ASISTENTE DE IA

Cuando trabajas en este proyecto, sigue estas reglas obligatoriamente:

### Reglas de código
1. **No añadas dependencias sin justificación clara y escrita.** El proyecto debe mantenerse ligero.
2. **No uses React, Vue ni Svelte** a menos que la funcionalidad sea imposible sin ellos. Astro solo.
3. **No cambies la paleta de colores** sin una razón de accesibilidad o contraste. Es la identidad de la marca.
4. **No reescribas componentes que ya funcionan.** Extiéndelos.
5. **No uses SSR** (`output: 'server'`). Todo debe funcionar como sitio estático.
6. **Rutas estáticas siempre** con `getStaticPaths()` cuando corresponda.
7. **TypeScript estricto** en los archivos de datos (interfaces, tipos).
8. **Accesibilidad no es opcional**: mantén `aria-*`, `role`, y navegación por teclado en todo lo que toques.
9. **Imágenes con `<Image>` de Astro** (no `<img>` nativo) cuando uses imágenes reales.
10. **No generes URLs de assets** que no existan en `/public/` — el build fallaría.

### Reglas de diseño
1. **Tipografía**: Playfair Display para títulos y nombres de libros. Inter para todo lo demás.
2. **Fondo base**: siempre `bg-cream-100` (`#faf8f3`). Nada de blancos puros.
3. **Botones primarios**: `bg-terracotta-500 text-white rounded-full hover:bg-terracotta-600`.
4. **Botones secundarios**: `border-2 border-forest-700 text-forest-700 rounded-full hover:bg-forest-50`.
5. **Secciones oscuras**: `bg-forest-700` con texto `text-cream-100`.
6. **El tono visual es cálido, literario, cultural africano** — no tecnológico, no frío, no minimalista blanco.
7. Antes de cambios visuales importantes en layout o secciones nuevas → consultar a Andrea con un boceto.

### Reglas de contenido
1. **No inventes datos de libros, autoras ni posts** — si no tienes el dato real, usa placeholder claro como `[PENDIENTE: título del libro]`.
2. **El nombre de la editorial es "Editorial Lenoy"**, siempre con mayúscula inicial.
3. **Guinea Ecuatorial**, no "Guinea" a secas.
4. **LGTB+** con el signo `+`. No "LGBT" sin plus.
5. **Los textos deben ser en español de España** (vosotros, apellidos, euros).

---

## 10. CONTEXTO EMOCIONAL Y TONO DEL PROYECTO

Este proyecto no es solo una web. Es la cara pública de un movimiento cultural y activista real.

- Los libros publicados tienen conexión directa con activistas, supervivientes de violencia de género, personas LGTB+ en un país donde la visibilidad es un acto de valentía.
- El primer libro real en el catálogo conecta con la Fundación Pedro Zerolo (referente del activismo LGTB+ en España).
- Melibea es una escritora y activista reconocida internacionalmente que ha vivido las consecuencias de escribir sobre disidencia en Guinea Ecuatorial.
- Andrea y Melibea confían este proyecto con cariño real. El desarrollador (Marcos) también se lo toma así.

**El tono de la web debe reflejar esto**: cálido, comprometido, literario, no panfletario. Como una librería de barrio que sabes que tiene alma.

---

## 11. RESUMEN EJECUTIVO — UNA SOLA PANTALLA

| | |
|---|---|
| **Repo** | `https://github.com/MarcosGiannini/lenoy-editorial-web` |
| **Estado** | `main` al día · build estático funcional · sin errores |
| **Stack** | Astro 5 + Tailwind 3 + TypeScript |
| **Páginas** | Home ✅ · Catálogo ✅ · Blog (lista) ✅ · Artículo ✅ · Libro detalle ❌ · Nosotras ❌ · Contacto ❌ |
| **Compra** | Botón Comprar existe pero sin Stripe. Pendiente cuenta Stripe de la asociación. |
| **Imágenes** | Todos placeholders. Andrea tiene los artes finales. |
| **Datos** | Mock. Pendiente datos reales de Andrea. |
| **CMS** | No hay. Pendiente elegir entre Decap CMS o Sanity. |
| **Deploy** | No deployado aún. Recomendado: Netlify. |
| **Dominio** | No contratado. Recomendado: editoriallenoy.com |
| **Presupuesto** | 700 € + IVA · Opción "Web-Catálogo" |
| **Plazo** | Informal: antes de verano 2026 (julio, cuando vuelve Andrea a Madrid) |
| **Siguiente paso** | Recibir portadas reales de Andrea + datos reales de libros + activar cuenta Stripe |
