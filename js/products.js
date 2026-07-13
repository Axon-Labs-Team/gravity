/* ============================================================
   GRAVITY STREETWEAR — products.js
   Fuente única de datos del catálogo. Cada página de categoría
   filtra este arreglo por "gender" + "category".

   Para AGREGAR o EDITAR un producto: solo se toca este archivo,
   ninguna página HTML necesita cambiar.

   image: null  -> la tarjeta muestra un placeholder "Foto próximamente"
                   en vez de una imagen rota. Reemplazar por la ruta
                   real (ej. "assets/products/men-cargo-jeans-utility.jpg")
                   en cuanto llegue la foto en buena resolución.
   ============================================================ */

const PRODUCTS = [

  /* ================= MEN — JEANS / CARGO ================= */
  { id:"m-jeans-01", gender:"men", category:"jeans", name:"Cargo Jeans Utility", price:45, currency:"USD",
    description:"Tela jeans rígida, corte oversize, excelente calidad.",
    image:"assets/products/jeans"},

  /* ================= WOMEN — JEANS (catálogo real, lote 1/varios) ================= */
  { id:"w-jeans-01", gender:"women", category:"jeans", name:"Baggy a la Cadera", price:40, currency:"USD",
    description:"Jean baggy de tiro a la cadera, varios tonos de mezclilla.",
    colors:["Celeste","Azul medio","Azul oscuro","Negro"], sizes:"8/10/12/14",
    image:"assets/products/women-jeans-baggy-cadera.jpg" },

  /* ================= WOMEN — otras categorías: pendiente de catálogo real ================= */

];

/* Catálogo de categorías por género — controla qué páginas/links existen */
const CATEGORIES = {
  men: [
    { slug:"jeans", name:"Jeans", description:"Cortes cargo y baggy con caída perfecta." },
  ],
  women: [
    { slug:"jeans", name:"Jeans", description:"Cortes que arman cualquier outfit." },
  ]
};
