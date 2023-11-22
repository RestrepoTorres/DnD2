import "../styles/components.css";
export const Header = () => {
  return (
    <header>
      <h1>CODE NAME: DnD2</h1>
    </header>
  );
};
export const Article = ({ children }) => {
  return (
    <>
      <article>{children}</article>
    </>
  );
};
export const Footer = () => {
  return (
    <footer>
      <h3>Made with ❤️. 2023 UdeA.</h3>
    </footer>
  );
};

export const Button = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>;
};
