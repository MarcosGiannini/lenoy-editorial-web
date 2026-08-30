# Pendientes para Andrea — Editorial Lenoy
> Fuente única de verdad de la información que falta pedir a Andrea/Melibea.
> Última actualización: **30 agosto 2026 — revisión del código y de las cubiertas originales.**

## Estado vigente — 30 agosto 2026

El contenido recibido durante agosto ya está integrado. **No quedan marcadores `[PENDIENTE]` en `src/`.** Las portadas y sinopsis de los cinco libros y las fotos de las cuatro autorías ya existen en el repositorio.

Las sinopsis de *Voces diversas de Guinea Ecuatorial*, *Maleidra y el anillo mágico* y *Primer Certamen Literario Escolar 25N FRS-UE* se han adaptado a versiones web breves y fieles a sus contraportadas.

### Resuelto en agosto de 2026

- ✅ Portadas correctas de los 5 libros.
- ✅ Datos, ISBN y citas de prensa de *Lo rarito que eres*.
- ✅ Fotos y bios disponibles de Andrea, Melibea, Gonzalo y Juliana.
- ✅ Textos institucionales, estatutos, logo y paleta actualizada.
- ✅ LGTBIQA+ unificado en el sitio.
- ✅ Aviso legal, condiciones de envío y consentimiento RGPD del formulario.
- ✅ Enlaces de prensa con presentación visual y URLs revisadas.
- ✅ Sinopsis web de *Voces diversas de Guinea Ecuatorial*, adaptada fielmente de su contraportada.
- ✅ Sinopsis web de *Maleidra y el anillo mágico*, adaptada fielmente de su contraportada.
- ✅ Sinopsis web de *Primer Certamen Literario Escolar 25N FRS-UE*, adaptada fielmente de los objetivos de su contraportada.
- ✅ Regla de compra confirmada por Marcos: solo las obras propias de Editorial Lenoy muestran opciones de compra; las colaboraciones con ONGs se presentan como proyectos culturales.
- ✅ Lenguaje inclusivo en autorías: "Sobre quien escribe" en las fichas y "Nuestras voces" en el catálogo, sin inferir género por el nombre.

### Pendientes operativos que requieren confirmación actual

- Estado de la cuenta Stripe, precios y Payment Links por libro.
- Dominio definitivo y email corporativo.
- Accesos y sesión de onboarding del CMS para Andrea y Melibea.

> **Nota histórica:** las listas extensas que siguen recogen peticiones y decisiones anteriores. Si contradicen el estado vigente de este bloque, manda este bloque.

---

## 📅 Estado de comunicación con Andrea

| Fecha | Acción | Estado |
|---|---|---|
| 2026-05-15 | Primer paquete de materiales (Hijas dossier + cubiertas + sello) | ✅ Recibido e integrado |
| 2026-07-05 | Reunión presencial — primera toma de contacto, demo de la web | ✅ Realizada |
| 2026-07-06 | Email resumen post-reunión con instrucciones completas enviado | ✅ Enviado |
| Pendiente | Zoom call — demo más detallada, decisiones concretas | ⏳ Sin fecha |
| Pendiente | Entrega de materiales (portadas, dosieres, bios, etc.) | ⏳ Sin fecha |

**Nota reunión 5 julio:** Primera toma de contacto en persona. Andrea vio la web por primera vez. Sin decisiones concretas tomadas. Los textos se irán ajustando. Dominio: Andrea no sabe cómo hacerlo, necesita que la guiemos. Próxima reunión por Zoom será más concreta con demos de módulos y CMS.

---

## 📦 Materiales recibidos de Andrea — 2026-05-15

Andrea envía por email su primer paquete de materiales.

| Material | Tipo | Estado en repo |
|---|---|---|
| **Hijas de la mujer** — dossier completo (4 págs) | Dossier editorial | ✅ **Integrado en repo** (sinopsis, bio Juliana, ISBN, 3 citas prensa, año 2025) |
| **Maleidra y el anillo mágico** — cubierta de imprenta | Solo cubierta | ⚠️ Falta dossier completo |
| **Primer Certamen Literario Escolar 25N FRS-UE** — cubierta antología | Solo cubierta | ⚠️ Falta dossier completo |
| **Sello editorial Lenoy** | Identidad visual | ✅ Integrado: `public/brand/simbolo-lenoy.svg` en navbar, footer, favicon |
| **Fotos equipo** | Fotos reales | ✅ Integradas: `melibea.jpg` + `andrea.jpeg` en `/que-es-lenoy` |
| **Textos institucionales** | Textos reales | ✅ Integrados: misión, visión, trayectoria, compromiso, objetivos, línea editorial |

### Decisión técnica acordada con Andrea (2026-05-15)

Detalle de obra → **Opción B con bloque de prensa condicional**:
- La página de detalle muestra: cita destacada + ficha técnica + sinopsis + sobre la autora (ya existente) + **bloque "Lo que dice la prensa" solo si la obra tiene reseñas**.
- Si la obra no tiene reseñas, el bloque desaparece del DOM (sin hueco en blanco).
- Implementación técnica: campo opcional `pressQuotes` en el schema Zod de `src/content/config.ts` + bloque condicional en `src/pages/publicaciones/[id].astro` (mismo patrón que el ya existente de `category === 'colaboracion-ongs'`).
- La primera obra con `pressQuotes` reales será **Hijas de la mujer** (3 citas en su dossier).

### Cambios detectados en catálogo respecto al provisional

- **"Maleidra y el anillo mágico"** (Luna Micha Nseme Oyana) → confirmada como obra del catálogo. Hay que crear `src/content/books/maleidra-y-el-anillo-magico.json`.
- **"Primer Certamen Literario Escolar 25N FRS-UE"** → nueva entrada en la categoría `colaboracion-ongs`. Hay que crear `src/content/books/primer-certamen-literario-25n.json`.
- **"Hijas de la mujer"** → ya existe placeholder en `src/content/books/hijas-de-la-mujer.json`, hay que sustituirlo por los datos reales del dossier.
- **Resto del catálogo provisional** (`amor-sin-fronteras.json`, `el-silencio-roto.json`, `lo-rarito-que-eres.json`, `voces-del-mango.json`): seguimos sin confirmación. Andrea no ha enviado dosieres para ellos. Probablemente algunos sean inventados por la IA y deban eliminarse.

---

## Regla obligatoria para IA y Marcos

Cada vez que se añada un `[PENDIENTE]`, aparezca un bloqueo externo, Andrea mande información nueva o se resuelva una duda, hay que actualizar este archivo en el mismo cambio.

Este documento debe leerse junto con `PROMPT_MAESTRO_EDITORIAL_LENOY.md` y `ROADMAP.md` al rehidratar una sesión. Si hay contradicción, manda el orden: **PROMPT_MAESTRO → ROADMAP → PENDIENTES_ANDREA**.

---

## Resumen ejecutivo

| Estado | Tema | Qué falta |
|---|---|---|
| 🔴 | Portadas e imágenes | Portadas reales, fotos de Andrea/Melibea/autoras, imágenes de blog si las quieren |
| 🔴 | Textos reales | Todas las páginas con `[PENDIENTE]` |
| 🔴 | Catálogo real | Títulos definitivos, sinopsis, autorías, ISBNs, precios, categorías |
| 🔴 | Compra | Cuenta Stripe, Payment Links por libro, tarifas de envío |
| 🔴 | Contacto/legal | Email real, datos legales de la asociación, textos legales o datos para redactarlos |
| 🟡 | Deploy/CMS | Cuenta Netlify, acceso CMS para Andrea/Melibea |
| 🟡 | Dominio | Dominio final y email corporativo |
| 🟢 | RRSS | Instagram y Facebook recibidos e integrados |

---

## Lista para pedir a Andrea

### 0. Regla de orden editorial — Melibea primero (PERMANENTE)
**Regla recibida de Andrea (conversación 2026-05-07):** "pon siempre primero el nombre de Melibea, q es conocida y tiene tirón".
- Trifonia Melibea Obono debe aparecer la **primera** en cualquier listado de autoras, equipo o fundadoras.
- Esta regla aplica a toda implementación futura de secciones que la incluyan.
- Melibea aún no está en `src/content/authors/` — añadirla cuando Andrea confirme su bio y foto.

### 1. Catálogo y libros reales
> ⚠️ **El contenido actual en `src/content/books/` y `src/content/blog/` es provisional (generado por IA).** Los 5 libros, 3 autoras y 3 posts deben ser confirmados por Andrea antes de avanzar. Ejemplo crítico: "Lo rarito que eres" está mal atribuido en el JSON (nombre de autora ficticio); el libro real es de Trifonia Melibea Obono.

**Actualización 2026-05-15:** primer paquete recibido (ver tabla "Materiales recibidos" arriba). Tres obras confirmadas en catálogo: *Hijas de la mujer*, *Maleidra y el anillo mágico*, *Primer Certamen Literario Escolar 25N FRS-UE*. Pendiente: dosieres del resto + lista definitiva del catálogo (cuántas obras en total, cuáles se quedan, cuáles caen).

**Qué falta pedir explícitamente a Andrea (próxima petición):**
- **Lista definitiva del catálogo completo:** número total de obras, títulos exactos, orden de aparición en la web.
- **Dossier completo de cada obra que aún no lo tenga.** Modelo de referencia: el dossier de *Hijas de la mujer* (4 páginas: obra + ficha técnica + bio autora + citas de prensa + enlaces). Aplicar el mismo formato al resto.
- **Para *Maleidra*:** dossier completo + bio de Luna Micha Nseme Oyana + foto autora + año exacto de publicación + categoría editorial (¿obra propia? ¿colección infantil aparte?).
- **Para *Primer Certamen 25N*:** dossier completo + logos en alta resolución de UE/FRS/LORDE/Lenoy + párrafo oficial de FRS y de LORDE + política sobre nombres del alumnado autor (consentimiento de tutores, atribución colectiva vs. individual) + año exacto + ISBN si lo tiene.
- **Para todas las obras:** JPG cubierta frontal en alta resolución (mínimo 600×900px), separada de la cubierta completa de imprenta.
- Confirmar títulos definitivos del resto del catálogo provisional.
- Confirmar qué libros son **obras propias** y cuáles son **colaboraciones con ONGs**.
- Para colaboraciones con ONGs: nombre de la ONG, contexto del proyecto, texto validado y si parte de beneficios va a la organización.
- Payment Link de Stripe por cada libro cuando la cuenta esté lista.

Dónde está incluido:
- `src/content/books/*.json`
- `src/pages/publicaciones/[id].astro`
- `src/pages/publicaciones/index.astro`
- `src/pages/donde-comprar.astro`
- `ROADMAP.md` Fase 8.2 y 8.3

### 2. Autoras, equipo y fotos
- Bio de Andrea Ramos para la web.
- Bio de Trifonia Melibea Obono para la web. **Debe aparecer la primera en todas las listas de autoras/equipo** (regla permanente, recibida 2026-05-07).
- Fotos de Andrea y Melibea, o confirmar que se mantienen avatares con inicial.
- Confirmar si hay más autoras reales y enviar bio, origen, libros asociados y redes/web personal si procede.
- Fotos de autoras reales si quieren sustituir avatares.

Dónde está incluido:
- `src/pages/que-es-lenoy.astro`
- `src/content/authors/*.json`
- `src/components/AuthorCard.astro`
- `ROADMAP.md` Fase 8.2

### 3. Textos institucionales
- Texto de “Quiénes somos”: historia de la asociación y por qué nació Lenoy.
- Objetivos de la asociación.
- Trayectoria e hitos desde la fundación.
- Estatutos: decidir si se publican y, si sí, enviar PDF.
- Texto de compromiso feminista, LGTB+ y afroguineano.
- Línea editorial: qué publica Lenoy y qué no.
- Misión, visión y valores.
- Apariciones en prensa: enlaces a El País, ElDiario.es, Fundación Pedro Zerolo u otros medios, y textos/citas validados.

Dónde está incluido:
- `src/pages/que-es-lenoy.astro`
- `src/pages/editorial-lenoy.astro`
- `ROADMAP.md` Fase 8.2

### 4. “Publica con nosotras”
- Qué géneros, temáticas y tipos de personas autoras aceptan.
- Formato de envío de manuscritos: PDF/Word, extensión, email, asunto, requisitos.
- Plazos de respuesta y criterios de selección.
- Condiciones generales: contrato, derechos, royalties o modelo editorial.
- Descripción del proceso de edición colaborativo.
- Email definitivo para recibir propuestas.

Dónde está incluido:
- `src/pages/publica-con-nosotras.astro`
- Netlify Forms: formulario `propuesta-editorial`
- `ROADMAP.md` Fase 1.2 y Fase 8.2

### 5. Compra, envío y contacto
- Email real de contacto: confirmar si será `hola@editoriallenoy.com` u otro.
- Tarifas de envío: península, islas, recogida en Madrid y posibles envíos internacionales.
- Confirmar plazos reales de entrega.
- Confirmar cómo quieren gestionar pedidos manuales antes de Stripe.
- Crear cuenta Stripe de la asociación, verificar identidad y cuenta bancaria.
- Enviar Payment Links de Stripe por libro.

Dónde está incluido:
- `src/pages/donde-comprar.astro`
- `src/pages/publicaciones/[id].astro`
- `src/components/Footer.astro`
- `ROADMAP.md` Fase 8.3

### 6. Legal, privacidad y cookies
- Datos legales de la asociación: nombre legal, CIF/NIF si existe, domicilio fiscal o dirección de contacto, email de contacto.
- Confirmar responsable del tratamiento de datos.
- Confirmar si quieren que Marcos prepare borradores de aviso legal, privacidad y cookies para revisión.
- Texto legal o datos necesarios para checkbox de privacidad en formularios.

Dónde está incluido:
- `src/pages/publica-con-nosotras.astro`
- `ROADMAP.md` Fase 6.4
- `PROMPT_MAESTRO_EDITORIAL_LENOY.md` sección GDPR/LOPD

### 7. CMS, cuentas y deploy
- Cuenta Netlify o confirmación de que Marcos crea/gestiona la cuenta inicial.
- Emails de Andrea y Melibea para invitarlas al CMS/Netlify Identity.
- Confirmar si pueden crear cuenta GitHub si hiciera falta.
- Sesión de onboarding CMS en verano 2026.

Dónde está incluido:
- `public/admin/index.html`
- `public/admin/config.yml`
- `GUIA-CMS.md`
- `ROADMAP.md` Fase 2.3 y Fase 8.1

### 8. Dominio y email corporativo
- Dominio final: `editoriallenoy.com`, `editoriallenoy.es` u otro.
- Quién lo registra y dónde.
- Si quieren email corporativo con el dominio.
- Proveedor de email: Zoho Mail, Google Workspace u otro.

Dónde está incluido:
- `ROADMAP.md` Fase 8.4
- `REHIDRATACION.md` bloqueantes externos
- `src/components/Footer.astro`

### 9. Identidad visual — validación contra manual de marca (auditado 2026-05-13)
> Auditoría realizada: web inspeccionada en local vs. Manual de Identidad Lenoy JUL2023.
> El manual versionado está en AI CORE: `dominios/desarrollo/proyectos/lenoy/recursos/identidad/manual-identidad-lenoy-resumen-operativo.md`

- **Símbolo/logotipo vectorial real**: ✅ **RECIBIDO 2026-05-15.** Andrea envía `sello_LenoyEdiciones_editable.ai` + `.svg` por email. Archivados en AI CORE: `recursos/identidad/sello/`. Autor: Romualdo Faura. Pendiente: integrar el SVG en `public/brand/` y sustituir el placeholder "L" en Navbar, Footer y favicon. Documentación de uso en `recursos/identidad/sello/README.md`.
- **Tipografía**: el manual especifica **Source Serif Pro** (Bold/Regular/Light). La web usa **Playfair Display**. Confirmar con Andrea si es un cambio consciente que quieren mantener, o si hay que alinear con el manual. No cambiar hasta decisión.
- **Portadas de cubiertas**: el manual especifica un sistema tipográfico para las portadas (Source Serif Semibold 26pt para título, Regular 13pt para autor). Sin portadas reales no se puede verificar. Pedir portadas a Andrea (ver sección 1).
- **Orden del equipo — Melibea primero**: en `/que-es-lenoy`, "Andrea Ramos" aparece antes de "Trifonia Melibea Obono". La regla acordada es Melibea siempre primera. Confirmar con Andrea que la estructura es: Melibea (primera) → Andrea (segunda), antes de modificar el código.

Dónde está incluido:
- `src/layouts/BaseLayout.astro` (carga de Playfair Display, Google Fonts)
- `tailwind.config.mjs` (fontFamily serif)
- `src/components/Navbar.astro` + `src/components/Footer.astro` (placeholder "L")
- `public/favicon.svg` (placeholder "L")
- `src/pages/que-es-lenoy.astro` (orden equipo)

### 10. Decisiones futuras
- Confirmar idiomas de la web: ¿solo español? ¿español + inglés? ¿hay alguno más? ¿El inglés es requisito para el lanzamiento o para una fase futura? (Referencia técnica: `ROADMAP.md` Paso 9.3 — no se implementa hasta confirmación de Andrea.)
- Confirmar si quieren newsletter.
- Confirmar si quieren sección de prensa visible post-lanzamiento.
- Confirmar si quieren publicar estatutos públicamente.

Dónde está incluido:
- `ROADMAP.md` Fase 9
- `PROMPT_MAESTRO_EDITORIAL_LENOY.md` requisitos ampliados

---

## Mensajes preparados para Andrea (pendiente de envío)

> Preparados: 2026-05-13 — **Pendiente de enviar**. Ninguna respuesta recibida todavía.

Dos piezas listas, ambas en AI CORE:

| Pieza | Referencia en AI CORE | Uso |
|-------|-----------------------|-----|
| WhatsApp corto + lista por bloques (25 preguntas) | `recursos/conversaciones/mensaje-andrea-pendientes-2026-05-13.md` | Enviar primero el WhatsApp. Lista solo si Andrea acepta revisar. |
| Brief profesional de validación (Markdown, compartible) | `recursos/conversaciones/brief-validacion-lenoy-andrea-2026-05-13.md` | Compartir como documento si procede. |

Flujo acordado: WhatsApp corto → esperar confirmación → lista detallada o brief según contexto.

---

## Información ya recibida y no debe volver a pedirse

### Email de contacto real
- Andrea envió `lenoyediciones@gmail.com` (2026-05-07) como email real de la editorial.
- La web usa actualmente `hola@editoriallenoy.com` como placeholder corporativo. Pendiente de confirmar cuál usar definitivamente: Gmail provisional vs. email corporativo con dominio propio.
- `Dónde está incluido`: `src/components/Footer.astro`, `src/pages/donde-comprar.astro`, sección 5 de este documento.

### Redes sociales reales
- Instagram: `https://www.instagram.com/lenoy_ediciones/`
- Facebook: `https://www.facebook.com/share/1CrZCXCvp4/`

Dónde está incluido:
- `src/config/site.ts`
- `src/components/Footer.astro`
- `src/pages/donde-comprar.astro`
- `ROADMAP.md`
- `PROMPT_MAESTRO_EDITORIAL_LENOY.md`

---

## Pendientes detectados en código

| Archivo | Pendiente |
|---|---|
| `src/pages/que-es-lenoy.astro` | Historia de la asociación, objetivos, trayectoria, estatutos, compromiso, bio Andrea, bio Melibea |
| `src/pages/editorial-lenoy.astro` | Línea editorial, misión, visión, valores, prensa |
| `src/pages/publica-con-nosotras.astro` | Tipos de obra, formato de manuscrito, plazos, criterios, contrato/royalties, proceso editorial, privacidad |
| `src/pages/donde-comprar.astro` | Precios reales en listado, tarifas de envío, email real |
| `src/pages/publicaciones/[id].astro` | Email real de pedidos y contexto específico de ONG |

---

## Cómo mantener este documento

- Si Andrea manda un dato real: moverlo a “Información ya recibida” o marcarlo como resuelto.
- Si se añade un `[PENDIENTE: ...]` en código: añadirlo a “Pendientes detectados en código”.
- Si un bloqueo impide avanzar: añadirlo a “Resumen ejecutivo” y enlazarlo desde `ROADMAP.md`.
- Si un dato se guarda en código o docs: indicar siempre “Dónde está incluido”.
