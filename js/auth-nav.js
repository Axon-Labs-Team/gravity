/* ============================================================
   GRAVITY STREETWEAR — auth-nav.js
   Se incluye en TODAS las páginas. Actualiza el link de la nav
   ("Iniciar sesión" ⇄ nombre del cliente) según el estado de sesión.
   No hace nada más — el resto de la lógica de cuentas vive en
   auth-pages.js, que solo cargan login/registro/recuperar/cuenta.
   ============================================================ */
import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const link = document.getElementById("nav-account");

onAuthStateChanged(auth, function(user){
  if(!link) return;
  if(user){
    var name = user.displayName ? user.displayName.split(" ")[0] : "Mi cuenta";
    link.textContent = name;
    link.setAttribute("href", "cuenta.html");
  } else {
    link.textContent = "Iniciar sesión";
    link.setAttribute("href", "login.html");
  }
});
