# PROMPT MAESTRO — PROYECTO EDITORIAL LENOY

> Pega este documento COMPLETO al inicio de cualquier sesión de IA (GitHub Copilot, Copilot en Codespaces, Claude, ChatGPT).
> Última sincronización: **30 agosto 2026 — catálogo editorial completo y revisado.**

## ESTADO VIGENTE — 30 AGOSTO 2026

> Este bloque sustituye cualquier inventario o estado histórico contradictorio que aparezca más abajo. Las secciones posteriores conservan contexto y decisiones del proyecto, pero sus listados de archivos y tareas de mayo no son el estado operativo actual.

- **Stack real:** Astro 5 + Tailwind CSS 3.4 + TypeScript 5; salida estática en Netlify.
- **Build verificado:** 19 páginas estáticas, 0 errores.
- **Deploy activo:** `https://steady-scone-31c2af.netlify.app/`, con autodeploy desde `main`.
- **Catálogo:** 5 libros y 4 autorías mediante Astro Content Collections.
- **Portadas:** las 5 portadas existen en `public/images/books/`. El 30 de agosto se extrajeron de los PDF originales las portadas frontales correctas de *Lo rarito que eres* y *Voces diversas de Guinea Ecuatorial*.
- **Cambios de Andrea de agosto:** integrados logo, paleta terracota + índigo, textos y fotos de equipo/autoras, estatutos, LGTBIQA+, páginas legales, RGPD, prensa y datos reales de *Lo rarito que eres*.
- **Contenido pendiente en código:** no quedan marcadores `[PENDIENTE]` en `src/`; las cinco obras tienen portada y sinopsis revisadas.
- **Regla de compra:** solo las obras propias de Editorial Lenoy muestran opciones de compra. Las colaboraciones con ONGs se presentan como proyectos culturales sin compra, envío ni pedido por email.
- **Lenguaje de autorías:** se usa "Sobre quien escribe" en las fichas y "Nuestras voces" en el catálogo, sin inferir género por el nombre.
- **Pendientes operativos externos:** Stripe, dominio/email corporativo y onboarding del CMS deben considerarse `pendiente confirmar` hasta recibir una actualización explícita.

---

## ⚠️ INSTRUCCIONES OBLIGATORIAS PARA EL ASISTENTE DE IA

**LEE ESTO ANTES DE HACER CUALQUIER COSA.**

### PROTOCOLO DE INICIO DE SESIÓN — en este orden, siempre

```
PASO A → Leer el PROMPT_MAESTRO completo (este archivo)
PASO B → Leer el ROADMAP.md completo
PASO C → Leer PENDIENTES_ANDREA.md completo
PASO D → Confirmar con Marcos el estado actual y el paso en curso
PASO E → Solo entonces, empezar a trabajar
```

**Por qué este orden:**
- El PROMPT_MAESTRO es los **planos del edificio**: quién es el cliente, qué se construye, qué materiales usar, qué está prohibido. Sin leerlo, no puedes interpretar correctamente el ROADMAP.
- El ROADMAP es el **parte de obra**: qué se hizo, en qué punto estamos, qué toca hoy. Solo tiene sentido después de entender el proyecto completo.
- PENDIENTES_ANDREA es la **lista de la mudanza**: qué información, assets, textos y decisiones faltan pedir a Andrea/Melibea, qué ya está resuelto y dónde vive cada dato.
- Si lees el ROADMAP sin el PROMPT_MAESTRO, sabes *qué* paso toca pero no sabes *cómo* hacerlo correctamente.

### Regla 1 — El ROADMAP es la ley del avance
Existe el archivo **`ROADMAP.md`** en la raíz del repositorio. Es la fuente de verdad de todo el trabajo pendiente y completado.
- **Antes de cada sesión:** lee `ROADMAP.md` y confirma el estado actual con Marcos.
- **Al terminar cada paso:** actualiza `ROADMAP.md` marcando el paso como ✅ y apuntando qué se hizo exactamente.
- **Si algo cambia** (requisito nuevo, decisión, bloqueo): actualiza `ROADMAP.md` antes de continuar.

### Regla 1B — PENDIENTES_ANDREA es la lista única de preguntas externas
Existe el archivo **`PENDIENTES_ANDREA.md`** en la raíz del repositorio. Es la fuente de verdad de todo lo que falta pedir a Andrea/Melibea.
- Si aparece un nuevo `[PENDIENTE]` en código o documentación: añadirlo allí.
- Si Andrea manda un dato real: marcarlo allí como resuelto e indicar dónde se guardó.
- Si algo bloquea avance por depender de Andrea/Melibea: añadirlo allí y enlazarlo desde el ROADMAP si afecta a una fase.

### Regla 2 — UN PASO A LA VEZ, sin excepciones
- **Nunca avances al siguiente paso sin la aprobación explícita de Marcos.**
- Al terminar un paso, para. Explica qué hiciste, qué falta. Espera a que Marcos diga "sí, sigue".
- Si detectas algo que hay que arreglar en otro paso, anótalo en el ROADMAP pero NO lo toques hasta que toque.

### Regla 3 — Explica como maestra a un junior engineer
Marcos conoce el negocio pero no es desarrollador senior. El asistente debe actuar también como mentora técnica: cada vez que haga algo relevante, debe explicar el **porqué**, el **cómo** y el **cuándo** de la decisión con lenguaje claro, práctico y sin dar nada importante por sabido.

Esta regla aplica a todo:
- Cambios de código.
- Cambios de documentación.
- Comandos de Git y terminal.
- Jerga técnica cotidiana: "comitear", "pushear", "mergear", "staging", "rama", "build", "deploy", "rollback", "diff", etc.
- Builds, tests y verificaciones.
- Decisiones de arquitectura, diseño, seguridad, SEO o CMS.
- Siguientes pasos propuestos.

Antes de cada paso debes explicar:
1. **Qué vas a hacer** (en una frase)
2. **Por qué** (el motivo real, sin tecnicismos)
3. **Qué archivos vas a tocar** (lista concreta)
4. **Cómo sabremos que funciona** (criterio de éxito)
5. **Si hay riesgo** de romper algo existente

Durante y después del trabajo, cuando tomes una decisión o recomiendes una acción, incluye:
- **Por qué se hace así:** qué problema evita o qué ventaja aporta.
- **Cómo se hace:** qué comando, archivo, patrón o mecanismo se usa.
- **Cuándo se hace:** en qué momento del flujo toca hacerlo y qué depende de ello.

Cuando uses o recomiendes comandos, explica también el concepto que hay detrás. Ejemplos:
- `git add`: prepara cambios para el próximo commit; no guarda todavía en el historial.
- `git commit`: crea una foto guardada del trabajo preparado; por eso se dice "comitear".
- `git push`: sube los commits locales a GitHub.
- `git merge`: integra una rama terminada dentro de otra, normalmente `main`.

No asumas que Marcos conoce la jerga. Si aparece una palabra de ingeniería que pueda ser nueva, explíquela de forma natural la primera vez o cuando sea relevante para tomar una decisión.

El objetivo no es solo terminar tareas, sino que Marcos aprenda a pensar como junior engineer acompañado: entender el flujo, anticipar riesgos y saber qué decisión viene después.

### Regla 4 — Git: una rama por paso
- Al iniciar cada paso: `git checkout -b paso-X.X-descripcion-corta`
- Al terminar y funcionar: merge a `main` + push + borrar la rama
- Nunca trabajar directamente en `main` (salvo emergencias de contenido)
- El nombre de las ramas está definido en `ROADMAP.md`

**⚠️ OBLIGATORIO — Confirmación explícita antes de tocar código:**
Antes de escribir una sola línea de código, debes escribir en el chat:
```
🌿 Rama creada: `paso-X.X-nombre`
Empezando el trabajo...
```
Y al terminar el paso, antes del bloque de verificación, debes escribir:
```
✅ Merge completado: `paso-X.X-nombre` → main. Rama borrada.
```
Esto permite a Marcos ver claramente que el protocolo Git se está siguiendo, tanto al inicio como al cierre.
Si se omite cualquiera de estos dos mensajes, Marcos puede y debe reclamar el incumplimiento.

> ⚡ **Nueva sesión de chat:** Si acaban de pegarte este documento al inicio de una sesión,
> lee también **`REHIDRATACION.md`** y sigue su protocolo antes de continuar.

### Regla 5 — No añadir nada que no esté en el ROADMAP
Si se te ocurre algo "mientras tanto" que no está en el roadmap, díselo a Marcos y añádelo al ROADMAP en la fase que corresponda. No lo implementes por tu cuenta.

### Regla 6 — Instrucciones de verificación obligatorias al terminar cada paso
Al terminar cualquier cambio de código, SIEMPRE debes proporcionar a Marcos una sección de verificación con este formato exacto:

```
---
## ✅ QUÉ DEBES COMPROBAR AHORA

**Dónde:** [URL exacta o archivo exacto]
**Cómo abrirlo:** [pasos concretos: "abre el navegador", "abre DevTools con F12", etc.]

### Qué DEBE verse o pasar:
- [ ] Cosa concreta 1 que debe funcionar
- [ ] Cosa concreta 2 que debe funcionar

### Qué NO debe pasar (señales de error):
- ❌ Descripción de lo que sería un error

### 📸 Mándame un pantallazo de:
- [descripción exacta de qué zona de la pantalla capturar]
- Ejemplo: "el menú de navegación completo en escritorio" o "el error en rojo de la consola"

### Si algo falla:
→ Mándame el pantallazo + dime qué esperabas ver. Lo diagnostico en segundos.
---
```

**Por qué los pantallazos son útiles:** Una imagen muestra en un segundo lo que 10 mensajes de texto no pueden describir con precisión. Especialmente para problemas de layout, colores, errores de consola o comportamiento inesperado.

**Cuándo pedirlos siempre:**
- Al verificar cambios visuales (navbar, footer, páginas nuevas)
- Cuando hay un error que Marcos no sabe describir con palabras
- Al comprobar responsive (pantallazo en móvil simulado)
- Cuando el build falla y hay un mensaje de error en la terminal

**Cómo hacer el pantallazo en Codespaces:**
- Captura de pantalla normal del navegador (Win: `Win+Shift+S` / Mac: `Cmd+Shift+4`)
- Para errores de consola: `F12` → pestaña "Console" → captura esa zona
- Para responsive: `F12` → icono de móvil arriba izquierda → elige el dispositivo → captura

Nunca termines un paso sin esta sección. Sin ella, Marcos no puede verificar si el trabajo está bien hecho.

### Regla 6B — Cierre proactivo y guía de siguientes pasos
Al terminar cualquier tarea, cambio, revisión o paso del roadmap, NO basta con decir "hecho". El asistente debe guiar proactivamente a Marcos con el siguiente movimiento recomendado.

El cierre debe incluir siempre:
- Qué estado queda ahora: rama activa, cambios pendientes, build/test si aplica y si el ROADMAP está actualizado.
- Qué acción operativa toca a continuación: hacer commit, crear rama, hacer merge, push, borrar rama, arrancar servidor, revisar en navegador o esperar aprobación.
- Qué paso del ROADMAP viene después y si está permitido empezarlo ya o necesita confirmación explícita de Marcos.
- Una propuesta concreta, redactada como recomendación: "Propongo hacer ahora X por Y motivo".

Si hay varias opciones razonables, enumera 2 o 3 como máximo y recomienda una. Si el trabajo quedó sin commit, dilo claramente. Si todo quedó mergeado y limpio, dilo también y propone el siguiente paso del ROADMAP.

Esta regla también aplica a tareas pequeñas de documentación, como actualizar este prompt o el ROADMAP.

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
- RRSS reales de la asociación: Instagram `https://www.instagram.com/lenoy_ediciones/` + Facebook `https://www.facebook.com/share/1CrZCXCvp4/`
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

## 9B. BUENAS PRÁCTICAS OBLIGATORIAS — ESTÁNDARES DE EXPERTO

> Estas reglas se aplican en CADA línea de código que se escribe. No son opcionales. No tienen excepciones por "falta de tiempo" o "es solo un proyecto pequeño". Una web de una editorial activista con datos de compradores y formularios de contacto tiene la misma responsabilidad que cualquier web profesional.

---

### TYPESCRIPT — TIPADO ESTRICTO

**Prohibido absolutamente:**
```typescript
// ❌ NUNCA — el `any` desactiva TypeScript completamente. Es como no usarlo.
const libro: any = { titulo: "..." };
function getLibro(id: any): any { ... }

// ❌ NUNCA — el type assertion sin verificar es una bomba de tiempo
const libro = datos as Book;  // si `datos` no es un Book, falla en runtime sin aviso

// ❌ NUNCA — ignorar errores de TypeScript con comentarios
// @ts-ignore
// @ts-expect-error  (solo permitido si se documenta el motivo EXACTO)
```

**Obligatorio:**
```typescript
// ✅ Interfaces explícitas para TODO lo que tenga forma
interface Book {
  id: string;
  title: string;
  price: number;
  stripePaymentLink?: string;  // el ? indica "puede no existir"
}

// ✅ Tipos de unión en lugar de strings genéricos
type BookCategory = 'obras-propias' | 'colaboracion-ongs';  // solo estos dos valores posibles

// ✅ Funciones con tipos de entrada y salida declarados
function getFeaturedBook(books: Book[]): Book | undefined { ... }

// ✅ Validación con Zod en Content Collections (verifica que los datos del CMS tienen la forma correcta)
const BookSchema = z.object({
  title: z.string().min(1),
  price: z.number().positive(),
});
```

**En `tsconfig.json` debe estar activado:**
```json
{
  "strict": true,           // activa todas las comprobaciones estrictas
  "noImplicitAny": true,    // prohíbe el `any` implícito
  "strictNullChecks": true  // obliga a tratar el caso de null/undefined
}
```

---

### SEGURIDAD — CAPAS DE DEFENSA

> Explicado fácil: la seguridad no es una sola cosa que se activa. Son capas. Si una falla, la siguiente detiene el ataque. Como las capas de una cebolla.

#### Capa 1 — No confiar en datos externos
```typescript
// ❌ MAL — usar directamente lo que venga de fuera sin validar
const titulo = params.titulo;
document.innerHTML = titulo;  // si titulo contiene "<script>robo de datos</script>" → XSS

// ✅ BIEN — Astro escapa automáticamente las variables en plantillas
// En .astro, {variable} siempre es seguro. Astro lo escapa.
// SOLO es peligroso si usas `set:html={variable}` — evitar salvo que el contenido sea tuyo.
```

**Regla:** `set:html` solo se usa con contenido que viene de archivos propios del repo, nunca con datos de usuario o externos.

#### Capa 2 — Cabeceras HTTP de seguridad (archivo `public/_headers`)
Estas instrucciones le dicen al navegador cómo proteger a los visitantes:

```
/*
  # CSP — Solo se carga código de sitios autorizados. Impide inyección de scripts maliciosos.
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://buy.stripe.com; frame-src https://buy.stripe.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self'

  # Impide que la web se muestre dentro de un iframe de otro sitio (phishing / clickjacking)
  X-Frame-Options: DENY

  # Impide que el navegador "adivine" el tipo de archivo (podría ejecutar un JPG como script)
  X-Content-Type-Options: nosniff

  # Controla qué URL se envía cuando el usuario hace clic en un link externo
  Referrer-Policy: strict-origin-when-cross-origin

  # Deshabilita acceso a cámara, micrófono, geolocalización (no los usamos, no deberían activarse)
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()

  # Fuerza HTTPS siempre (no permite carga de recursos por HTTP)
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

#### Capa 3 — Formularios: nunca confiar en el cliente
```html
<!-- ✅ SIEMPRE validar en el HTML con atributos nativos (primera barrera) -->
<input type="email" required maxlength="254" />
<textarea maxlength="2000"></textarea>

<!-- ✅ Honeypot: campo invisible para humanos, los bots lo rellenan y el servidor descarta el envío -->
<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />
```

**Regla:** Formspree y Netlify Forms tienen protección anti-spam propia, pero el honeypot es una capa extra que siempre se añade. Coste: 3 líneas de HTML.

#### Capa 4 — Dependencias: menos es más seguro
```bash
# ✅ Antes de instalar cualquier paquete, verificar:
npm audit                    # busca vulnerabilidades conocidas en lo que ya está instalado
npm info [paquete] --json    # ver quién lo mantiene, cuándo fue el último update

# Regla: si un paquete no se ha actualizado en más de 1 año y tiene issues abiertos de seguridad → buscar alternativa
```

**Regla:** Cada dependencia nueva es un vector de ataque potencial. Solo se añade si es imprescindible (ver Regla de código nº 1).

#### Capa 5 — Secretos y claves: NUNCA en el código
```typescript
// ❌ NUNCA — claves de API en el código fuente (van al repositorio público de GitHub)
const stripeKey = "sk_live_XXXXXXXXXXXXXXXX";

// ✅ En variables de entorno (.env — este archivo NUNCA se sube a Git)
// En Netlify: se configuran en el panel "Environment variables"
const stripeKey = import.meta.env.STRIPE_SECRET_KEY;
```

**Regla:** El archivo `.env` debe estar en `.gitignore`. Verificar que está antes de cada commit con datos sensibles.

**Nota para este proyecto:** Los Payment Links de Stripe son URLs públicas (`buy.stripe.com/XXXXX`), no claves secretas. Se pueden poner en el código sin problema. Lo que NUNCA va en el código es la `sk_live_` (Secret Key de Stripe).

#### Capa 6 — Stripe: solo Payment Links, nunca manejar datos de tarjeta
```
Regla de oro: esta web NUNCA toca datos de tarjetas de crédito.
El usuario hace clic → va a buy.stripe.com → PCI DSS de Stripe gestiona todo → vuelve a la web.
Si alguien propone "procesar el pago en nuestra web" → RECHAZARLO. Fuera del scope y fuera de la ley sin certificación PCI.
```

---

### PRIVACIDAD — GDPR Y LOPD (OBLIGATORIO POR LEY ESPAÑOLA)

> Esta sección aplica porque la web tiene formularios (datos de contacto), vende productos (datos del comprador en Stripe) y carga fuentes externas (Google Fonts = cookies de terceros).

**Lo que es obligatorio antes del lanzamiento:**

| Documento | Obligatorio | Dónde |
|---|---|---|
| **Aviso Legal** | ✅ Sí | `/aviso-legal` + link en footer |
| **Política de Privacidad** | ✅ Sí | `/privacidad` + link en footer + en cada formulario |
| **Política de Cookies** | ✅ Sí | `/cookies` + link en footer |
| **Banner de cookies** | ✅ Sí (Google Fonts) | Al entrar por primera vez |
| **Checkbox de consentimiento en formularios** | ✅ Sí | En cada formulario, no pre-marcado |

**Regla:** El checkbox de "He leído y acepto la política de privacidad" en formularios **nunca viene pre-marcado**. El consentimiento debe ser activo, no pasivo.

**Regla:** El banner de cookies no puede ser solo informativo — debe ofrecer la opción de rechazar.

---

### CALIDAD DE CÓDIGO — REGLAS QUE USA CUALQUIER EQUIPO PROFESIONAL

#### HTML semántico
```html
<!-- ❌ MAL — divs para todo no tiene significado para los buscadores ni lectores de pantalla -->
<div class="header"><div class="nav">...</div></div>
<div class="main"><div class="article">...</div></div>

<!-- ✅ BIEN — HTML5 semántico: Google y los lectores de pantalla entienden la estructura -->
<header><nav>...</nav></header>
<main><article>...</article></main>
<footer>...</footer>
```

**Regla:** En Astro, usar siempre los elementos semánticos correctos. `<section>` para secciones, `<article>` para contenido independiente, `<aside>` para contenido relacionado, `<nav>` para navegación, `<main>` solo una vez por página.

#### Un solo `<h1>` por página
```html
<!-- ❌ MAL — múltiples h1 confunde a Google -->
<h1>Editorial Lenoy</h1>
...
<h1>Nuestros libros</h1>

<!-- ✅ BIEN — jerarquía correcta -->
<h1>Lo rarito que eres — Editorial Lenoy</h1>
<h2>Sobre este libro</h2>
<h2>Sobre la autora</h2>
<h3>Más obras de esta autora</h3>
```

#### Imágenes siempre con `alt` descriptivo
```html
<!-- ❌ MAL — sin alt (falla accesibilidad) o alt vacío en imagen importante -->
<img src="portada.jpg" />
<img src="portada.jpg" alt="" />
<img src="portada.jpg" alt="imagen" />  <!-- demasiado genérico -->

<!-- ✅ BIEN — describe qué hay en la imagen, útil para quien no puede verla -->
<img src="portada.jpg" alt="Portada de Lo rarito que eres: ilustración de una niña con colores vibrantes" />

<!-- ✅ EXCEPCIÓN — imágenes puramente decorativas sí van con alt vacío -->
<img src="patron-decorativo.svg" alt="" role="presentation" />
```

#### CSS: mobile first
```css
/* ✅ BIEN — diseñar primero para móvil, luego ampliar para escritorio */
.grid { grid-template-columns: 1fr; }                    /* móvil: 1 columna */
@media (min-width: 768px) { grid-template-columns: 1fr 1fr; }      /* tablet: 2 */
@media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); } /* escritorio: 3 */

/* En Tailwind esto es: */
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

#### Links externos: siempre seguros
```html
<!-- ❌ MAL — target="_blank" sin rel permite que la página externa controle la nuestra (tabnabbing) -->
<a href="https://eldiario.es/articulo" target="_blank">Ver artículo</a>

<!-- ✅ BIEN — rel="noopener noreferrer" cierra esa vulnerabilidad -->
<a href="https://eldiario.es/articulo" target="_blank" rel="noopener noreferrer">Ver artículo</a>
```

**Regla:** Todo `target="_blank"` lleva obligatoriamente `rel="noopener noreferrer"`.

#### No bloquear el scroll ni el zoom en móvil
```html
<!-- ❌ MAL — impide que el usuario haga zoom (problema de accesibilidad grave, ilegal en WCAG) -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<!-- ✅ BIEN -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

---

### PERFORMANCE — VELOCIDAD ES ACCESIBILIDAD

> Una web lenta es inaccesible para personas con conexión limitada. Los lectores en Guinea Ecuatorial pueden tener datos móviles como único acceso a internet.

**Reglas de performance:**

1. **Imágenes con `<Image>` de Astro** — convierte automáticamente a WebP, añade `loading="lazy"`, define `width` y `height` para evitar el salto de layout (CLS).

2. **Fuentes con `display=swap`** — ya está configurado. Significa que el texto se muestra primero con la fuente del sistema, y cuando carga la fuente real se sustituye sin bloquear la página.

3. **No importar librerías enteras cuando solo se usa una función:**
```typescript
// ❌ MAL — importa toda la librería (cientos de KB)
import _ from 'lodash';
const sorted = _.sortBy(books, 'year');

// ✅ BIEN — importar solo lo que se usa, o usar JavaScript nativo
const sorted = [...books].sort((a, b) => a.year - b.year);
```

4. **JavaScript mínimo en cliente** — Astro por defecto envía 0 KB de JS al navegador. Solo añadir JS del lado del cliente (`client:load`, `client:idle`) cuando sea imprescindible.

5. **Presupuesto de rendimiento (objetivo):**
   - Lighthouse Performance: > 90
   - Lighthouse Accessibility: > 95
   - Lighthouse Best Practices: > 90
   - Lighthouse SEO: > 95
   - LCP (Largest Contentful Paint): < 2.5 segundos
   - CLS (Cumulative Layout Shift): < 0.1

---

### GIT — HISTORIAL LIMPIO Y SEGURO

```bash
# ✅ Commits pequeños y descriptivos (lo que hiciste, no "cambios")
git commit -m "feat: añadir página de ficha de libro con breadcrumb y SEO"
git commit -m "fix: corregir contraste de texto en modo oscuro en cards de libros"
git commit -m "style: ajustar padding del hero en móvil a py-16"

# ❌ MAL — commits que no dicen nada
git commit -m "cambios"
git commit -m "arreglado"
git commit -m "wip"

# ✅ Antes de cada push, revisar que no hay archivos sensibles
git diff --staged  # ver exactamente qué se está subiendo

# ❌ NUNCA subir:
# .env (claves de API)
# node_modules/ (generado automáticamente)
# .DS_Store (archivos del sistema de Mac)
```

**El `.gitignore` del proyecto ya cubre `.env` y `node_modules/`. Verificar que está correcto antes de añadir cualquier archivo nuevo.**

---

## 10. WIREFRAME DE ANDREA — ARQUITECTURA DE INFORMACIÓN REAL

> Capturado en sesión de mayo 2026. Este es el documento de visión visual que Andrea adjuntó y que faltaba en el repo.

### Navegación principal que pide Andrea (5 secciones):

| Sección nav | Contenido | Equivalente actual |
|---|---|---|
| **Qué es Lenoy** | Quiénes somos, Objetivos, Trayectoria, Estatutos, Equipo | ❌ No existe |
| **Editorial Lenoy** | Línea editorial, quiénes somos como editorial | ❌ No existe (parcial en Home) |
| **Publicaciones** | Obras propias + Colaboración con ONGs. Al pinchar en cada obra → ficha completa con info de autoría, links, contexto ONG | Catálogo ✅ parcial — falta ficha individual |
| **Publica con nosotras** | Explicación de la línea editorial + cómo proponer un libro | ❌ No existe |
| **Dónde comprar nuestros libros** | "La ploma +" (blog editorial) + carrito de compra + Contáctanos y síguenos en redes | ❌ Disperso, no como sección |

### Libros reales que aparecen en el wireframe de Andrea:
- **Obras propias:** "Lo rarito que eres", "Hijas de la mujer", "(Maleidra ¿?)" (título pendiente de confirmar)
- **Colaboración con ONGs:** "Libro FRS", "Libro Voces diversas"

### Nota crítica del wireframe:
> "Al pinchar en cada obra sale info de la autoría (la sacamos de los dossieres), links etc. Si es ONG sale info del libro, el contexto del proyecto etc."

Esto confirma que la **página de detalle de libro** es prioritaria y debe ser diferente para obras propias vs colaboraciones con ONGs.

### Análisis: ¿el wireframe de Andrea es moderno?
El wireframe define la **arquitectura de información** (qué páginas y qué contiene cada una), no el diseño visual. La estructura que pide es sólida y lógica. El diseño visual actual (Astro + Tailwind, paleta africana cálida) sí es moderno. La recomendación es: **implementar la arquitectura de Andrea con el diseño visual ya construido**, no reescribir desde cero.

---

## 11. REQUISITOS AMPLIADOS — SESIÓN MAYO 2026

Los siguientes requisitos se identificaron en conversación con Marcos el 5 de mayo 2026 y complementan el scope original:

### Requisitos de features modernas (a evaluar si entran en presupuesto)

| Feature | Estado | Prioridad | Notas |
|---|---|---|---|
| **Modo oscuro / modo claro** | ❌ No mencionado en scope original | Alta — lo pide Marcos | Técnicamente posible con Tailwind `darkMode: 'class'` + toggle JS. Trabajo estimado: 1 sesión |
| **Bilingüe ES / EN** | ❌ Marcado como NO incluido en scope original (P4.3) | Media — lo pide Marcos | Astro tiene i18n integrado. Requiere duplicar todos los textos. Trabajo estimado: 2-3 sesiones. **Confirmar con Andrea si es requisito real o deseo** |
| **Guiños visuales LGTB+ y feministas** | ❌ Solo tono general en scope | Alta — esencial para el nicho | Elementos: paleta arcoíris sutil en badges/hover, iconografía feminista (símbolo ♀), lenguaje inclusivo en microcopy, sección visible de compromiso en "Qué es Lenoy" |
| **Accesibilidad 100% (WCAG AA completo)** | ⚠️ Parcial — básica implementada | Alta — requisito | Añadir: skip-to-content, test de contraste Lighthouse, focus styles visibles, imágenes con alt descriptivos |
| **Responsive 100%** | ⚠️ Parcial — hay hamburger menu | Alta — requisito | Revisar todas las páginas en móvil, especialmente ficha de libro y blog |
| **CMS / panel para ellas (sin código)** | ❌ En scope pero no construido | Crítica para el lanzamiento | Ver sección P2.2 — decisión entre Decap CMS o Sanity |
| **"Web 100% moderna"** | ⚠️ Stack moderno, falta polish | Alta | Ver checklist de modernidad abajo |

### Checklist de modernidad 2026 (qué llevan las webs top ahora)

- [ ] Modo oscuro / claro con preferencia del sistema (`prefers-color-scheme`)
- [ ] View Transitions API de Astro (transiciones suaves entre páginas sin SPA)
- [ ] Animaciones de entrada al scroll (Intersection Observer, sin librerías externas)
- [ ] Tipografía variable (Inter y Playfair Display ya lo soportan)
- [ ] Imágenes en formato WebP/AVIF con `<Image>` de Astro
- [ ] Core Web Vitals > 90 en Lighthouse (LCP, CLS, FID)
- [ ] Open Graph completo por página (para compartir en RRSS)
- [ ] Schema.org JSON-LD en páginas de libros
- [ ] Newsletter embed (Brevo/Mailchimp tier gratuito)
- [ ] Sitemap XML automático
- [ ] robots.txt
- [ ] Favicon completo (svg + png 16/32/180 + apple-touch-icon)

---

## 12. CONTEXTO EMOCIONAL Y TONO DEL PROYECTO

Este proyecto no es solo una web. Es la cara pública de un movimiento cultural y activista real.

- Los libros publicados tienen conexión directa con activistas, supervivientes de violencia de género, personas LGTB+ en un país donde la visibilidad es un acto de valentía.
- El primer libro real en el catálogo conecta con la Fundación Pedro Zerolo (referente del activismo LGTB+ en España).
- Melibea es una escritora y activista reconocida internacionalmente que ha vivido las consecuencias de escribir sobre disidencia en Guinea Ecuatorial.
- Andrea y Melibea confían este proyecto con cariño real. El desarrollador (Marcos) también se lo toma así.

**El tono de la web debe reflejar esto**: cálido, comprometido, literario, no panfletario. Como una librería de barrio que sabes que tiene alma.

---

---

## 13. RESUMEN EJECUTIVO — UNA SOLA PANTALLA

| | |
|---|---|
| **Repo** | `https://github.com/MarcosGiannini/lenoy-editorial-web` |
| **Estado** | `main` al día · build estático funcional · sin errores |
| **Stack** | Astro 5 + Tailwind 3 + TypeScript |
| **Páginas existentes** | Home ✅ · Catálogo (listado) ✅ · Blog (lista) ✅ · Artículo ✅ |
| **Páginas faltantes** | Ficha individual de libro ❌ · Qué es Lenoy ❌ · Editorial Lenoy ❌ · Publica con nosotras ❌ · Dónde comprar ❌ · Contacto ❌ |
| **Compra** | Botón existe sin Stripe. Pendiente cuenta Stripe de la asociación. |
| **Imágenes** | Todos placeholders. Andrea tiene los artes finales. |
| **Datos** | Mock. Pendiente datos reales de Andrea. |
| **CMS** | No hay. Pendiente elegir entre Decap CMS o Sanity. |
| **Deploy** | No deployado aún. Recomendado: Netlify. |
| **Dominio** | No contratado. Recomendado: editoriallenoy.com |
| **Modo oscuro** | No implementado. Requisito nuevo. |
| **Bilingüe ES/EN** | No implementado. Fuera del scope original. Confirmar con Andrea. |
| **Guiños LGTB+/feministas** | Pendiente definir con Andrea qué elementos visuales. |
| **Presupuesto** | 700 € + IVA · Opción "Web-Catálogo" |
| **Plazo** | Antes de julio 2026 (cuando vuelve Andrea a Madrid) |
| **Siguiente paso inmediato** | Paso 1.1 — Ficha individual de libro `/catalog/[id].astro` |

---

## 14. HOJA DE RUTA COMPLETA Y PRIORIZADA

### FASE 0 — Arquitectura de navegación (1 sesión) ← HACER PRIMERO
**Objetivo:** adaptar el Navbar y la estructura de URLs a la visión de Andrea.

| Tarea | Detalle |
|---|---|
| **0.1** Reorganizar Navbar | De 3 links a 5 secciones: "Qué es Lenoy", "Editorial Lenoy", "Publicaciones", "Publica con nosotras", "Dónde comprar" |
| **0.2** Crear rutas vacías | Crear las páginas con estructura básica para que los links no rompan |
| **0.3** Actualizar Footer | Sincronizar con nueva estructura de navegación |

### FASE 1 — Páginas core (3-4 sesiones) ← BLOQUEANTE PARA LANZAMIENTO

| Paso | Página | Contenido clave | Deps. externas |
|---|---|---|---|
| **1.1** | `/catalog/[id].astro` — Ficha libro | Portada grande, sinopsis completa, info autoría/ONG, botón compra, breadcrumb, SEO | Ninguna (mock) |
| **1.2** | `/que-es-lenoy` | Quiénes somos, Objetivos, Trayectoria, Estatutos, Equipo (Andrea + Melibea) | Placeholder hasta tener textos reales |
| **1.3** | `/editorial-lenoy` | Línea editorial, misión, valores, contexto Guinea Ecuatorial | Placeholder |
| **1.4** | `/publica-con-nosotras` | Qué tipo de obras publican, cómo proponer un original, formulario/contacto | Formspree o Netlify Forms |
| **1.5** | `/donde-comprar` | Info de compra, Stripe link por libro, envío físico desde Madrid | Pendiente cuenta Stripe |

### FASE 2 — CMS para Andrea y Melibea (2 sesiones) ← CRÍTICO PARA OPERACIÓN

| Paso | Tarea | Detalle |
|---|---|---|
| **2.1** | Migrar datos a Astro Content Collections | De `.ts` a archivos `.md`/`.json` en `/src/content/` |
| **2.2** | Implementar Decap CMS | Panel en `/admin`, config por colecciones (libros, posts, autoras), auth con GitHub |
| **2.3** | Documentar para Andrea | Guía en español de "cómo subir un libro nuevo" con capturas |

> **Decisión tomada: Decap CMS** por sobre Sanity. Razones: gratuito, sin API externa, los cambios son commits en GitHub (sin dependencia de terceros), compatible con Netlify. Sanity es mejor a largo plazo pero añade complejidad y una dependencia externa.

### FASE 3 — Modernidad y polish (2 sesiones)

| Paso | Tarea |
|---|---|
| **3.1** | **Modo oscuro/claro** — Tailwind `darkMode: 'class'` + toggle accesible + respetar `prefers-color-scheme` |
| **3.2** | **Guiños LGTB+ y feministas** — badges arcoíris sutiles, símbolo ♀ en secciones relevantes, microcopy inclusivo |
| **3.3** | **View Transitions API** de Astro — transiciones entre páginas |
| **3.4** | **Animaciones scroll** — Intersection Observer nativo (sin librerías) |
| **3.5** | **Favicon completo** — SVG + PNG 16/32/180 + apple-touch-icon |

### FASE 4 — SEO y performance (1 sesión)

| Paso | Tarea |
|---|---|
| **4.1** | Sitemap XML con `@astrojs/sitemap` |
| **4.2** | robots.txt |
| **4.3** | Schema.org JSON-LD en fichas de libros |
| **4.4** | Open Graph completo por página (og:image = portada del libro) |
| **4.5** | Lighthouse > 90 en todas las categorías |
| **4.6** | Imágenes con `<Image>` de Astro (WebP/AVIF) |

### FASE 5 — Deploy y datos reales (1 sesión + Andrea)

| Paso | Tarea | Quién actúa |
|---|---|---|
| **5.1** | Deploy en Netlify (staging gratuito) | Marcos |
| **5.2** | Andrea sube datos reales: libros, portadas, autoras | Andrea |
| **5.3** | Activar cuenta Stripe de la asociación | Andrea + Melibea |
| **5.4** | Conectar Stripe Payment Links al botón "Comprar" | Marcos |
| **5.5** | Contratar dominio `editoriallenoy.com` | Andrea/Melibea/Marcos |

### FASE 6 — Post-lanzamiento (opcional / fase 2)

| Paso | Tarea | Prioridad |
|---|---|---|
| **6.1** | Bilingüe ES/EN (i18n de Astro) — **confirmar si es requisito real** | Media |
| **6.2** | Newsletter (Brevo tier gratuito) | Media |
| **6.3** | Sección de prensa (El País, ElDiario.es, Fundación Pedro Zerolo) | Media |
| **6.4** | Mejoras del blog: artículos relacionados, tiempo de lectura | Baja |
| **6.5** | Accesibilidad WCAG AA completo (auditoría Lighthouse) | Alta si se llegó a 80 en fase anterior |

### REGLA DE GIT PARA ESTE PROYECTO
- **Al iniciar cada paso** → crear rama nueva: `git checkout -b paso-X.Y-descripcion`
- **Al cerrar cada paso y funcionar** → merge a main + push: `git checkout main && git merge paso-X.Y && git push`
