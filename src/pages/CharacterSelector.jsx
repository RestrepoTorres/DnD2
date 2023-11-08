import { Article, Button, Header, Footer } from "/src/components/Components";
import { firebaseToken } from "../components/FireBaseToken";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = firebaseToken;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function validateForm() {
  console.log(document.forms.RegForm.Name.value);
  const mmr = document.forms.RegForm.HP.value * 100;
  const docRef = addDoc(collection(db, "users"), {
    first: document.forms.RegForm.Name.value,
    last: "Lovelace",
    born: 1815,
    mmr: mmr,
  });
  console.log("Document written with ID: ", docRef.id);
}

export const CharacterSelector = () => (
  <>
    <h1>Character Selector </h1>
    <Article>
      <form name="RegForm">
        <label>Name:</label>

        <input
          type="text"
          name="Name"
          required
          minLength="4"
          maxLength="15"
          placeholder="Joshua"
        />
        <br></br>

        <label>HP:</label>
        <input
          type="number"
          name="HP"
          required
          min="4"
          max="15"
          placeholder="4"
        />
        <br></br>

        <input
          type="submit"
          value="Crear personaje"
          onClick={validateForm}
        ></input>
      </form>
    </Article>
  </>
);
