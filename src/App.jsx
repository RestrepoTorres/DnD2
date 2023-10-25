import { useState } from "react";
import "./assets/styles/app.css";
import { Route, Routes, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Login } from "./pages/Login";
import { CharacterSelector } from "./pages/CharacterSelector";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/404";
import { Button } from "./components/Button";
{
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
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  function googleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        //console.log(result.user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
}
function name() {
  alert("cuidao");
}
function App() {
  return (
    <>
      <header>
        <nav>
          <li>
            <Link to="/"> HomePage</Link>
          </li>
          <li>
            <Link to="/login"> login</Link>
          </li>
          <li>
            <Link to="/character-selector"> Character selector</Link>
          </li>
        </nav>
      </header>

      <Button
        to="Character-selector"
        text="Click aquí para crear un "
        fun={name}
      />
      
      <Routes>
        <Route path="/" element={<HomePage text="Homepage" />} />
        <Route path="/login" element={<Login text="Login" />} />
        <Route path="/character-selector" element={<CharacterSelector />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
