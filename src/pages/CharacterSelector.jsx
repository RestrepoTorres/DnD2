import { Article, Button, Header, Footer } from "/src/components/Components";
import { firebaseToken } from "../components/FireBaseToken";
import { initializeApp } from "firebase/app";
import EloRank from "elo-rank";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
  where,
  query,
  updateDoc,
  increment,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = firebaseToken;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function querie() {
  //Querie players with elo >2990 from the colection users
  const usersref = collection(db, "users");
  const q = query(usersref, where("elo", ">", 2990));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
async function addDocument() {
  // add a doc to the colection citites with the ID LA
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    population: 0,
    country: "USA",
  });
}
async function update() {
  //update the document LA from the colection cities, adding the field capital
  // and modifying the field country and population
  const cityRef = doc(db, "cities", "LA");
  setDoc(
    cityRef,
    {
      capital: true,
      population: increment(50),
      country: "United states of America",
    },
    { merge: true }
  );
}

async function getDocument() {
  //Get the document with the id LA from the collection cities
  const docRef = doc(db, "cities", "LA");
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
}

function dumpFakeData() {
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
