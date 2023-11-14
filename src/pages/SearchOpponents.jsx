import { Article, Button, Header, Footer } from "/src/components/Components";
import { searchRivals, getDocument } from "../firebase_back/Firestore_access";

async function player() {
  const player = await getDocument(localStorage.getItem("uid"));
  searchRivals(player);
}

export const SearchOpponents = () => {
  player();
  return (
    <>
      <Header></Header>
      <Article>
        <h1>Search for opponents</h1>
        <div>
          <p>{localStorage.getItem("displayName")}</p>
          <img src={localStorage.getItem("photoURL")} />
        </div>
      </Article>
      <Footer></Footer>
    </>
  );
};
