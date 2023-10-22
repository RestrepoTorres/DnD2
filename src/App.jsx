import { useState } from "react";
import "./assets/styles/app.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB13aXQX87SvCK9U1PhGMRE3r3toUDJfbI",
  authDomain: "dnd2-e4297.firebaseapp.com",
  projectId: "dnd2-e4297",
  storageBucket: "dnd2-e4297.appspot.com",
  messagingSenderId: "600615642544",
  appId: "1:600615642544:web:c372b0b6d66df4e73ce275",
  measurementId: "G-9ZX3XWYK0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Aquí se va a construir DnD2</h1>
    </>
  );
}

export default App;
