# Protocolo de Rehidratación — Editorial Lenoy

> Usar al inicio de CADA nueva sesión de chat con GitHub Copilot.
> Copia el bloque de abajo y pégalo como primer mensaje del chat.
> Última actualización: **30 agosto 2026.**

---

## Por qué existe este protocolo

Cada sesión de chat con un agente IA es independiente — no recuerda la sesión anterior.
Sin rehidratación, el agente puede proponer arquitecturas erróneas, repetir trabajo ya hecho o peor: deshacer cambios que funcionan.

Este protocolo obliga al agente a leer los documentos canónicos del proyecto antes de tocar nada.

---

## Antes de copiar el bloque

> Si es la **primera vez que ejecutas este proyecto en este PC** (o borraste `node_modules`):
>
> ```bash
> cd lenoy-editorial-web
> npm install        # instala Astro y el resto de dependencias
> npm run dev        # http://localhost:4321
> ```
>
> Si `npm run dev` da `"astro" no se reconoce`: es que falta este paso. No es un error de código.

---

## Bloque a copiar y pegar

```
NUEVA SESIÓN — EDITORIAL LENOY (REHIDRATACIÓN TOTAL DE CONTEXTO)

El chat anterior quedó inválido por límite interno del agente.
El proyecto NO está roto. El estado está documentado.

PROTOCOLO OBLIGATORIO (NO SALTARSE NADA):

PASO 1
Lee COMPLETAMENTE el archivo:
→ PROMPT_MAESTRO_EDITORIAL_LENOY.md

PASO 2
Lee COMPLETAMENTE el archivo:
→ ROADMAP.md

PASO 3
Lee COMPLETAMENTE el archivo:
→ PENDIENTES_ANDREA.md

PASO 4
Confirma explícitamente el estado actual SIN ejecutar nada:

Formato de respuesta OBLIGATORIO (copiar exacto):

---
✅ He leído PROMPT_MAESTRO_EDITORIAL_LENOY.md
✅ He leído ROADMAP.md
✅ He leído PENDIENTES_ANDREA.md

Estado actual del proyecto:
- Último hito: portadas frontales correctas de los 5 libros integradas ✅
- Deploy activo: https://steady-scone-31c2af.netlify.app/
- Rama activa: main (limpia, sincronizada)
- Build: ✅ 19 páginas estáticas, sin errores
- Datos reales integrados: 5 libros, 4 autorías, 5 portadas, textos institucionales, estatutos, prensa, legal/RGPD, logo y paleta terracota + índigo
- Únicos marcadores [PENDIENTE] en src/: sinopsis de Maleidra, Primer Certamen 25N y Voces diversas
- Material localizado: las tres cubiertas de imprenta contienen textos de contraportada aprovechables; falta confirmación editorial de Marcos
- Pendiente confirmar: Stripe, dominio/email corporativo y onboarding/accesos CMS

Siguiente paso permitido según ROADMAP:
→ Confirmar y transcribir las tres sinopsis; después ejecutar build y revisión visual

¿Confirmas qué texto de contraportada debe publicarse en cada ficha?
---

REGLAS ABSOLUTAS:
- NO analices el proyecto desde cero.
- NO repropongas arquitectura ni stack.
- NO toques código todavía.
- NO avances al siguiente paso sin que Marcos lo confirme explícitamente.
- Seguir PROMPT_MAESTRO + ROADMAP como fuente de verdad canónica.
```

---

## Cuándo usarlo

- Al abrir una sesión nueva tras cerrar el navegador o el Codespace
- Cuando el agente empieza a proponer cosas que ya están hechas
- Cuando el agente dice "no tengo contexto de lo anterior"
- Al retomar el proyecto después de días sin trabajar en él
- Cuando el agente propone cambiar el stack, la arquitectura o el CMS

---

## Documentos canónicos (leer en este orden)

| Prioridad | Fichero | Contenido |
|-----------|---------|-----------|
| 1 | `PROMPT_MAESTRO_EDITORIAL_LENOY.md` | Cliente, stack, paleta, seguridad, reglas de trabajo, protocolo git |
| 2 | `ROADMAP.md` | Pasos completados, en progreso, pendientes, bloqueantes externos |
| 3 | `PENDIENTES_ANDREA.md` | Lista única de datos, textos, assets y decisiones que faltan pedir a Andrea/Melibea |
| 4 | `README.md` | Stack técnico, arranque local, estructura de carpetas, variables de entorno |

---

## Estado técnico de referencia (actualizar manualmente si cambia)

> **Estado verificado el 30 de agosto de 2026:** sitio desplegado en Netlify, catálogo real casi completo y solo tres sinopsis pendientes de confirmación editorial.

| Elemento | Valor |
|---|---|
| Framework | Astro 5.0 — salida estática, sin SSR |
| CSS | Tailwind CSS 3.4 — `darkMode: 'class'` activado |
| Tipado | TypeScript 5.x |
| Datos | Astro Content Collections (JSON para libros y autoras, Markdown para blog) |
| CMS | Decap CMS v3 en `/admin/` — backend `git-gateway`, rama `main` |
| Deploy | Netlify: `https://steady-scone-31c2af.netlify.app/` |
| Dev server | `npm run dev` → puerto 4321 |

### Paleta de colores (NO cambiar sin consultar a Andrea)

| Token | Uso |
|---|---|
| `terracotta-500` | Color principal, CTAs, precios |
| `forest-700` | Fondos de secciones hero, footer |
| `cream-100` / `cream-200` | Fondos claros, fondos de tarjetas |
| `sunset-500` | Acento secundario, badges |
| `#1a1510` | Fondo modo oscuro (marrón muy oscuro, no negro puro) |

### Rutas del sitio

| URL | Archivo |
|---|---|
| `/` | `src/pages/index.astro` |
| `/que-es-lenoy` | `src/pages/que-es-lenoy.astro` |
| `/editorial-lenoy` | `src/pages/editorial-lenoy.astro` |
| `/publicaciones` | `src/pages/publicaciones/index.astro` |
| `/publicaciones/[id]` | `src/pages/publicaciones/[id].astro` |
| `/publica-con-nosotras` | `src/pages/publica-con-nosotras.astro` |
| `/donde-comprar` | `src/pages/donde-comprar.astro` |
| `/blog` | `src/pages/blog/index.astro` |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` |
| `/gracias` | `src/pages/gracias.astro` |
| `/admin/` | `public/admin/index.html` — Decap CMS |

### Datos de contenido (Content Collections)

| Carpeta | Tipo | Archivos |
|---|---|---|
| `src/content/books/` | JSON | 5 libros |
| `src/content/authors/` | JSON | 4 autorías |
| `src/content/blog/` | Markdown | 3 artículos |
| `src/content/config.ts` | Schema Zod | Validación de colecciones |

> **Contenido actual:** los datos reales y las imágenes principales están integrados. Solo quedan las tres sinopsis indicadas en `PENDIENTES_ANDREA.md`.

---

## Bloqueantes externos (estado a 5 mayo 2026)

Estos ítems están **pendientes de Andrea** y no pueden avanzarse hasta que los facilite:

- 🔴 Portadas reales de los libros (imágenes)
- 🔴 Textos reales de las páginas (todos los `[PENDIENTE]`)
- 🔴 Account de Stripe (para activar los botones de compra)
- 🔴 Dominio final (`editoriallenoy.com` o similar)
- 🟡 Cuenta de Netlify (necesaria para Netlify Identity + CMS en producción)

El detalle completo y actualizado está en `PENDIENTES_ANDREA.md`. Si Andrea manda información nueva o aparece un bloqueo nuevo, actualizar ese documento en el mismo cambio.

La estrategia acordada es: **construir la casa vacía → enseñar CMS a Andrea → Andrea hace la mudanza de contenidos**.

---

## ⚠️ Identidad visual — no tocar sin consultar el manual

> Añadido 2026-05-13 tras auditoría visual de la web vs. manual de marca.

**Antes de modificar tipografía, logo, símbolo, favicon, colores de marca o sistema de cubiertas:**
1. Leer el resumen operativo del manual en AI CORE:
   `dominios/desarrollo/proyectos/lenoy/recursos/identidad/manual-identidad-lenoy-resumen-operativo.md`
2. Consultar sección 9 de `PENDIENTES_ANDREA.md` para saber qué decisiones siguen sin tomar.

**Discrepancias activas (2026-05-13):**
- La web usa Playfair Display; el manual especifica Source Serif Pro. Pendiente decisión de Andrea.
- No existe el símbolo vectorial real de Lenoy en el repo. Solo hay un placeholder "L" en círculo.
- Melibea aparece segunda en `/que-es-lenoy` — debe ser primera (regla permanente de Andrea).

**No cambiar nada de esto sin confirmación de Marcos y Andrea.**

---

## En caso de duda sobre el trabajo hecho

Ejecutar en el terminal del Codespace:

```bash
# Ver todos los commits desde el inicio
git log --oneline

# Ver qué archivos toca el proyecto
find src -name "*.astro" | sort

# Verificar que el build funciona
npm run build
```
