import { Article, Button, Header, Footer } from "/src/components/Components";
import { useNavigate } from "react-router-dom";
import {
  querie,
  addDocument,
  afterMach,
  getDocument,
  dumpFakeData,
} from "../firebase_back/Firestore_access";
import EloRank from "elo-rank";

export const CharacterSelector = () => {
  const navigate = useNavigate();
  async function formOnClick() {
    const name = document.forms.RegForm.Name.value;
    const elo = document.forms.RegForm.Elo.value;
    const gamesPlayed = document.forms.RegForm.gamesPlayed.value;
    const wonGames = document.forms.RegForm.wonGames.value;
    await addDocument(name, elo, gamesPlayed, wonGames);
    navigate("/main-menu");
  }
  return (
    <>
      <h1>Character Selector </h1>
      <Article>
        <form name="RegForm">
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="Name"
            required
            minLength="4"
            maxLength="15"
            placeholder="Joshua"
          />
          <br />
          <label>Elo:</label>
          <br />
          <input type="number" name="Elo" required placeholder="4" />
          <br />
          <label>games played:</label>
          <br />
          <input type="number" name="gamesPlayed" required placeholder="4" />
          <br />
          <label>Won games:</label>
          <br />
          <input type="number" name="wonGames" required placeholder="4" />
          <br />
          <br />
          <input
            type="submit"
            value="form button"
            onClick={formOnClick}
          ></input>
        </form>

        <Button text="my button" handleClick={formOnClick} />
      </Article>
    </>
  );
};
