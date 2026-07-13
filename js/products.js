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
    description:"Tela jeans rígida, corte oversize, excelente calidad.", image:null },
  { id:"m-jeans-02", gender:"men", category:"jeans", name:"Doble Cargo Jeans", price:32, currency:"USD",
    description:"Doble cargo pants, tela jeans rígida, corte oversize.", image:null },
  { id:"m-jeans-03", gender:"men", category:"jeans", name:"Cargo Pants", price:30, currency:"USD",
    description:"Cargo pants, tela jeans rígida, corte oversize.", image:null },
  { id:"m-jeans-04", gender:"men", category:"jeans", name:"Baggy Jeans Skater", price:38, currency:"USD",
    description:"Tela jeans rígida, corte oversize, excelente calidad.", image:null },

  /* ================= MEN — SUDADERAS BOXY FIT (Hoodies) ================= */
  { id:"m-hoodie-01", gender:"men", category:"hoodies", name:"Sudadera Boxy Fit", price:34, currency:"USD",
    description:"Hoodie boxy fit, calidad 100% algodón.", image:null },
  { id:"m-hoodie-02", gender:"men", category:"hoodies", name:"Sudadera Boxy Fit Bold Vives", price:34, currency:"USD",
    description:"Hoodie boxy fit Bold Vives, calidad 100% algodón.", image:null },
  { id:"m-hoodie-03", gender:"men", category:"hoodies", name:"Sudadera Boxy Fit Eternals", price:34, currency:"USD",
    description:"Sudadera boxy fit Eternals, calidad 100% algodón.", image:null },
  { id:"m-hoodie-04", gender:"men", category:"hoodies", name:"Sudadera Medio Cierre Racinglion", price:34, currency:"USD",
    description:"Sudadera oversize Racinglion, calidad premium.", image:null },
  { id:"m-hoodie-05", gender:"men", category:"hoodies", name:"Zip Hoodie Legacy", price:34, currency:"USD",
    description:"Zip hoodie boxy fit Legacy, calidad 100% algodón.", image:null },

  /* ================= MEN — CHAQUETAS (Cuero / Impermeable) ================= */
  { id:"m-jacket-01", gender:"men", category:"chaquetas", name:"Jacket Impermeable NTF", price:60, currency:"USD",
    description:"Chaqueta impermeable, calidad premium.", image:null },
  { id:"m-jacket-02", gender:"men", category:"chaquetas", name:"Varsity Jacket Racing", price:45, currency:"USD",
    description:"Varsity jacket, calidad premium.", image:null },
  { id:"m-jacket-03", gender:"men", category:"chaquetas", name:"Chaqueta Racing Cuero", price:45, currency:"USD",
    description:"Chaqueta de cuero, calidad premium.", image:null },
  { id:"m-jacket-04", gender:"men", category:"chaquetas", name:"Recing Jacket Cuero", price:45, currency:"USD",
    description:"Chaqueta de cuero, calidad premium.", image:null },

  /* ================= MEN — CAMISETAS BOXY FIT ================= */
  { id:"m-tee-01", gender:"men", category:"camisetas-boxy-fit", name:"Camiseta Boxy Fit Destino", price:24, currency:"USD",
    description:"Camiseta boxy fit, tela 100% algodón.", image:null },
  { id:"m-tee-02", gender:"men", category:"camisetas-boxy-fit", name:"Camiseta Boxy Fit Tribal", price:24, currency:"USD",
    description:"Camiseta boxy fit, tela 100% algodón.", image:null },
  { id:"m-tee-03", gender:"men", category:"camisetas-boxy-fit", name:"Camiseta Boxy Fit Tribal (variante)", price:24, currency:"USD",
    description:"Camiseta boxy fit, tela 100% algodón, otra combinación de color.", image:null },
  { id:"m-tee-04", gender:"men", category:"camisetas-boxy-fit", name:"Camiseta Boxy Fit Restlees", price:24, currency:"USD",
    description:"Camiseta boxy fit, tela 100% algodón.", image:null },
  { id:"m-tee-05", gender:"men", category:"camisetas-boxy-fit", name:"Camiseta Boxy Fit Sensitive", price:24, currency:"USD",
    description:"Camiseta boxy fit, tela 100% algodón.", image:null },
  { id:"m-tee-06", gender:"men", category:"camisetas-boxy-fit", name:"Camiseta Boxy Fit Sensitive (variante)", price:24, currency:"USD",
    description:"Camiseta boxy fit, tela 100% algodón, otra combinación de color.", image:null },
  { id:"m-tee-07", gender:"men", category:"camisetas-boxy-fit", name:"Camiseta Boxy Fit Softly Forever", price:24, currency:"USD",
    description:"Camiseta boxy fit, tela 100% algodón.", image:null },
  { id:"m-tee-08", gender:"men", category:"camisetas-boxy-fit", name:"Camiseta Boxy Fit Make Dreams", price:24, currency:"USD",
    description:"Camiseta boxy fit, tela 100% algodón.", image:null },
  { id:"m-tee-09", gender:"men", category:"camisetas-boxy-fit", name:"Camiseta Boxy Fit Remsides", price:24, currency:"USD",
    description:"Camiseta boxy fit, tela 100% algodón.", image:null },

  /* ================= MEN — CAMISETAS OVERSIZE ================= */
  { id:"m-oversize-01", gender:"men", category:"camisetas-oversize", name:"Camiseta Oversize Scareface", price:22, currency:"USD",
    description:"Camiseta estilo oversize, tela 100% algodón.", image:null },
  { id:"m-oversize-02", gender:"men", category:"camisetas-oversize", name:"Camiseta Oversize Eminem", price:22, currency:"USD",
    description:"Camiseta estilo oversize, tela 100% algodón.", image:null },

  /* ================= WOMEN — pendiente de catálogo real =================
     Las 9 categorías ya están registradas (para que la navegación y las
     páginas existan y se vean bien), pero sin productos todavía.
     En cuanto lleguen nombres/precios/fotos reales, se agregan aquí
     con el mismo formato de arriba y aparecen automáticamente. */

];

/* Catálogo de categorías por género — controla qué páginas/links existen */
const CATEGORIES = {
  men: [
    { slug:"jeans", name:"Jeans", description:"Cortes cargo y baggy con caída perfecta." },
    { slug:"hoodies", name:"Sudaderas Boxy Fit", description:"Hoodies oversize, 100% algodón." },
    { slug:"chaquetas", name:"Chaquetas", description:"Cuero e impermeables, calidad premium." },
    { slug:"camisetas-boxy-fit", name:"Camisetas Boxy Fit", description:"Básicos con corte boxy y estampados propios." },
    { slug:"camisetas-oversize", name:"Camisetas Oversize", description:"Estampados oversize de edición limitada." },
  ],
  women: [
    { slug:"jeans", name:"Jeans", description:"Cortes que arman cualquier outfit." },
    { slug:"blusas", name:"Blusas", description:"Básicos femeninos para el día a día." },
    { slug:"corset", name:"Corset", description:"Piezas estructuradas, actitud total." },
    { slug:"chaquetas-hoodies", name:"Chaquetas y Hoodies", description:"Abrigo con identidad urbana." },
    { slug:"faldas", name:"Faldas", description:"Cortes urbanos con actitud." },
    { slug:"bodys", name:"Bodys", description:"Piezas ajustadas para looks versátiles." },
    { slug:"gym", name:"Gym", description:"Ropa deportiva con estilo urbano." },
    { slug:"conjuntos", name:"Conjuntos", description:"Sets completos, un solo look." },
    { slug:"vestidos", name:"Vestidos", description:"Para cualquier ocasión, con sello Gravity." },
  ]
};
