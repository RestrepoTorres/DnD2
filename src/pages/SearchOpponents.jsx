import { Article, Header, Footer } from "/src/components/Components";
import { searchRivals, getDocument } from "../firebase_back/Firestore_access";
import { useState, useEffect } from "react";

export const SearchOpponents = () => {
  const [potentialRivals, setPotentialRivals] = useState([
    { nick: "nobody was found to you :c" },
  ]);

  useEffect(() => {
    const fetchUserData = async () => {
      const player = await getDocument(
        "characters",
        localStorage.getItem("uid")
      );
      const rivals = await searchRivals(player);
      setPotentialRivals(rivals);
    };
    localStorage.getItem("uid") && fetchUserData();
  }, []);
  return (
    <>
      <Header></Header>
      <Article>
        <h1>Found opponents</h1>
        <ul>
          {potentialRivals.map((doc) => (
            <li key={doc.nick}>
              <img src={doc.avatar} className="avatar" alt="player avatar" />
              <p>
                <strong>Nick:</strong> {doc.nick}.
              </p>
              <p>
                {" "}
                <strong>Elo:</strong> {doc.elo}.
              </p>
            </li>
          ))}
        </ul>
      </Article>
      <Footer></Footer>
    </>
  );
};
