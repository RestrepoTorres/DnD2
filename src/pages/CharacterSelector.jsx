import { Article, Button, Header, Footer } from "/src/components/Components";
import { useNavigate } from "react-router-dom";
import {
  querie,
  addDocument,
  afterMach,
  getDocument,
  dumpFakeData,
} from "../firebase_back/Firestore_access";

async function formOnClick(event, navigate) {
  event.preventDefault();
  const name = document.forms.RegForm.Name.value;
  const elo = document.forms.RegForm.Elo.value;
  const gamesPlayed = document.forms.RegForm.gamesPlayed.value;
  const wonGames = document.forms.RegForm.wonGames.value;
  await addDocument(name, elo, gamesPlayed, wonGames);
  navigate("/main-menu");
}

export const CharacterSelector = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <Article>
        <h1>Character Selector </h1>
        <form name="RegForm" onSubmit={(event) => formOnClick(event, navigate)}>
          <label for="name">Name:</label>
          <br />
          <input
            type="text"
            name="Name"
            required
            minLength="4"
            maxLength="15"
            id="name"
            autocomplete="given-name"
          />
          <br />
          <label for="elo">Elo:</label>
          <br />
          <input type="number" name="Elo" id="elo" required placeholder="4" />
          <br />
          <label for="gamesPlayed">games played:</label>
          <br />
          <input
            type="number"
            name="gamesPlayed"
            id="gamesPlayed"
            required
            placeholder="4"
          />
          <br />
          <label for="wonGames">Won games:</label>
          <br />
          <input
            type="number"
            name="wonGames"
            id="wonGames"
            required
            placeholder="4"
          />
          <br />
          <br />
          <input type="submit" value="Create player"></input>
        </form>
      </Article>
      <Footer />
    </>
  );
};
