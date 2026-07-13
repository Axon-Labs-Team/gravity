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

  /* ================= WOMEN — JEANS (catálogo real, lote 1/varios) ================= */
  { id:"w-jeans-01", gender:"women", category:"jeans", name:"Baggy a la cadera", price:40, currency:"USD",
    description:"Jean baggy de tiro a la cadera, varios tonos de mezclilla.",
    colors:["Celeste","Azul medio","Azul oscuro","Negro"], sizes:"8/10/12/14",
    image:"assets/products/women-jeans-baggy-cadera.png" },

  { id:"w-jeans-02", gender:"women", category:"jeans", name:"Baggy a la Cadera con Bolsillo", price:40, currency:"USD",
    description:"Jean baggy a la cadera con bolsillo trasero con solapa.",
    colors:["Gris","Negro","Azul","Gris oliva"], sizes:"4/6/8/10/12/14",
    image:"assets/products/women-jeans-baggy-cadera-bolsillo.jpg" },

  { id:"w-jeans-03", gender:"women", category:"jeans", name:"Baggy Fleco", price:38, currency:"USD",
    description:"Jean baggy con detalle de flecos/hilos en toda la pierna.",
    colors:["Azul claro","Negro","Gris oscuro","Gris veteado"], sizes:"6/8/10/12/14/16 · (cintura 24-36 cm)",
    image:"assets/products/women-jeans-baggy-fleco.jpg" },

  { id:"w-jeans-04", gender:"women", category:"jeans", name:"Baggy Brillos", price:40, currency:"USD",
    description:"Jean baggy tiro bajo con brillos/pedrería en toda la pieza.",
    colors:["Celeste"], sizes:"4/6/8/10/12",
    image:"assets/products/women-jeans-baggy-brillos.jpg" },

  { id:"w-jeans-05", gender:"women", category:"jeans", name:"Baggy Brillos Skater", price:40, currency:"USD",
    description:"Jean baggy corte skater con brillos/pedrería.",
    colors:["Azul"], sizes:"10/12/14",
    image:"assets/products/women-jeans-baggy-brillos-skater.jpg" },

  { id:"w-jeans-06", gender:"women", category:"jeans", name:"Baggy Barrel", price:40, currency:"USD",
    description:"Jean baggy corte barrel (globo), varios lavados.",
    colors:["Azul lavado (10/12/14)","Azul óxido (10/12/14)","Negro (6/8/10)","Gris (6/8/10)"], sizes:"Ver tallas por color",
    image:"assets/products/women-jeans-baggy-barrel.jpg" },

  { id:"w-jeans-07", gender:"women", category:"jeans", name:"Baggy Skater", price:38, currency:"USD",
    description:"Jean baggy corte skater, varios lavados y colores.",
    colors:["Gris claro","Madera","Azul verdoso","Gris"], sizes:"4/6/8/10/12/14/16 (Madera solo talla 12)",
    image:"assets/products/women-jeans-baggy-skater.jpg" },
    
  { id:"w-jeans-08", gender:"women", category:"jeans", name:"Baggy Cargo", price:40, currency:"USD",
    description:"Jean baggy corte Cargo.",
    colors:["Negro","Maiz"], sizes:"4/6/8/10/12",
    image:"assets/products/women-jeans-baggy-cargo.jpg" },

  { id:"w-jeans-09", gender:"women", category:"jeans", name:"Jeans Low Rise", price:35, currency:"USD",
    description:"Jeans Low Rise con varias tallas y colores",
    colors:["Azul marino (8,10)","Negro (6,8,10)", "Azul cielo (8,10)"], sizes:"Ver tallas por color",
    image:"assets/products/women-jeans-low-rise.jpg" },

  { id:"w-jeans-10", gender:"women", category:"jeans", name:"Baggy Cargo Estrella", price:40, currency:"USD",
    description:"Jean baggy corte de cargo estrella, varios lavados y colores.",
    colors:["Negro (4,6,8)","Gris Claro (4,6,8,10)", "Azul cielo (4,6,8,10)"], sizes:"Ver tallas por color",
    image:"assets/products/women-jeans-baggy-cargo-estrella.jpg" }, 

  { id:"w-jeans-11", gender:"women", category:"jeans", name:"Baggy Star", price:40, currency:"USD",
    description:"Jean baggy corte estrella, varios lavados y colores.",
    colors:["Blanco (10,12)","Negro (4,6,8,10,12)"], sizes:"Ver tallas por color",
    image:"assets/products/women-jeans-baggy-estrella.jpg" },

  { id:"w-jeans-12", gender:"women", category:"jeans", name:"Wide Ballow", price:38, currency:"USD",
    description:"Jean wide ballow, varios lavados y colores.",
    colors:["Azul"], sizes:"4/6/8/10/12",
    image:"assets/products/women-jeans-wide-ballow.jpg" },

  { id:"w-jeans-13", gender:"women", category:"jeans", name:"Flare Jeans Cruz", price:35, currency:"USD",
    description:"Jean Flare Cruz, varios lavados y colores.",
    colors:["Nergo, Azul, Verde Agua"], sizes:"6/8/10/12/14",
    image:"assets/products/women-jeans-flare-cruz.jpg" },

  { id:"w-jeans-14", gender:"women", category:"jeans", name:"Flared Low Rise", price:35, currency:"USD",
    description:"Jean Flare Low Rise, varios lavados y colores.",
    colors:["Nrgo, Azul Palido, Gris Claro"], sizes:"6/8/10/12",
    image:"assets/products/women-jeans-flare-low-rise.jpg" },

  /* ================= WOMEN — otras categorías: pendiente de catálogo real ================= */

];

/* Catálogo de categorías por género — controla qué páginas/links existen */
const CATEGORIES = {
  men: [
    { slug:"jeans", name:"Jeans", description:"Cortes cargo y baggy con caída perfecta.", cover:null },
    { slug:"hoodies", name:"Sudaderas Boxy Fit", description:"Hoodies oversize, 100% algodón.", cover:null },
    { slug:"chaquetas", name:"Chaquetas", description:"Cuero e impermeables, calidad premium.", cover:null },
    { slug:"camisetas-boxy-fit", name:"Camisetas Boxy Fit", description:"Básicos con corte boxy y estampados propios.", cover:null },
    { slug:"camisetas-oversize", name:"Camisetas Oversize", description:"Estampados oversize de edición limitada.", cover:null },
  ],
  women: [
    { slug:"jeans", name:"Jeans", description:"Cortes que arman cualquier outfit.", cover:"assets/covers/women-jeans-cover.jpg" },
    { slug:"blusas", name:"Blusas", description:"Básicos femeninos para el día a día.", cover:"assets/covers/women-blusas-cover.jpg" },
    { slug:"corset", name:"Corset", description:"Piezas estructuradas, actitud total.", cover:null },
    { slug:"chaquetas-hoodies", name:"Chaquetas y Hoodies", description:"Abrigo con identidad urbana.", cover:null },
    { slug:"faldas", name:"Faldas", description:"Cortes urbanos con actitud.", cover:null },
    { slug:"bodys", name:"Bodys", description:"Piezas ajustadas para looks versátiles.", cover:null },
    { slug:"gym", name:"Gym", description:"Ropa deportiva con estilo urbano.", cover:null },
    { slug:"conjuntos", name:"Conjuntos", description:"Sets completos, un solo look.", cover:null },
    { slug:"vestidos", name:"Vestidos", description:"Para cualquier ocasión, con sello Gravity.", cover:null },
  ]
};
