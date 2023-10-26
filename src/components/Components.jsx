import "../assets/styles/components.css";

export const Article = ({ children }) => {
  return (
    <>
      <article>{children}</article>
    </>
  );
};

export const Button = ({ to, text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export const Footer = ({ label }) => {
  return (
    <footer>
      <h1>{label}</h1>
    </footer>
  );
};

export const Header = ({ label, children }) => {
  return (
    <header>
      <h1>{label}</h1>
    </header>
  );
};
