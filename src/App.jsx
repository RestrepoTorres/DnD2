import "./styles/app.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { CharacterCreator } from "./pages/CharacterCreator";
import { SearchOpponents } from "./pages/SearchOpponents";
import { GameMode } from "./pages/GameMode";
import { PageNotFound } from "./pages/404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/character-creator" element={<CharacterCreator />} />
        <Route path="/search-opponents" element={<SearchOpponents />} />
        <Route path="/game-mode" element={<GameMode />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
