import { Article, Button, Header, Footer } from "/src/components/Components";
import { firebaseToken } from "../components/FireBaseToken";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import EloRank from "elo-rank";

const firebaseConfig = firebaseToken;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var elo = new EloRank();

var gentes = [
  
    { 
      id: 1, first_name: "Merola", elo: 1350 
    },
    { id: 2, first_name: "Griz", elo: 1986 },
     { id: 3, first_name: "Joye", elo: 2351 },
     { id: 4, first_name: "Gianni", elo: 1165 },
     { id: 5, first_name: "Errol", elo: 585 },
      { id: 7, first_name: "Patricia", elo: 2320 },
      { id: 6, first_name: "Lauri", elo: 631 },
  
];
gentes.forEach(function (obj) {
  const docRef = addDoc(collection(db, "users"), {
    elo: obj.elo,
  })
});

function validateForm() {
  console.log(document.forms.RegForm.Name.value);
  const elo = document.forms.RegForm.HP.value * 100;
  const docRef = addDoc(collection(db, "users"), {});
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
