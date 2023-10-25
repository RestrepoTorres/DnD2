import { Route, Routes, Link } from "react-router-dom";

export const Button = ({ to, text, handleClick }) => {
  return (
    <Link to={to}>
      <button onClick={handleClick}>{text}</button>
    </Link>
  );
};
