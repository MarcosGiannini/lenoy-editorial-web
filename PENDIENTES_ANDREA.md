# Pendientes para Andrea — Editorial Lenoy
> Fuente única de verdad de la información que falta pedir a Andrea/Melibea.
> Última actualización: **6 mayo 2026 — documento creado y RRSS reales marcadas como resueltas.**

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
- Confirmar cuántos libros forman el catálogo real total.
- Confirmar títulos definitivos, especialmente si el tercer libro es **Maleidra** o tiene otro título.
- Para cada libro: título, autoría, año, categoría, géneros/temas, sinopsis corta, sinopsis larga, ISBN si existe, precio final.
- Confirmar qué libros son **obras propias** y cuáles son **colaboraciones con ONGs**.
- Para colaboraciones con ONGs: nombre de la ONG, contexto del proyecto, texto validado y si parte de beneficios va a la organización.
- Portadas reales en JPG/PNG, mínimo 600x900px, idealmente artes finales exportados para web.
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

- **Símbolo/logotipo vectorial real**: la web usa un placeholder ("L" en círculo terracota). El símbolo real de Lenoy (dos rectángulos = L = libros apilados) no existe como asset en el repo. Pedir a Andrea/Melibea o al diseñador del manual (`info@romualdofaura.com`): archivo SVG del símbolo y del sello completo (símbolo + "Lenoy ediciones").
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
- Confirmar si bilingüe ES/EN es requisito real o deseo post-lanzamiento.
- Confirmar si quieren newsletter.
- Confirmar si quieren sección de prensa visible post-lanzamiento.
- Confirmar si quieren publicar estatutos públicamente.

Dónde está incluido:
- `ROADMAP.md` Fase 9
- `PROMPT_MAESTRO_EDITORIAL_LENOY.md` requisitos ampliados

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
