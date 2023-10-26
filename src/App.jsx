import { useState } from "react";
import "./assets/styles/app.css";
import { Route, Routes, Link } from "react-router-dom";
import { Login } from "./pages/Login";
import { CharacterSelector } from "./pages/CharacterSelector";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/404";

function App() {
  return (
    <>
      <header>
        <nav>
          <li>
            <Link to="/"> HomePage</Link>
          </li>
          <li>
            <Link to="/login"> login</Link>
          </li>
          <li>
            <Link to="/character-selector"> Character selector</Link>
          </li>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage text="Welcome" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/character-selector" element={<CharacterSelector />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
