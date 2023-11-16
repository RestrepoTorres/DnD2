import { Article, Button, Header, Footer } from "/src/components/Components";
import { searchRivals, getDocument } from "../firebase_back/Firestore_access";

async function player() {
  const player = await getDocument(localStorage.getItem("uid"));

  return searchRivals(player);
}
const querie = await player();
console.log(querie);
const arrayDataItems = querie.map((doc) => (
  <li key={doc.userName}>
    <p>
      {doc.userName}, {doc.elo}
    </p>
  </li>
));

export const SearchOpponents = () => {
  return (
    <>
      <Header></Header>
      <Article>
        <h1>Search for opponents</h1>
        <div>
          <p>{localStorage.getItem("displayName")}</p>
        </div>
        <ul>{arrayDataItems}</ul>
      </Article>
      <Footer></Footer>
    </>
  );
};
