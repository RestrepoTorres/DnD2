import { Button } from "../components/Button";
import { firebaseToken } from "../components/FireBaseToken";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

const firebaseConfig = firebaseToken;
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const Login = () => {
  const navigate = useNavigate();

  async function googleLogin() {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    //console.log(result.user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    navigate("/character-selector");
  }

  return (
    <>
      <h1>Logeate o vete</h1>
      <Button text="log with Google" handleClick={googleLogin} />
    </>
  );
};
