import { Article, Button, Header, Footer } from "/src/components/Components";
import { useNavigate } from "react-router-dom";
import {
  addCharacter,
  addUser,
  getDocument,
} from "../firebase_back/Firestore_access";
import { useState, useEffect } from "react";

async function formOnClick(event, navigate) {
  event.preventDefault();
  const CharacterName = document.forms.RegForm.Name.value;
  const elo = parseInt(document.forms.RegForm.Elo.value);
  const gamesPlayed = parseInt(document.forms.RegForm.gamesPlayed.value);
  const wonGames = parseInt(document.forms.RegForm.wonGames.value);
  const winRate = wonGames / gamesPlayed;
  const race = document.forms.RegForm.race.value;
  await addUser();
  await addCharacter(CharacterName, elo, gamesPlayed, wonGames, winRate, race);
  navigate("/search-opponents");
}

export const CharacterCreator = () => {
  const navigate = useNavigate();
  const [race, setRace] = useState({ description: "Select a race" });

  return (
    <>
      <Header />
      <div id ="charactercreation">
        <Article>
          <h1>Character Selector </h1>
          <form
            name="RegForm"
            onSubmit={(event) => formOnClick(event, navigate)}
          >
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
            <label>Choose a race for your character:</label>
            <br />
            <select
              name="race"
              onChange={async () =>
                setRace(
                  await getDocument("races", document.forms.RegForm.race.value)
                )
              }
            >
              <option>High Elf</option>
              <option>Wooden elf</option>
              <option>Dwarf</option>
              <option>Human</option>
              <option>Orc</option>
            </select>

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

        <Article>
          <p>{race.description}</p>
        </Article>
      </div>
      <Footer />
    </>
  );
};
