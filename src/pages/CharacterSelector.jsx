import { Article, Button, Header, Footer } from "/src/components/Components";
import { querie,addDocument, afterMach, getDocument, dumpFakeData } from "../firebase_back/Firestore_access";
import EloRank from "elo-rank";

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
