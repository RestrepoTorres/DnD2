import "./styles/app.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { CharacterCreator } from "./pages/CharacterCreator";
import { SearchOpponents } from "./pages/SearchOpponents";
import { PageNotFound } from "./pages/404";
import { RaceSelector } from "./pages/RaceSelector";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/character-creator" element={<CharacterCreator />} />
        <Route path="/race-selector" element={<RaceSelector />} />
        <Route path="/search-opponents" element={<SearchOpponents />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
