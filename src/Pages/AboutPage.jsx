import Consultation from "../components/Consultation";
import Solutions from "../components/Solutions";
import reactsvg from "/images/tech/react.svg";
import liquidsvg from "/images/tech/liquid.svg";
import cssvg from "/images/tech/css.svg";
import htmlsvg from "/images/tech/html.svg";
import javascriptsvg from "/images/tech/javascript.svg";
import vitejssvg from "/images/tech/vitejs.svg";
import wordpresssvg from "/images/tech/wordpress.svg";
import shopifysvg from "/images/tech/shopify.svg";

const AboutPage = () => {
  return (
    <div className="white-text">
      <section className="hero bg-black  ">
        <div className="content">
          <h1 className="width-small">
            Jeg er freelanceudvikler og digital konsulent
          </h1>
          <p className="white-text width-small text-center">
            <b>De hurtige facts:</b>
            <br /> 32 år - familiefar - cand. merc. i kommunikation -<br /> 5+
            års udviklererfaring - ekspert i Shopify
          </p>
          <p className="white-text width-small">
            Til daglig er jeg udvikler og digital rådgiver for e-commerce
            virksomheder.
            <br />
            <br />
            Det er vigtigt for mig, at tage udgangspunkt i din nuværende
            position og sikre løsninger, der passer til dine ønsker og behov. Du
            vil opleve, at min tilgang til opgaverne og løsningerne er meget
            nede på jorden, så du altid er med hele vejen.
            <br />
            <br />
            Jeg står sammen med mine kunder i tykt og tyndt og stræber efter at
            bygge langsigtede relationer. Hos mig får du altid en målrettet,
            professionel og ærlig behandling.
            <br />
            <br />
            Jeg er meget perfektionistisk og går efter at skabe pixel-perfect
            løsninger. Jeg påtager mig gerne projekter af enhver størrelse, hvis
            jeg vurderer de passer mig til. For jeg påtager mig kun de opgaver
            jeg er ekspert i, men arbejder gerne med samarbejdspartnere. Hvis du
            har leder efter en entusiastisk og fantastisk problemløsende
            udvikler, er jeg din mand!
          </p>
          <img className="divider-image" src="./images/heart_2.svg" />
          <p className="featured-statement white-text width-small">
            Jeg vil skabe de bedste løsninger for mine kunder, så de
            <br />
            <span className="highlight text-black">
              får mest ud af hver besøgende på deres website
            </span>
          </p>
          <h3 className="small-margin margin-top">De teknologier jeg bruger</h3>
          <div className="tech-logos full-width items-center">
            <div className="cluster">
              <img loading="lazy" src={liquidsvg} alt="Shopify Liquid" />
              <img loading="lazy" src={reactsvg} alt="React" />
              <img loading="lazy" src={cssvg} alt="CSS3" />
              <img loading="lazy" src={htmlsvg} alt="HTML5" />
              <img loading="lazy" src={javascriptsvg} alt="JavaScript" />
              <img loading="lazy" src={vitejssvg} alt="Vite" />
            </div>
            <div className="cluster">
              <img src={wordpresssvg} alt="WordPress" />
              <img src={shopifysvg} alt="Shopify" />
            </div>
          </div>
        </div>
        {/* 
                1. Statemenent - Hvorfor jeg er god
                2. Hvad jeg tilbyder - udvidet
                3. Bestilt konsulation
                4. Testimonails
            */}
      </section>
    </div>
  );
};

export default AboutPage;
