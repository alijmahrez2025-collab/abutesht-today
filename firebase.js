import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyApXobfY3-y8AH0ZA3INsjzD4pu45Ga15s",
  authDomain: "abutesht-today.firebaseapp.com",
  databaseURL: "https://abutesht-today-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "abutesht-today",
  storageBucket: "abutesht-today.firebasestorage.app",
  messagingSenderId: "527540958988",
  appId: "1:527540958988:web:48ef701d1eb616b26dfb29"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };