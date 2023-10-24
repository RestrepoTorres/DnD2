import { Route, Routes, Link } from "react-router-dom";

export const Button = ({ to, text, fun }) => {
  return (
    <Link to={to}>
      <button onClick={fun}>{text}</button>
    </Link>
  );
};
