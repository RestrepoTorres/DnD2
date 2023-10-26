import { Route, Routes, Link } from "react-router-dom";

export const Button = ({ to, text, handleClick }) => {
  return (
    
      <button onClick={handleClick}>{text}</button>
    
  );
};
