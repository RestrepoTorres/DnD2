import { Article, Header, Footer } from "/src/components/Components";


export const RaceSelector = () => {
  return (
    <>
      <Header />
      <Article>
        <h1>Character Selector </h1>
        <form name="RaceSelector">
          <label>Nick Name:</label>
          <br />
          <input
            type="text"
            name="Name"
            required
            minLength="4"
            autoComplete="given-name"
          />
          <br />
          <label>Elo:</label>
          <br />
          <input type="number" name="Elo" id="elo" required placeholder="4" />
          <br />
          <label>games played:</label>
          <br />
          <input type="number" name="gamesPlayed" required placeholder="4" />
          <br />
          <label>Won games:</label>
          <br />
          <input type="number" name="wonGames" required placeholder="4" />
          <br />
          <br />
        </form>
      </Article>
      <Footer />
    </>
  );
};
