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
  const [race, setRace] = useState({
    name: "High Elf",
    description: "Maestros en el arte de la magia arcana.",
    habilities: ["Magia arcana avanzada", "Teletransportación"],
    stats: {
      fuerza: 4,
      destreza: 6,
      inteligencia: 9,
      vida: 90,
    },
  });

  return (
    <>
      <Header />
      <div id="charactercreation">
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

            <label>Choose a race:</label>
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
            <label>Choose a class:</label>
            <br />
            <select
              name="Class"
              //onChange={async () =>
              //</form>setRace(
              //await getDocument("races", document.forms.RegForm.race.value)
              //)
              //}
            >
              <option>Warrior</option>
              <option>Rogue</option>
              <option>Mage</option>
              <option>Marksman</option>
            </select>
            <br />
            <br />
            <input type="submit" value="Create player"></input>
          </form>
        </Article>

        <Article>
          <h1>{race.name}</h1>
          <p>Descripción : {race.description}</p>
          <p>habilidad principal: {race.habilities[0]}</p>
          <p>habilidad secundaria: {race.habilities[1]}</p>
          <p>fuerza = {race.stats["fuerza"]}</p>
          <p>inteligencia = {race.stats["inteligencia"]}</p>
          <p>destreza = {race.stats["destreza"]}</p>
          <p>vida = {race.stats["vida"]}</p>
        </Article>
      </div>
      <Footer />
    </>
  );
};
