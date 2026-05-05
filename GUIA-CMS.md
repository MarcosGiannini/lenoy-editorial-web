# Guía de uso del panel de administración
## Editorial Lenoy — Para Andrea y Melibea

> Esta guía explica cómo añadir libros, escribir artículos y gestionar las autoras sin tocar código.
> Si algo no funciona o tienes dudas, escríbele a Marcos.

---

## ¿Qué es el panel de administración?

Es una página web privada (solo para vosotras) donde podéis:
- ✅ Añadir libros nuevos al catálogo
- ✅ Subir las portadas de los libros
- ✅ Escribir y publicar artículos en el blog
- ✅ Añadir o editar fichas de autoras
- ✅ Cambiar precios, sinopsis, géneros…

Cuando guardáis un cambio en el panel, **se actualiza automáticamente en la web** en unos minutos. Sin necesitar a Marcos.

---

## Cómo entrar al panel

1. Abre el navegador y ve a:
   ```
   https://[dominio-de-la-web]/admin/
   ```
   *(Marcos os dará la dirección exacta cuando la web esté publicada)*

2. Haz clic en **"Iniciar sesión con Netlify Identity"**

3. Introduce tu email y contraseña
   *(Marcos os enviará la invitación por email la primera vez)*

4. Ya estás dentro. Verás tres secciones en el menú de la izquierda:
   - 📚 **Libros**
   - ✍️ **Autoras**
   - 📝 **Blog**

---

## Cómo añadir un libro nuevo

1. Haz clic en **"📚 Libros"** en el menú izquierdo
2. Haz clic en el botón **"Nuevo Libro"** (arriba a la derecha)
3. Rellena los campos:

| Campo | Qué escribir | Ejemplo |
|---|---|---|
| **Título** | El título exacto del libro | `Lo rarito que eres` |
| **Autora** | Nombre completo de la autora | `Amina Nse Obiang` |
| **Sinopsis** | Descripción del libro (2-4 párrafos) | *(el texto de la contraportada)* |
| **Portada** | Sube la imagen JPG o PNG | *(mínimo 600×900 px)* |
| **Año** | Año de publicación | `2024` |
| **Categoría** | Elige una opción | `Obra propia` o `Colaboración con ONG` |
| **Géneros** | Añade uno a uno con el botón "+" | `Feminismo`, `LGTB+`… |
| **Precio** | Precio en euros (sin el símbolo) | `18.99` |
| **Enlace Stripe** | Lo da Marcos cuando esté configurado | *(dejar vacío hasta entonces)* |
| **Destacado del mes** | Actívalo si quieres que aparezca en la portada | Solo uno a la vez |

4. Cuando hayas rellenado todo, haz clic en **"Publicar"** (arriba a la derecha)
5. En unos minutos aparecerá en la web ✅

> **¿Cómo sé que se guardó bien?** Recibirás un email de GitHub diciendo que hay un "commit" nuevo. Es normal, no hay que hacer nada.

---

## Cómo editar un libro existente

1. Haz clic en **"📚 Libros"**
2. Verás la lista de todos los libros. Haz clic en el que quieres editar
3. Cambia lo que necesites
4. Haz clic en **"Publicar"** para guardar los cambios

---

## Cómo escribir un artículo de blog

1. Haz clic en **"📝 Blog"** en el menú izquierdo
2. Haz clic en **"Nuevo Artículo"**
3. Rellena los campos:

| Campo | Qué escribir |
|---|---|
| **Título** | El título del artículo |
| **Extracto** | Un resumen de 2-3 frases (aparece en la lista del blog) |
| **Fecha** | La fecha de publicación |
| **Autora** | Tu nombre o "Equipo Editorial Lenoy" |
| **Categoría** | Una palabra: `Literatura`, `Feminismo`, `Eventos`… |
| **Etiquetas** | Palabras clave una a una |
| **Imagen de portada** | Sube una imagen para el artículo |
| **Contenido** | El texto completo del artículo |

4. Para escribir el contenido tienes una barra de herramientas:
   - **N** = texto normal
   - **B** = negrita
   - *I* = cursiva
   - Puedes añadir subtítulos, listas, enlaces…
5. Haz clic en **"Publicar"** cuando esté listo

---

## Cómo añadir o editar una autora

1. Haz clic en **"✍️ Autoras"**
2. Para editar una existente: haz clic en su nombre
3. Para añadir una nueva: haz clic en **"Nueva Autora"**
4. Rellena los campos:

| Campo | Qué escribir |
|---|---|
| **Nombre completo** | Nombre de la autora |
| **Biografía** | Bio de 2-4 frases |
| **Foto** | Sube una foto (cuadrada si es posible) |
| **Ciudad de origen** | Ej: `Malabo, Guinea Ecuatorial` |
| **IDs de sus libros** | El "código" del libro (Marcos os indica cuál es) |
| **Redes sociales** | Sus perfiles de Twitter, Instagram o web |

---

## Cómo subir imágenes (portadas, fotos…)

En cualquier campo de imagen:
1. Haz clic en el área de imagen o en el botón **"Subir imagen"**
2. Elige el archivo de tu ordenador
3. Se sube automáticamente

**Formatos válidos:** JPG, PNG, WebP
**Tamaño mínimo para portadas:** 600×900 píxeles
**Tamaño mínimo para fotos de autora:** 400×400 píxeles

---

## Preguntas frecuentes

**¿Puedo borrar algo?**
Sí, pero con cuidado. Hay un botón de borrar en cada elemento. Si borras un libro, desaparece de la web. Si te equivocas, avisa a Marcos y lo recuperamos.

**¿Puedo guardar un borrador sin publicar?**
Sí. En vez de "Publicar", haz clic en la flecha junto al botón y elige **"Guardar como borrador"**. El artículo no aparecerá en la web hasta que lo publiques.

**¿Qué pasa si cierro la ventana sin guardar?**
Se pierden los cambios. Guarda siempre antes de cerrar.

**¿Puedo acceder desde el móvil?**
Sí, el panel funciona en el navegador del móvil, aunque es más cómodo desde el ordenador.

**Algo no funciona / tengo una duda**
Escríbele a Marcos por WhatsApp con una captura de pantalla de lo que ves. Lo resuelve en minutos.

---

*Guía preparada por Marcos Giannini — Mayo 2026*
*Si algo no está claro o falta algún paso, dímelo y lo actualizo.*
