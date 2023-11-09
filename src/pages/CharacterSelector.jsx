import { Article, Button, Header, Footer } from "/src/components/Components";
import { firebaseToken } from "../components/FireBaseToken";
import { initializeApp } from "firebase/app";
import EloRank from "elo-rank";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  where,
  query,
} from "firebase/firestore";

const firebaseConfig = firebaseToken;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function queries() {
  const usersref = collection(db, "users");
  const q = query(usersref, where("elo", ">", 2990));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
function dumpData() {
  //import fakedata from "../MOCK_DATA.json";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

function formOnClick() {
  //const elo = document.forms.RegForm.HP.value * 100; obtener info del formulario
  // fakedata.forEach(function (obj) {
  //   addDoc(collection(db, "users"), {
  //     elo: obj.elo,
  //   });
  // });
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
          onClick={formOnClick}
        ></input>
      </form>
    </Article>
  </>
);
