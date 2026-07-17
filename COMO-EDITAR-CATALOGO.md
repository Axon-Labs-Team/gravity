# Cómo editar el catálogo de Gravity tú mismo

Todo el catálogo vive en **un solo archivo**: `js/products.js`.
No necesitas tocar ningún HTML para agregar, editar o quitar un producto.

---

## 1. Agregar un producto a una categoría que YA existe

Abre `js/products.js` con cualquier editor de texto (Bloc de notas,
VS Code, lo que uses). Vas a ver bloques como este:

```js
{ id:"w-jeans-01", gender:"women", category:"jeans", name:"Baggy a la Cadera", price:40, currency:"USD",
  description:"Jean baggy de tiro a la cadera, varios tonos de mezclilla.",
  colors:["Celeste","Azul medio","Azul oscuro","Negro"], sizes:"8/10/12/14",
  image:"assets/products/women-jeans-baggy-cadera.jpg" },
```

Para agregar uno nuevo:

1. **Copia un bloque completo** (desde `{` hasta `},`) de la misma categoría.
2. Pégalo justo debajo, dentro del mismo arreglo `PRODUCTS`.
3. Cambia estos campos:

| Campo | Qué poner |
|---|---|
| `id` | Un texto único, sin espacios (ej. `"w-jeans-08"`). Solo tiene que no repetirse. |
| `gender` | `"men"` o `"women"` — no cambies esto salvo que el producto sea del otro lado. |
| `category` | El slug de la categoría (ver tabla más abajo). Debe ser EXACTO. |
| `name` | Nombre del producto, como quieres que se vea. |
| `price` | Solo el número, sin `$` (ej. `35`). |
| `currency` | `"USD"` |
| `description` | Una o dos frases cortas. |
| `colors` | Lista de colores entre corchetes: `["Negro","Blanco"]`. Si no aplica, borra esta línea completa. |
| `sizes` | Texto libre, ej. `"S/M/L/XL"` o `"6/8/10/12"`. |
| `image` | Ruta del archivo de foto (ver sección 3). Si todavía no tienes la foto, pon `null` (sin comillas) y la tarjeta va a mostrar "Foto próximamente" en vez de romperse. |

4. **Revisa que cada bloque termine en coma `,`** (menos el último de todos, ese no lleva coma).
5. Guarda el archivo. Listo — no hay que tocar nada más, se ve reflejado solo al recargar la página.

### Slugs de categoría que ya existen

**Men:** `jeans`, `hoodies`, `chaquetas`, `camisetas-boxy-fit`, `camisetas-oversize`

**Women:** `jeans`, `blusas`, `corset`, `chaquetas-hoodies`, `faldas`, `bodys`, `gym`, `conjuntos`, `vestidos`

---

## 2. Agregar una categoría NUEVA (que no existe todavía)

Esto es un poco más de trabajo porque cada categoría tiene su propia
página. Son 2 pasos:

**Paso A — Crear el archivo de la página**
1. Ve a la carpeta del sitio y busca un archivo parecido, por ejemplo
   `categoria-women-jeans.html`.
2. Duplícalo (copiar y pegar) y renombra la copia con el slug nuevo, ej.
   `categoria-women-accesorios.html`.
3. Abre el archivo nuevo y busca esta línea, casi al final:
   ```html
   <script>GravityCatalog.renderProductGrid('#product-grid', 'women', 'jeans');</script>
   ```
   Cambia `'jeans'` por el slug de tu categoría nueva, ej. `'accesorios'`.
4. Busca también el título y la descripción arriba del todo (`<h1>Jeans</h1>` y el texto de abajo) y cámbialos por el nombre real de la categoría nueva.

**Paso B — Registrar la categoría en `js/products.js`**
Busca el objeto `CATEGORIES` casi al final del archivo y agrega una línea
dentro de `men` o `women`:
```js
{ slug:"accesorios", name:"Accesorios", description:"Gorras, cinturones y más." },
```
El `slug` debe ser exactamente el mismo que usaste en el nombre del archivo HTML.

Con esto, la categoría nueva ya aparece automáticamente en `men.html` o
`women.html`, y puedes empezar a agregarle productos siguiendo la
sección 1.

---

## 3. Agregar fotos

1. Guarda la foto dentro de la carpeta `assets/products/`.
2. Usa un nombre sin espacios ni tildes, ej. `women-blusas-crop-negro.jpg`.
3. En el producto, pon en `image` la ruta completa:
   ```js
   image:"assets/products/women-blusas-crop-negro.jpg"
   ```
4. Si un producto todavía no tiene foto, escribe `image:null` — la tarjeta
   va a mostrar automáticamente "Foto próximamente" en vez de un ícono roto.

**Tip:** entre más limpia la foto (sin texto de precio pegado encima,
buena luz, fondo simple), mejor se va a ver la tarjeta.

---

## 3.1 Agregar una portada (cover) a una categoría

Cada categoría puede tener una foto grande de fondo arriba del todo,
detrás del título (como "CATÁLOGO DE JEANS 2025" que ya usé de ejemplo).

1. Guarda la imagen en `assets/covers/`, con un nombre tipo
   `women-blusas-cover.jpg`.
2. Abre `js/products.js`, busca el objeto `CATEGORIES` casi al final,
   y en la categoría que quieras cambia `cover:null` por la ruta:
   ```js
   { slug:"blusas", name:"Blusas", description:"...", cover:"assets/covers/women-blusas-cover.jpg" },
   ```
3. Guarda. La portada aparece sola la próxima vez que abras esa página
   de categoría — no hay que tocar el HTML.

Si `cover` está en `null`, la página se ve con el fondo negro normal,
sin foto — no se rompe nada.

---

## 4. Cambiar WhatsApp, redes sociales o ubicación

Todo eso vive en `js/config.js`, es un archivo mucho más corto. Cambia el
valor entre comillas de lo que necesites actualizar:

```js
WHATSAPP_MEN: "593987824703",
WHATSAPP_WOMEN: "593969055485",
INSTAGRAM_MEN: "https://www.instagram.com/gravity.streetwear.ec",
...
```

---

## 5. Errores comunes (y cómo evitarlos)

- **Olvidar una coma** entre productos → el catálogo entero deja de cargar. Si eso pasa, revisa el último producto que agregaste.
- **Slug de categoría mal escrito** (ej. `"Jeans"` con mayúscula en vez de `"jeans"`) → el producto no aparece en ninguna página.
- **Comillas curvas** (`"` en vez de `"`) si copias texto desde Word o WhatsApp Web → causa error. Escribe directo en el editor, o pega y luego borra/vuelve a escribir las comillas.

Si algo se rompe, no pasa nada — mándame el archivo y lo reviso.
