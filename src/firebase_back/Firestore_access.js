import fakedata from "./MOCK_DATA.json";
import races from "./Races.json";
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
const normalRange = 45;
export async function addCharacter(name, elo, gamesPlayed, wins, winRate) {
  const uid = localStorage.getItem("uid");
  await setDoc(doc(db, "characters", "" + uid), {
    nick: name,
    elo: elo,
    gamesPlayed: gamesPlayed,
    wins: wins,
    userId: uid,
    winRate: winRate,
  });
}

export async function addUser() {
  const uid = localStorage.getItem("uid");
  await setDoc(doc(db, "users", uid), {
    name: localStorage.getItem("displayName"),
    avatar: localStorage.getItem("photoURL"),
  });
}
export async function getDocument(document, id) {
  const docRef = doc(db, document, id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
export function correctInterval(winrate) {
  var e = 1 - winrate;
  var aux = 1 / e - 1;
  return 400 * Math.log10(aux);
}

export async function searchRivals(player) {
  const elo = player.elo;
  if (player.wins / player.gamesPlayed > 0.55) {
    return queryByElo(elo + normalRange, elo + correctInterval(player.winRate));
  } else {
    return queryByElo(elo - normalRange, elo + normalRange);
  }
}

async function queryByElo(lowest, highest) {
  const usersref = collection(db, "characters");
  const q = query(usersref, orderBy("elo"), startAt(lowest), endAt(highest));
  const querySnapshot = await getDocs(q);

  const queryPlayers = [];
  querySnapshot.forEach((doc) => {
    queryPlayers.push(doc.data());
  });
  return queryPlayers.filter(
    (element) => element.userId != localStorage.getItem("uid")
  );
}

export async function afterMach(id, points, win) {
  const playerRef = doc(db, "characters", id);
  await setDoc(
    playerRef,
    {
      wins: increment(win),
      gamesPlayed: increment(1),
      elo: increment(points),
    },
    { merge: true }
  );
}

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
