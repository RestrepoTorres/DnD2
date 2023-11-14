import { useState } from "react";
import "./assets/styles/app.css";
import { Route, Routes, Link } from "react-router-dom";
import { CharacterSelector } from "./pages/CharacterSelector";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/404";
import { SearchOpponents } from "./pages/SearchOpponents";

function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route
          path="/"
          element={<Login text="Welcome, this is the landing page" />}
        />
        <Route path="/character-selector" element={<CharacterSelector />} />
        <Route path="/search-opponents" element={<SearchOpponents />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
