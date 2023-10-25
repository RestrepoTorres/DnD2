import { Button } from "../components/Button";
import { firebaseToken } from "../components/FireBaseToken";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = firebaseToken;
const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
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
export const Login = () => {
  return (
    <>
      <h1>Logeate o vete</h1>
      <Button to="/character-selector" text="log with Google" handleClick={googleLogin} />
    </>
  );
};
