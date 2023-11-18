import { Article, Button, Header, Footer } from "/src/components/Components";
import { useNavigate } from "react-router-dom";
import { addCharacter, addUser } from "../firebase_back/Firestore_access";

async function formOnClick(event, navigate) {
  event.preventDefault();
  const CharacterName = document.forms.RegForm.Name.value;
  const elo = parseInt(document.forms.RegForm.Elo.value);
  const gamesPlayed = parseInt(document.forms.RegForm.gamesPlayed.value);
  const wonGames = parseInt(document.forms.RegForm.wonGames.value);
  const winRate = wonGames / gamesPlayed;
  await addUser();
  await addCharacter(CharacterName, elo, gamesPlayed, wonGames, winRate);
  navigate("/search-opponents");
}

export const CharacterCreator = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Article>
        <h1>Character Selector </h1>
        <form name="RegForm" onSubmit={(event) => formOnClick(event, navigate)}>
          <label>Nick Name:</label>
          <br />
          <input
            type="text"
            name="Name"
            required
            minLength="4"
            autoComplete="given-name"
          />
          <br />
          <label>Elo:</label>
          <br />
          <input type="number" name="Elo" id="elo" required placeholder="4" />
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
          <input type="submit" value="Create player"></input>
        </form>
      </Article>
      <Footer />
    </>
  );
};
