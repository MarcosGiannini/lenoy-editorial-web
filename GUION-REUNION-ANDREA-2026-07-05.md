# GUIÓN DE REUNIÓN — EDITORIAL LENOY
## Marcos + Andrea · 5 de julio de 2026
### Documento de trabajo — versión para imprimir o llevar en pantalla

> **Cómo usar este guión:** Sigue los bloques en orden. Los tiempos son orientativos.
> Los recuadros 💬 son literalmente lo que puedes decir. Los recuadros ✏️ son para anotar respuestas de Andrea en la reunión.

---

---

# ANTES DE EMPEZAR — CHECKLIST MARCOS

Comprueba esto antes de que llegue Andrea:

- [ ] Web abierta en el navegador: https://steady-scone-31c2af.netlify.app/
- [ ] Este guión abierto o impreso
- [ ] Bolígrafo y papel (o Word abierto) para anotar decisiones
- [ ] Portátil cargado
- [ ] WiFi funcionando

---

---

# BLOQUE 1 — ARRANQUE Y CONTEXTO
## ⏱ 5 minutos

**Objetivo:** Ponerla en situación. Que sepa de dónde venimos y adónde vamos hoy.

---

💬 **Lo que puedes decir:**

*"Llevamos unos meses construyendo la web. Hoy te la enseño en directo por primera vez. El objetivo de hoy no es que esté terminada —no lo está— sino que veas hasta dónde hemos llegado, que me digas si el rumbo es el correcto, y que salgamos con una lista clara de lo que necesito de ti para terminar.*

*La web ya está publicada en internet. Nadie la va a encontrar en Google todavía porque no tiene el dominio definitivo, pero existe y está funcionando."*

---

### Qué es lo que tiene la web hoy (para que tú tengas claro antes de enseñársela):

- ✅ 17 páginas construidas y publicadas
- ✅ Diseño completo con los colores de la editorial (terracota, verde oscuro, crema)
- ✅ Vuestro símbolo/logotipo real en la cabecera, pie y favicon
- ✅ Las fotos reales de Melibea y de Andrea en la sección "Quiénes somos"
- ✅ Los textos reales que mandaste por email (misión, visión, trayectoria, compromiso, objetivos)
- ✅ Los 5 libros reales del catálogo
- ✅ Las 4 autoras reales (Melibea siempre primera)
- ✅ El panel de administración preparado (para que editéis sin código)
- ❌ Portadas reales de los libros (están los placeholders hasta que me las mandes)
- ❌ Sinopsis y fichas completas de todos los libros
- ❌ Botones de compra activos (esperando cuenta Stripe)
- ❌ Dominio definitivo

---

---

# BLOQUE 2 — DEMO DE LA WEB
## ⏱ 25 minutos

**Objetivo:** Recorrer la web página a página con Andrea. Que vea, que opine, que apruebe o que pida cambios.

### URL para enseñar:
```
https://steady-scone-31c2af.netlify.app/
```

---

## 2.1 — Página de inicio (Home)

**Qué mostrar:**
- El hero principal con el titular y el fondo visual
- El símbolo de Lenoy
- Los botones de navegación

💬 *"Esta es la primera página que ve alguien cuando entra. El titular es provisional — tú me dirás si lo cambias o si te gusta."*

✏️ **Anotar:** ¿Le gusta el titular? ¿Quiere cambiarlo? ¿Algún cambio visual?

---

## 2.2 — "Qué es Lenoy" (`/que-es-lenoy`)

**Qué mostrar:**
- Las fotos reales de Melibea y Andrea
- Melibea aparece la primera (regla acordada: "Melibea siempre primera porque tiene tirón")
- Los textos de Quiénes somos, Objetivos, Trayectoria, Compromiso — todos los que ella mandó por email

💬 *"Esta es la página más importante para vosotras. Aquí aparecéis las dos. He usado exactamente los textos que me mandaste. Melibea siempre la primera, como acordamos.*

*Hay una sección de Estatutos que de momento pone 'Pendiente' — me comentaste que querías publicarlos pero necesito el PDF."*

✏️ **Anotar:**
- ¿Aprueba los textos tal como están o quiere cambiar algo?
- ¿Confirma publicar los estatutos? ¿Cuándo me manda el PDF?
- ¿El nombre completo de Melibea es "Trifonia Melibea Obono" o lleva "Ntutumu" al final?

---

## 2.3 — "Editorial Lenoy" (`/editorial-lenoy`)

**Qué mostrar:**
- Línea editorial, Misión, Visión, Valores — todos textos reales que mandó Andrea
- Sección "Apariciones en prensa" — actualmente vacía, pone [Pendiente]

💬 *"Aquí está la identidad editorial completa. También con tus textos.*

*La sección de prensa está vacía porque necesito los enlaces a los artículos. Me dijiste que habéis salido en El País, ElDiario, Fundación Pedro Zerolo — si me mandas los enlaces los pongo."*

✏️ **Anotar:**
- ¿Aprueba los textos?
- ¿Me manda los enlaces de prensa? ¿Cuándo?
- ¿Tiene más apariciones en medios que añadir?

---

## 2.4 — "Publicaciones" (`/publicaciones`)

**Qué mostrar:**
- Los 5 libros del catálogo divididos en "Obras propias" y "Colaboraciones con ONGs"
- Las portadas placeholder (sin imagen real — solo el color de fondo con el título)
- "Proyecto cultural" en vez de precio en los libros de ONG
- La sección "Nuestras autoras" al final — con las fotos reales, Melibea primera

💬 *"Aquí está el catálogo completo. Los 5 libros que me confirmaste. Las portadas están en modo provisional porque tú me dijiste que tenías los archivos en alta resolución — en cuanto me los mandes, los pongo y la web cambia completamente de aspecto.*

*Hay dos libros sin precio porque son proyectos culturales con ONGs, ¿es correcto?"*

✏️ **Anotar:**
- ¿Confirma los 5 libros como catálogo definitivo o falta alguno / sobra alguno?
- ¿Los libros de ONG son correctos sin precio?
- ¿Cuándo puede mandarte las portadas? ¿En qué formato las tiene?

---

## 2.5 — Ficha individual de libro (`/publicaciones/[id]`)

**Qué mostrar:**
- Entrar en "Hijas de la mujer" (la que tiene el dossier más completo)
- Mostrar la ficha técnica, sinopsis, bio de autora
- Mostrar el bloque de citas de prensa (las 3 que vinieron en el dossier)
- El botón de "Comprar" — aparece deshabilitado (gris) hasta que conectemos Stripe

💬 *"Cada libro tiene su propia página. Esta es 'Hijas de la mujer' y es la más completa porque me mandaste el dossier entero. Fíjate que hay una sección de 'Lo que dice la prensa' — solo aparece si el libro tiene reseñas. El resto de libros la tienen oculta hasta que me mandes sus dosieres.*

*El botón de compra está deshabilitado de momento. Se activa cuando creéis la cuenta de Stripe."*

✏️ **Anotar:**
- ¿Aprueba el diseño de la ficha?
- ¿Quiere añadir o cambiar algo en "Hijas de la mujer"?

---

## 2.6 — "Publica con nosotras" (`/publica-con-nosotras`)

**Qué mostrar:**
- La estructura general de la página
- El formulario de envío de propuestas (funcional, recibe emails)
- Los textos placeholder

💬 *"Esta página es para que autoras os manden propuestas de manuscritos. El formulario ya funciona — cuando alguien lo rellena, os llega un email. Pero los textos son provisionales porque necesito que me digas: ¿qué géneros aceptáis? ¿qué condiciones? ¿a qué email llegan las propuestas?"*

✏️ **Anotar:**
- ¿Qué géneros/temáticas acepta Lenoy?
- ¿Cuál es el email definitivo para recibir propuestas?
- ¿Qué condiciones o criterios de selección quieren publicar?
- ¿Plazos de respuesta?

---

## 2.7 — "Dónde comprar" (`/donde-comprar`)

**Qué mostrar:**
- La página de compra con los libros listados
- Los botones de compra deshabilitados
- La sección de información de envío (placeholder)

💬 *"Esta es la página de compra. Los botones se activan cuando creéis la cuenta de Stripe. También necesito que me confirmes las tarifas de envío: ¿cuánto cobráis por península? ¿islas? ¿hacéis envíos internacionales? ¿hay opción de recogida en Madrid?"*

✏️ **Anotar:**
- Tarifas de envío: Península / Islas / Internacional / Recogida
- ¿Plazos de entrega orientativos?
- ¿Tienen IBAN de la asociación para recibir pagos por Bizum o transferencia mientras tanto?

---

## 2.8 — El panel de administración (demo del CMS)

**URL:**
```
https://steady-scone-31c2af.netlify.app/admin/
```

💬 *"Este es el panel que usaréis vosotras para actualizar la web sin tocarme a mí. Es como un Word para la web.*

*Ahora mismo pide usuario y contraseña — no está activado todavía porque necesito vuestros emails para invitaros. Pero te enseño cómo funciona por dentro."*

**Si puedes hacer una demo en local (con `npm run dev`):**
- Mostrar la interfaz del CMS: lista de libros, editor visual, subida de imágenes
- Mostrar que al guardar un cambio, la web se actualiza sola

💬 *"Cuando esté activado, entráis aquí, cambiais el texto del libro, le dais a guardar, y en un minuto la web está actualizada. Sin llamarme a mí. Sin código. Desde el móvil si queréis."*

✏️ **Anotar:**
- ¿Email de Andrea para invitar al CMS?
- ¿Email de Melibea para invitar al CMS?

---

---

# BLOQUE 3 — DECISIONES PENDIENTES
## ⏱ 20 minutos

**Objetivo:** Salir de aquí con respuesta a cada una de estas preguntas. Sin respuesta = sin avance.

---

## DECISIÓN 1 — El dominio ⭐ URGENTE

**Contexto para ti (Marcos):**
- El dominio es la dirección web definitiva: `editoriallenoy.com` o `editoriallenoy.es`
- Sin dominio, la web tiene la URL fea de Netlify (steady-scone-31c2af.netlify.app)
- Hay que comprarlo cuanto antes — si alguien lo pilla, perdéis el nombre

**Mi recomendación para Andrea:**
- Comprar en **Nominalia** (nominalia.com) — todo en español, soporte en España
- `.com` si está libre (~18€/año) → mejor para presencia internacional
- `.es` (~12€/año) → más local, también válido
- Si pueden: comprar ambos y que `.es` apunte al `.com`

💬 *"El dominio es como el nombre de la calle de vuestro negocio en internet. Os recomiendo que lo compréis vosotras — no es caro, entre 12 y 18 euros al año, y así es completamente vuestro. Yo os digo exactamente qué hacer, en 10 minutos está configurado.*

*La web que os he enseñado pasará a llamarse editoriallenoy.com en cuanto lo hagáis."*

✏️ **Anotar:**
- ¿Qué dominio eligen? `editoriallenoy.com` / `.es` / otro
- ¿Quién lo compra? Andrea / Melibea / Marcos con reembolso
- ¿Dónde lo compramos? Nominalia (recomendado)

---

## DECISIÓN 2 — El email corporativo ⭐ URGENTE

**Contexto para ti (Marcos):**
- Ahora mismo usan `lenoyediciones@gmail.com`
- Con el dominio pueden tener `hola@editoriallenoy.com`
- **Zoho Mail** da 5 cuentas con dominio propio completamente gratis
- Nominalia también tiene email hosting propio, pero cuesta ~20-30€/año adicionales
- Recomendación: dominio en Nominalia + email en Zoho Mail (gratis)

💬 *"Una vez tengáis el dominio, podéis tener email de empresa: hola@editoriallenoy.com, andrea@editoriallenoy.com… Hay una opción completamente gratuita que se llama Zoho Mail. Os da 5 cuentas sin pagar nada. Lo configuro yo en media hora."*

✏️ **Anotar:**
- ¿Quieren email corporativo?
- ¿Qué cuentas quieren? `hola@` / `andrea@` / `melibea@` / otra
- ¿O prefieren seguir con Gmail por ahora?

---

## DECISIÓN 3 — La tipografía

**Contexto para ti (Marcos):**
- El Manual de Identidad de Lenoy especifica **Source Serif Pro** como tipografía oficial
- La web usa ahora **Playfair Display** (también un serif elegante, similar)
- Cambiar a Source Serif Pro es un trabajo de ~30 minutos

💬 *"En el manual de marca que me pasasteis, la tipografía oficial es 'Source Serif Pro'. La web ahora usa 'Playfair Display', que es muy parecida — ambas son letras con serifa elegante. ¿Queréis que alinee con el manual o estáis contentas con la que hay?"*

✏️ **Anotar:**
- ¿Mantienen Playfair Display o cambian a Source Serif Pro?

---

## DECISIÓN 4 — Los estatutos

💬 *"Me comentaste que queríais publicar los estatutos de la asociación en la web. Tengo la sección preparada pero sin el documento. ¿Queréis que aparezcan? ¿Podéis mandármelos en PDF?"*

✏️ **Anotar:**
- ¿Sí o no publicar estatutos?
- ¿Cuándo llega el PDF?

---

## DECISIÓN 5 — La sección de prensa

💬 *"Sé que habéis salido en medios importantes: El País, ElDiario.es, Fundación Pedro Zerolo… Tengo la sección preparada en la web pero sin los enlaces. ¿Queréis que aparezca ya? ¿Podéis pasarme los URLs de los artículos?"*

✏️ **Anotar:**
- ¿Quieren la sección de prensa activa?
- ¿Me mandan los enlaces? ¿Cuándo?

---

## DECISIÓN 6 — Idiomas

💬 *"La web ahora está solo en español. ¿Eso está bien para el lanzamiento? ¿En algún momento queréis añadir inglés u otro idioma? No hace falta decidirlo ahora, pero si lo tengo en cuenta desde el principio es más fácil."*

✏️ **Anotar:**
- ¿Solo español para el lanzamiento?
- ¿Inglés en el futuro? ¿Otro idioma?

---

## DECISIÓN 7 — Newsletter

💬 *"¿Queréis tener un newsletter? Es una lista de correo donde los lectores se suscriben y vosotras les mandáis novedades. Hay herramientas gratuitas hasta cierto número de suscriptores. No es complicado de añadir, pero quiero saber si lo queremos antes de lanzar."*

✏️ **Anotar:**
- ¿Newsletter sí o no?

---

## DECISIÓN 8 — El nombre completo de Melibea

💬 *"En la web pongo 'Trifonia Melibea Obono'. ¿Es correcto así o va 'Trifonia Melibea Obono Ntutumu' con el apellido completo?"*

✏️ **Anotar:**
- Nombre exacto de Melibea para la web

---

## DECISIÓN 9 — Catálogo definitivo

💬 *"Ahora mismo hay 5 libros en el catálogo. ¿Es la lista definitiva? ¿Hay más títulos que deban estar? ¿Alguno que no deba estar?"*

**Lista actual:**
1. Hijas de la mujer (Juliana Mbengono) — Obra propia
2. Lo rarito que eres (Gonzalo Abaha Nguema Mikue) — Obra propia
3. Maleidra y el anillo mágico (Luna Micha Nseme Oyana) — Obra propia
4. Primer Certamen Literario Escolar 25N FRS-UE — Colaboración ONG
5. Voces Diversas Guinea Ecuatorial — Colaboración ONG

✏️ **Anotar:**
- ¿Catálogo completo o faltan/sobran títulos?
- ¿Los libros de ONG son "Proyecto cultural" (sin precio) o tienen precio?
- ¿Hay algún libro de Melibea que deba estar?

---

---

# BLOQUE 4 — LO QUE ANDREA DEBE ENTREGARME
## ⏱ 10 minutos

**Objetivo:** Acordar una fecha para cada entrega. Sin estos materiales no puedo terminar la web.

---

## 🔴 URGENTE — Sin esto la web no puede lanzarse

### 4.1 — Portadas de los 5 libros ⭐⭐⭐

💬 *"Las portadas son lo que más cambia visualmente la web. Tú me dijiste que las tienes en alta resolución — con las artes finales de imprenta. Necesito una imagen JPG de la portada frontal de cada libro. Si tienes PDFs de imprenta, dímelo y te explico cómo extraer la imagen."*

**Formato que necesito:**
- JPG o PNG
- Mínimo 600 píxeles de ancho por 900 de alto (orientación vertical)
- Si tienes el PDF de imprenta, puedo extraerlo yo

✏️ **Anotar:**
- ¿En qué formato tiene las portadas?
- ¿Cuándo puede mandármelas?

---

### 4.2 — Dosieres de los libros que faltan

**Libros con dossier completo (gracias):**
- ✅ Hijas de la mujer

**Libros que necesitan dossier:**
- ❌ Lo rarito que eres
- ❌ Maleidra y el anillo mágico
- ❌ Primer Certamen Literario 25N
- ❌ Voces Diversas Guinea Ecuatorial

💬 *"El modelo de referencia es el dossier de 'Hijas de la mujer' que me mandaste — tiene sinopsis, ficha técnica, bio de autora y citas de prensa. ¿Puedes hacer lo mismo para los otros libros, aunque sea más breve?"*

**Para cada libro necesito como mínimo:**
- Sinopsis (2-4 párrafos)
- Año de publicación
- ISBN (si lo tiene)
- Precio (si se vende) o confirmar que es "Proyecto cultural"

✏️ **Anotar:**
- ¿Cuándo puede tener los dosieres?
- ¿Hay algún libro del que no tiene información (posiblemente inventado por IA)?

---

### 4.3 — Bios de las autoras

**Bios recibidas:**
- ✅ Trifonia Melibea Obono — bio completa

**Bios pendientes:**
- ❌ Andrea Ramos — para la sección "Nuestras autoras"
- ❌ Gonzalo Abaha Nguema Mikue
- ❌ Juliana Mbengono
- ❌ Luna Micha Nseme Oyana

💬 *"Para cada autora necesito un párrafo de presentación — quién es, dónde nació, qué escribe. Y su foto si tienen una buena."*

✏️ **Anotar:**
- ¿Cuándo puede mandarme las bios?
- ¿Tiene fotos de las autoras?

---

### 4.4 — Emails para el CMS

💬 *"Para activar el panel de administración necesito vuestros emails. Con eso os mando una invitación y ya podéis entrar. ¿Usáis los mismos emails que tengo, o preferís uno distinto para esto?"*

✏️ **Anotar:**
- Email de Andrea para el CMS:
- Email de Melibea para el CMS:

---

## 🟡 IMPORTANTE — Para completar secciones específicas

### 4.5 — Textos de "Publica con nosotras"
- ¿Qué géneros/temáticas aceptáis?
- ¿Formato de envío? (PDF/Word, longitud, email de destino, asunto del email)
- ¿Plazos de respuesta?
- ¿Condiciones generales del contrato editorial (sin detalles legales, solo el resumen)?

### 4.6 — Información de envíos
- ¿Precio de envío a la Península?
- ¿Precio a Islas Canarias y Baleares?
- ¿Hacéis envíos internacionales? ¿A qué países?
- ¿Hay opción de recogida en Madrid?
- ¿Plazos orientativos de entrega?

### 4.7 — Datos legales de la asociación
Para el aviso legal y política de privacidad (obligatorios por ley):
- Nombre legal completo de la asociación
- CIF o NIF de la asociación
- Domicilio social o dirección de contacto
- Email oficial de contacto

### 4.8 — PDF de estatutos (si deciden publicarlos)

### 4.9 — Enlaces de prensa
- Artículos en El País, ElDiario.es, Fundación Pedro Zerolo, otros medios
- Citas textuales que quieran destacar (si las tienen)

---

---

# BLOQUE 5 — STRIPE Y LAS VENTAS
## ⏱ 10 minutos

**Objetivo:** Que Andrea entienda cómo funciona el sistema de ventas y se comprometa a crear la cuenta.

---

💬 *"Stripe es la plataforma de pagos. Es como el TPV del banco pero para internet. Es completamente gratuita hasta que hacéis vuestra primera venta — solo cobran un pequeño porcentaje por transacción, unos 42 céntimos en un libro de 12 euros. Sin cuota mensual.*

*Necesito que vosotras creéis la cuenta de la asociación en stripe.com. Esto lo tenéis que hacer vosotras porque hay que verificar la identidad y vincularlo a la cuenta bancaria de la asociación. Yo no puedo hacerlo en vuestro nombre.*

*Una vez creada, generáis un 'enlace de pago' por cada libro — literalmente un botón que va a una página de pago segura. Me mandáis los 5 enlaces y en media hora el botón de Comprar está activo en todos los libros."*

---

### Preguntas frecuentes que te puede hacer Andrea:

**¿Tenemos que dar el número de cuenta?**
Sí, para que Stripe pueda transferiros el dinero de las ventas. Usaréis la cuenta bancaria de la asociación.

**¿Cuándo llega el dinero de una venta?**
Stripe hace transferencias automáticas cada 7 días por defecto. Se puede configurar para que sea más frecuente.

**¿Hay que pagar algo ahora mismo?**
Absolutamente nada. La cuenta es gratuita y no hay cuota fija.

**¿Los compradores pueden pagar con PayPal?**
Con el plan básico solo se puede pagar con tarjeta de crédito o débito. PayPal requeriría una integración adicional.

**¿Pueden comprar desde Guinea Ecuatorial o desde el extranjero?**
Sí, cualquier persona con tarjeta de crédito, desde cualquier país, puede comprar.

**¿Funciona en euros?**
Sí, todo en euros.

**¿Qué pasa si alguien quiere devolver un libro?**
Stripe permite hacer devoluciones desde el panel de administración de Stripe. Es un proceso manual que vosotras gestionáis.

---

✏️ **Anotar:**
- ¿La asociación ya tiene cuenta bancaria?
- ¿Quién va a gestionar la cuenta Stripe (Andrea o Melibea)?
- ¿Cuándo pueden crear la cuenta?
- ¿Tienen el CIF/NIF de la asociación para el registro?

---

---

# BLOQUE 6 — DOMINIO Y EMAIL
## ⏱ 8 minutos

**Objetivo:** Salir con la decisión tomada y, si es posible, con el dominio comprado hoy mismo.

---

💬 *"El dominio es la dirección definitiva de la web: editoriallenoy.com o editoriallenoy.es. Es como el número de portal de vuestra oficina en internet. Sin dominio, la web existe pero nadie puede encontrarla fácilmente.*

*Mi recomendación es que lo compréis vosotras. No es caro — entre 12 y 18 euros al año. Os explico exactamente los pasos, lo hacemos en 10 minutos, y es 100% vuestro para siempre. Yo solo necesito los datos de acceso al proveedor para configurar que apunte a vuestra web."*

---

### Dónde comprarlo

**Opción recomendada: Nominalia**
- Web: nominalia.com
- Todo en español, soporte telefónico en España
- Precio: ~14€/año para `.es`, ~18€/año para `.com`
- Fácil para usuarias no técnicas

**Si quieren ahorrar: Namecheap**
- Web: namecheap.com
- Interfaz en inglés
- Más barato: ~9-11€/año para `.com`

---

### Email corporativo

💬 *"Una vez tengáis el dominio, podéis tener email con vuestro nombre: hola@editoriallenoy.com, andrea@editoriallenoy.com. Hay una opción gratuita que se llama Zoho Mail — da hasta 5 cuentas de email sin pagar nada. Lo configuro yo."*

**Zoho Mail gratuito:**
- Web: zoho.com/mail
- Hasta 5 usuarios gratis
- 5 GB por cuenta
- Webmail en español, funciona en móvil
- Cero coste

✏️ **Anotar:**
- ¿`.com` o `.es`?
- ¿Qué nombre exacto? `editoriallenoy` / otro
- ¿Compran en Nominalia o en otro proveedor?
- ¿Quieren email corporativo? ¿Qué cuentas?

---

---

# BLOQUE 7 — NETLIFY Y EL DEPLOY
## ⏱ 5 minutos (si lo preguntan)

**Objetivo:** Que Andrea entienda qué es Netlify y por qué es la opción correcta.

---

💬 *"Netlify es el 'servidor' donde vive la web. Cuando alguien escribe editoriallenoy.com en el navegador, Netlify es quien le entrega la página. Se pronuncia 'Net-li-fai'.*

*El plan que estamos usando es gratuito y cubre perfectamente todo lo que necesitáis. Solo si en el futuro necesitarais funcionalidades muy avanzadas habría un plan de pago, pero no os va a hacer falta.*

*La ventaja de este sistema: cada vez que yo hago un cambio en el código, la web se actualiza automáticamente en menos de dos minutos. Y cuando vosotras cambiéis algo en el panel de administración, también. Sin servidores que mantener, sin costes mensuales fijos."*

**Si pregunta ¿qué pasa si Netlify cierra?**
*"Todo el código está guardado en GitHub, que es de Microsoft. En 30 minutos lo movemos a otra plataforma y la web no pierde nada."*

**Si pregunta ¿es segura?**
*"Sí. Netlify incluye HTTPS (el candado verde del navegador) automáticamente. Vuestros visitantes están protegidos."*

---

---

# BLOQUE 8 — EL CMS / PANEL DE ADMINISTRACIÓN
## ⏱ 8 minutos

**Objetivo:** Que Andrea entienda qué es, cómo funciona y cuándo lo va a usar.

---

💬 *"El CMS — que viene de 'Content Management System' o Sistema de Gestión de Contenido — es el panel privado donde vosotras vais a editar la web sin necesitar a un programador.*

*Imagina que tienes un Word, pero en vez de guardar en tu ordenador, guarda en la web directamente. Así de sencillo.*

*Con el CMS podéis:*
- *Añadir un libro nuevo al catálogo*
- *Cambiar el precio de un libro*
- *Subir la portada de un libro*
- *Escribir un artículo en el blog*
- *Actualizar la bio de una autora*
- *Cambiar cualquier texto de la web*

*Sin llamarme a mí. Sin tocar código. Desde vuestro ordenador o incluso desde el móvil."*

---

### ¿Está disponible ahora?

💬 *"Está preparado pero no activo todavía. Necesito vuestros emails para invitaros. Una vez que me los deis, lo activo ese mismo día y os mando las instrucciones de acceso.*

*He preparado también una guía escrita muy detallada — se llama GUIA-CMS.md — que explica paso a paso cómo usarlo. Y cuando Melibea vuelva a Madrid en verano, podemos quedar y os enseño en persona cómo funciona."*

---

### ¿Tiene coste?

💬 *"El CMS es completamente gratuito. Es de código abierto — lo mantiene la comunidad de desarrolladores."*

---

---

# BLOQUE 9 — PRÓXIMOS PASOS Y FECHAS
## ⏱ 5 minutos

**Objetivo:** Salir de la reunión con un plan concreto y fechas comprometidas.

---

### Lo que hace Marcos (tú) después de esta reunión:

- [ ] Activar el CMS con los emails de Andrea y Melibea (24-48h)
- [ ] Configurar el dominio cuando ellas lo compren (24h)
- [ ] Configurar el email corporativo en Zoho (24h)
- [ ] Integrar las portadas cuando Andrea las mande
- [ ] Integrar los dosieres y bios cuando los reciba
- [ ] Conectar los Payment Links de Stripe cuando los tengan
- [ ] Activar el bloque de prensa cuando reciba los enlaces
- [ ] Poner los textos reales de "Publica con nosotras" cuando los reciba

---

### Lo que hace Andrea después de esta reunión:

- [ ] Comprar el dominio (esta semana)
- [ ] Crear cuenta Stripe (antes del lanzamiento)
- [ ] Mandar portadas de los 5 libros (cuanto antes)
- [ ] Mandar dosieres de los libros que faltan
- [ ] Mandar bios de autoras
- [ ] Mandar links de prensa (si los tiene)
- [ ] Confirmar/mandar PDF de estatutos
- [ ] Mandar textos para "Publica con nosotras"

---

💬 *"¿Podemos quedar en julio/agosto cuando Melibea esté en Madrid para hacer la sesión de CMS? Así os enseño a las dos juntas cómo actualizar la web vosotras solas. No es nada complicado — con una hora es suficiente."*

✏️ **Anotar:**
- Fecha tentativa para sesión de onboarding CMS con Melibea:

---

---

# BLOQUE 10 — PREGUNTAS QUE PUEDE HACER ANDREA (PREPARADAS)

---

**"¿Cuánto va a costar mantener la web al mes?"**
*"Si no hay ventas: cero euros al mes. El hosting (Netlify) es gratuito. El dominio sale a 1-1,5€ al mes si lo calculas anualmente. Stripe solo cobra cuando hay una venta. El CMS es gratuito. El único coste fijo real es el dominio, una vez al año."*

---

**"¿Podemos cambiar el diseño? Los colores, las fotos, los textos…"**
*"Todo se puede cambiar. Los textos los podéis cambiar vosotras desde el CMS sin pedirme nada. Los colores y el diseño estructural requieren mi intervención — lo hago en la próxima fase de trabajo."*

---

**"¿Se puede ver en el móvil?"**
*"Sí, es responsive — se adapta automáticamente a móvil, tablet y escritorio. Puedo mostrarte cómo se ve en el móvil ahora mismo."* (Usa Chrome → F12 → icono de móvil)

---

**"¿La puede ver alguien ya?"**
*"Sí. La URL que te he enseñado funciona para cualquiera que tenga el enlace. Pero en Google no aparece todavía porque no tiene el dominio definitivo. Cuando pongáis el dominio, en unas semanas empieza a aparecer en los resultados de búsqueda."*

---

**"¿Cómo sé cuánta gente visita la web?"**
*"Podemos añadir Google Analytics o Plausible — son herramientas gratuitas que os dicen cuántas visitas tiene la web, de dónde vienen, qué páginas ven. Lo añado cuando el dominio esté configurado."*

---

**"¿Podemos añadir vídeos?"**
*"Sí. Si tenéis vídeos en YouTube o Vimeo, los incrusto en cualquier página sin problema."*

---

**"¿Qué pasa si la web se rompe?"**
*"Todo el código está guardado en GitHub con historial completo. Si algo falla, puedo restaurar la versión anterior en minutos. Y Netlify tiene un uptime del 99,99% — prácticamente nunca se cae."*

---

**"¿Podemos añadir más libros en el futuro nosotras solas?"**
*"Sí. Exactamente para eso está el CMS. Desde el panel de administración, vosotras añadís un libro nuevo, subís la portada, escribís la sinopsis, y en un minuto está publicado. Sin pedirme nada a mí."*

---

**"¿Tenemos que aprender programación?"**
*"No. Absolutamente nada. El CMS es tan sencillo como rellenar un formulario. Os hago una sesión de una hora y ya sabéis manejarlo todo vosotras."*

---

**"¿Puedes hacer X que no habíamos hablado?"**
*"Depende de lo que sea. Si está dentro del alcance del contrato, lo incluyo sin problema. Si es algo adicional, te hago un presupuesto aparte. Dime qué tienes en mente y te digo en qué categoría cae."*

---

---

# RESUMEN EJECUTIVO — LO QUE HAY QUE LLEVARSE ANOTADO

Al final de la reunión, debes tener respuestas a esto:

| # | Pregunta | Respuesta de Andrea |
|---|---|---|
| 1 | ¿Qué dominio compran? | |
| 2 | ¿Dónde lo compran? | |
| 3 | ¿Quieren email corporativo? ¿Cuáles? | |
| 4 | ¿Email de Andrea para el CMS? | |
| 5 | ¿Email de Melibea para el CMS? | |
| 6 | ¿Cuándo manda las portadas? | |
| 7 | ¿Cuándo manda los dosieres? | |
| 8 | ¿Nombre completo de Melibea? | |
| 9 | ¿Catálogo definitivo (5 libros o más)? | |
| 10 | ¿Quieren publicar estatutos? ¿Cuándo el PDF? | |
| 11 | ¿Quieren sección de prensa? ¿Tienen los enlaces? | |
| 12 | ¿Solo español o también inglés? | |
| 13 | ¿Quieren newsletter? | |
| 14 | ¿Mantienen Playfair Display o cambian tipografía? | |
| 15 | ¿Cuándo crean cuenta Stripe? | |
| 16 | ¿Fecha para sesión de CMS con Melibea? | |

---

---

# ANEXO — DATOS TÉCNICOS PARA CONSULTA RÁPIDA

## URLs actuales
```
Web de producción:  https://steady-scone-31c2af.netlify.app/
Panel CMS:          https://steady-scone-31c2af.netlify.app/admin/ (sin activar)
Repositorio:        https://github.com/MarcosGiannini/lenoy-editorial-web
```

## Stack técnico (en lenguaje no técnico)
- **Astro** — el "motor" que construye la web
- **Tailwind CSS** — el sistema de estilos visuales
- **TypeScript** — el lenguaje de programación tipado
- **Netlify** — donde vive y se publica la web
- **GitHub** — donde se guarda el código y el historial
- **Decap CMS** — el panel de administración para ellas

## Lo que está en verde (funciona al 100%)
- Navegación en escritorio y móvil
- Todas las páginas con su estructura
- Diseño visual con los colores de Lenoy
- Símbolo real del logotipo
- Fotos reales de Melibea y Andrea
- Textos reales de la editorial
- Catálogo de 5 libros reales con 4 autoras reales
- Formulario de contacto en "Publica con nosotras"
- HTTPS (seguridad)
- Deploy automático desde GitHub

## Lo que está en rojo (pendiente de materiales o decisiones)
- Portadas de los libros — pendiente de Andrea
- Dosieres completos — pendiente de Andrea
- Bios de autoras — pendiente de Andrea
- Botones de compra — pendiente de Stripe
- Dominio definitivo — pendiente de decisión
- CMS activado — pendiente de emails de Andrea/Melibea
- Sección de prensa — pendiente de links de Andrea
- Textos de "Publica con nosotras" — pendiente de Andrea
- Estatutos — pendiente de decisión + PDF

---

*Documento preparado por Marcos Giannini — 4 julio 2026*
*Para uso interno. No distribuir.*
