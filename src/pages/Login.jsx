import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { firebaseToken } from "../components/FireBaseToken";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = firebaseToken;
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const Login = ({ text }) => {
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
    navigate("/main-menu");
  }
  return (
    <>
      <h1>{text} </h1>
      <Button text="log with Google" handleClick={googleLogin} />
    </>
  );
};
