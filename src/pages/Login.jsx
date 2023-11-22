import { firebaseToken } from "../firebase_back/FireBaseToken";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { Article, Button, Header, Footer } from "/src/components/Components";

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
      <div className="red">
        <h1>Welcome, Adventurer!</h1>

        <p>
          🛡️ Log in to embark on your epic journey in the realm of Eldoria! 🗡️
          Prepare to face mythical creatures, unravel ancient mysteries, and
          forge alliances with fellow warriors. Your destiny awaits, and only
          you can shape the future of this enchanted world. Enter your
          credentials below and let the adventure begin!
        </p>
        <Button
          label="log with Google"
          handleClick={() => googleLogin(navigate)}
        />
      </div>
    </>
  );
};