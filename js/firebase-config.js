/* ============================================================
   GRAVITY STREETWEAR — firebase-config.js
   Proyecto Firebase propio de Gravity (gravityec), separado del
   proyecto de Axon Labs.
   ============================================================ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBml7y_Q8v3SQO431OT0_zicZeBlmPj1BQ",
  authDomain: "gravityec.firebaseapp.com",
  projectId: "gravityec",
  storageBucket: "gravityec.firebasestorage.app",
  messagingSenderId: "89167091161",
  appId: "1:89167091161:web:f76dfa53fcf912e87d75c8",
  measurementId: "G-0F5PX3CZ68"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

isSupported().then((ok) => { if(ok) getAnalytics(app); }).catch(()=>{});
