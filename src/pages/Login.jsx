import { firebaseToken } from "../firebase_back/FireBaseToken";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { Article, Button, Header, Footer } from "/src/components/Components";
import { RaceSelector } from "./RaceSelector";

const firebaseConfig = firebaseToken;
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();

async function googleLogin(navigate) {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  localStorage.setItem("uid", user.uid);
  localStorage.setItem("displayName", user.displayName);
  localStorage.setItem("photoURL", user.photoURL);
  navigate("/character-creator");
}
export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      
      <Header />
      <Article>
        <h1>Please login to start your adventure</h1>
        <p>
          DnD2 its a classic history driven rpg. The world of $____$ it's is
          harsh and merciless, you will probably have to ally yourself with
          other inhabitants of this world to achieve your goal. Click login
          start.
        </p>
        <Button
          label="log with Google"
          handleClick={() => googleLogin(navigate)}
        />
      </Article>
      <Footer />
    </>
  );
};
