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

export const Footer = () => {
  return (
    <footer>
      <h1>this is footer</h1>
    </footer>
  );
};


export const Header = () => {
    return (
      <footer>
        <h1>this is Header</h1>
      </footer>
    );
  };