import Button from "./Button";

const GoodFit = () => {
  return (
    <section className="goodfit bg-black">
      <div className="content text-center">
        <h2 id="heart">Passer vi sammen?</h2>
        <p className="white-text">
          Jeg går ofte hele vejen og mere til i mit samarbejde. Derfor er det
          vigtigt for mig, at vi passer sammen.
          <br />
          Hvis du kan se, at vi er det perfekte match, så skrive endelig til mig
          og lad os tage en 30-minutters samtale.
        </p>
      </div>
      <div className="content grid">
        <div className="goodfit-item">
          <span>01</span>Vi kan lide hinanden!
        </div>
        <div className="goodfit-item">
          <span>02</span>Du er interesseret i ærlig feedback.
        </div>
        <div className="goodfit-item">
          <span>03</span>Du har en forretning (eller er tæt på at starte en) i
          Shopify eller WordPress.
        </div>
        <div className="goodfit-item">
          <span>04</span>Har godt humør og er klar på et langt samarbejde.
        </div>
      </div>
      <Button text="Let's Talk" link="/getstarted" />
    </section>
  );
};

export default GoodFit;
