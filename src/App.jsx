import { useState } from "react";
import "./assets/styles/app.css";
import { Route, Routes, Link } from "react-router-dom";
import { CharacterSelector } from "./pages/CharacterSelector";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/404";
import { MainMenu } from "./pages/MainMenu";

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
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
