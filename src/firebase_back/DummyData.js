import fakedata from "./MOCK_DATA.json";
import races from "./Races.json";
import clases from "./Class.json";
import { firebaseToken } from "./FireBaseToken";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  where,
  query,
  increment,
  getDoc,
  orderBy,
  startAt,
  endAt,
} from "firebase/firestore";
import EloRank from "elo-rank";

const firebaseConfig = firebaseToken;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function dumpFakeData() {
  async function addFakeUser(name, uid) {
    await setDoc(doc(db, "users", "" + uid), {
      name: name,
    });
  }

  async function addFakeCharacter(
    name,
    elo,
    gamesPlayed,
    wins,
    winRate,
    id,
    avatar
  ) {
    await setDoc(doc(db, "characters", "" + id), {
      nick: name,
      elo: elo,
      gamesPlayed: gamesPlayed,
      wins: wins,
      userId: id,
      winRate: winRate,
      avatar: avatar,
    });
  }
  fakedata.forEach((doc) => {
    addFakeCharacter(
      doc.nickName,
      doc.elo,
      doc.gamesPlayed,
      doc.wins,
      doc.wins / doc.gamesPlayed,
      doc.id,
      doc.avatar
    );
    addFakeUser(doc.name, doc.id);
  });
}

async function addRaces() {
  races.forEach((docu) => {
    setDoc(doc(db, "races", docu.nombre), {
      name: docu.nombre,
      description: docu.descripcion,
      habilities: docu.habilidades,
      stats: docu.estadisticas_base,
    });
  });
}

export async function addClasses() {
  clases.forEach((document) => {
    setDoc(doc(db, "classes", document.name), {
      name: document.name,
      description: document.description,
      stats: document.stats,
    });
  });
}
