import fakedata from "./MOCK_DATA.json";
import { firebaseToken } from "./FireBaseToken";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
  where,
  query,
  increment,
  getDoc,
  orderBy,
  limit,
} from "firebase/firestore";

const firebaseConfig = firebaseToken;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function querie(lowest, highest) {
  //Querie players with elo >2990 from the colection users
  const usersref = collection(db, "users");
  const q = query(
    usersref,
    orderBy("elo"),
    where("elo", ">", lowest),
    where("elo", "<", highest)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export async function addDocument(
  id,
  userName,
  CharacterName,
  elo,
  gamesPlayed,
  wins
) {
  await setDoc(doc(db, "players", id), {
    userName: userName,
    CharacterName: CharacterName,
    elo: elo,
    gamesPlayed: gamesPlayed,
    wins: wins,
    winRate: wins / gamesPlayed,
  });
}

export async function afterMach(id, points, win) {
  const playerRef = doc(db, "players", id);
  await setDoc(
    playerRef,
    {
      wins: increment(win),
      gamesPlayed: increment(1),
      elo: increment(points),
    },
    { merge: true }
  );
  const playerData = await getDocument("players", id);
  setDoc(
    playerRef,
    {
      winRate: playerData.wins / playerData.gamesPlayed,
    },
    { merge: true }
  );
}

export async function getDocument(id) {
  const docRef = doc(db, "players", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export function dumpFakeData() {
  fakedata.forEach((doc) => {
    addDocument(doc.name, doc.elo, doc.gamesPlayed, doc.wins);
  });
}
