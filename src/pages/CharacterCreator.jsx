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
  const classs = document.forms.RegForm.Class.value;
  const avatar = localStorage.getItem("photoURL");
  await addUser();
  await addCharacter(
    CharacterName,
    elo,
    gamesPlayed,
    wonGames,
    winRate,
    race,
    classs,
    avatar
  );
  localStorage.setItem("nick", CharacterName);
  navigate("/game-mode");
}

export const CharacterCreator = () => {
  const navigate = useNavigate();
  const [race, setRace] = useState({
    name: "High Elf",
    description: "Masters in the art of arcane magic.",
    habilities: ["Advanced arcane magic", "Teleportation"],
    stats: {
      fuerza: 4,
      destreza: 6,
      inteligencia: 9,
      vida: 90,
    },
  });

  const [classs, setClass] = useState({
    name: "Warrior",
    description: "A mighty and skilled warrior skilled in close combat.",
    stats: {
      destreza: 4,
      fuerza: 10,
      inteligencia: 2,
      vida: 120,
    },
  });

  return (
    <>
      <Header />
      <div id="charactercreation">
        <Article>
          <h1>Character Creation </h1>
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
            <br />
            <label>Elo:</label>
            <br />
            <input type="number" name="Elo" id="elo" required placeholder="4" />
            <br />
            <br />
            <label>games played:</label>
            <br />
            <input type="number" name="gamesPlayed" required placeholder="4" />
            <br />
            <br />
            <label>Won games:</label>
            <br />
            <input type="number" name="wonGames" required placeholder="4" />
            <br />
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
            <br />
            <label>Choose a class:</label>
            <br />
            <select
              name="Class"
              onChange={async () =>
                setClass(
                  await getDocument(
                    "classes",
                    document.forms.RegForm.Class.value
                  )
                )
              }
            >
              <option>Warrior</option>
              <option>Rogue</option>
              <option>Mage</option>
              <option>Marksman</option>
            </select>
            <br />
            <br />
            <br />
            <br />
            <input type="submit" value=" Create player "></input>
          </form>
        </Article>

        <Article id="atributes">
          <div>
            <h1>
              <strong>Race: {race.name}</strong>
            </h1>
            <br />
            <p>
              {" "}
              <strong>About:</strong> {race.description}
            </p>
            <br />
            <p>
              <strong>main skill: </strong>
              {race.habilities[0]}
            </p>
            <br />
            <p>
              <strong>secondary skill:</strong> {race.habilities[1]}
            </p>
          </div>
          <div>
            <h1>
              <strong>Class: {classs.name}</strong>
            </h1>
            <br />
            <p> {classs.description}</p>
          </div>
          <div>
            <h1>
              <strong>Attributes </strong>
            </h1>
            <br />
            <p>strength: {race.stats["fuerza"] + classs.stats["fuerza"]}</p>
            <p>
              intelligence:{" "}
              {race.stats["inteligencia"] + classs.stats["inteligencia"]}
            </p>
            <p>
              dexterity: {race.stats["destreza"] + classs.stats["destreza"]}
            </p>
            <p>HP: {race.stats["vida"] + classs.stats["vida"]}</p>
          </div>
        </Article>
      </div>
      <Footer />
    </>
  );
};
