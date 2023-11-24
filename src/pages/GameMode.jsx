import { Article, Button, Header, Footer } from "/src/components/Components";
import { useNavigate } from "react-router-dom";
export const GameMode = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      
      <div id = "game-mode">
      <h1>Select a game mode:</h1>
        <Button
          label="History mode"
          handleClick={() => {
            window.location.replace("/index2.html");
          }}
        />

        <Button
          label="Competitive mode"
          handleClick={() => {
            navigate("/search-opponents");
          }}
        />
      </div>
      <Footer />
    </>
  );
};
