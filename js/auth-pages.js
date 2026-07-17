/* ============================================================
   GRAVITY STREETWEAR — auth-pages.js
   Lógica de registro, login, recuperar contraseña y "Mi cuenta".
   Solo se carga en esas 4 páginas (no en el resto del sitio).
   ============================================================ */
import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

function showBox(el, msg){
  if(!el) return;
  el.textContent = msg;
  el.style.display = "block";
}
function hideBox(el){
  if(!el) return;
  el.style.display = "none";
}

/* ---------- Registro ---------- */
var regForm = document.getElementById("register-form");
if(regForm){
  var regError = document.getElementById("register-error");
  var regBtn = document.getElementById("register-submit");
  regForm.addEventListener("submit", function(e){
    e.preventDefault();
    hideBox(regError);
    var name = document.getElementById("reg-name").value.trim();
    var email = document.getElementById("reg-email").value.trim();
    var pass = document.getElementById("reg-pass").value;
    var pass2 = document.getElementById("reg-pass2").value;

    if(pass !== pass2){
      showBox(regError, "Las contraseñas no coinciden.");
      return;
    }
    if(pass.length < 6){
      showBox(regError, "La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    regBtn.disabled = true;
    regBtn.textContent = "Creando cuenta...";

    createUserWithEmailAndPassword(auth, email, pass)
      .then(function(cred){
        return updateProfile(cred.user, { displayName: name }).then(function(){
          return setDoc(doc(db, "users", cred.user.uid), {
            displayName: name,
            email: email,
            createdAt: serverTimestamp()
          });
        });
      })
      .then(function(){
        window.location.href = "cuenta.html";
      })
      .catch(function(err){
        console.error(err);
        var msg = "No se pudo crear la cuenta.";
        if(err.code === "auth/email-already-in-use") msg = "Ese correo ya está registrado. Intenta iniciar sesión.";
        if(err.code === "auth/invalid-email") msg = "El correo no es válido.";
        showBox(regError, msg);
      })
      .finally(function(){
        regBtn.disabled = false;
        regBtn.textContent = "Crear cuenta";
      });
  });
}

/* ---------- Login ---------- */
var loginForm = document.getElementById("login-form");
if(loginForm){
  var loginError = document.getElementById("login-error");
  var loginBtn = document.getElementById("login-submit");
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    hideBox(loginError);
    var email = document.getElementById("login-email").value.trim();
    var pass = document.getElementById("login-pass").value;

    loginBtn.disabled = true;
    loginBtn.textContent = "Ingresando...";

    signInWithEmailAndPassword(auth, email, pass)
      .then(function(){
        window.location.href = "cuenta.html";
      })
      .catch(function(err){
        console.error(err);
        showBox(loginError, "Correo o contraseña incorrectos.");
      })
      .finally(function(){
        loginBtn.disabled = false;
        loginBtn.textContent = "Iniciar sesión";
      });
  });
}

/* ---------- Recuperar contraseña ---------- */
var resetForm = document.getElementById("reset-form");
if(resetForm){
  var resetError = document.getElementById("reset-error");
  var resetSuccess = document.getElementById("reset-success");
  var resetBtn = document.getElementById("reset-submit");
  resetForm.addEventListener("submit", function(e){
    e.preventDefault();
    hideBox(resetError);
    hideBox(resetSuccess);
    var email = document.getElementById("reset-email").value.trim();

    resetBtn.disabled = true;
    resetBtn.textContent = "Enviando...";

    sendPasswordResetEmail(auth, email)
      .then(function(){
        showBox(resetSuccess, "Listo. Revisa tu correo para restablecer la contraseña.");
        resetForm.reset();
      })
      .catch(function(err){
        console.error(err);
        showBox(resetError, "No se pudo enviar el correo. Verifica que esté bien escrito.");
      })
      .finally(function(){
        resetBtn.disabled = false;
        resetBtn.textContent = "Enviar enlace";
      });
  });
}

/* ---------- Mi cuenta (página protegida) ---------- */
var accountGate = document.getElementById("account-gate");
var accountApp = document.getElementById("account-app");
if(accountGate && accountApp){
  onAuthStateChanged(auth, function(user){
    if(!user){
      window.location.href = "login.html";
      return;
    }
    accountGate.style.display = "none";
    accountApp.style.display = "block";
    document.getElementById("account-name").textContent = user.displayName || "Cliente Gravity";
    document.getElementById("account-email").textContent = user.email;
  });

  var logoutBtn = document.getElementById("logout-btn");
  if(logoutBtn){
    logoutBtn.addEventListener("click", function(){
      signOut(auth).then(function(){ window.location.href = "index.html"; });
    });
  }
}
