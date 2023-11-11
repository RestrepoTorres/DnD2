import "../assets/styles/components.css";
export const Header = ({ label, children }) => {
  return (
    <header>
      <h1>This is a Header, navbar</h1>
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
      <h3>Build with 🖤🐈‍⬛🐦‍⬛🦝. 2023 UdeA.</h3>
    </footer>
  );
};

export const Button = ({ to, text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
