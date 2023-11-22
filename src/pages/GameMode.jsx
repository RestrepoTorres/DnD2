import { Article, Button, Header, Footer } from "/src/components/Components";
import { useNavigate } from "react-router-dom";
export const GameMode = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      
      <div id = "game-mode">
      <h1>Selecciona un modo de juego:</h1>
        <Button
          label="modo historia"
          handleClick={() => {
            window.location.replace("../RPG_test-main/index.html");
          }}
        />

        <Button
          label="modo competitivo"
          handleClick={() => {
            navigate("/search-opponents");
          }}
        />
      </div>
      <Footer />
    </>
  );
};
