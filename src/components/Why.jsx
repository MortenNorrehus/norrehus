import Button from "./Button";
import dollar from "/images/dollar.webp";
import business from "/images/business.webp";
import planning from "/images/planning.webp";
import partners from "/images/partners.webp";
import goldbar from "/images/goldbar.webp";
import solidcode from "/images/solidcode.webp";

const Why = () => {
  return (
    <section className="why bg-grey">
      <div className="content items-center">
        <div className="width-small items-center">
          <h3 className="section-subtitle">Hvorfor mig?</h3>
          <h2 className="section-title">
            Målrettet, professionel
            <br />
            og ærlig behandling
          </h2>
          <p>
            Siden 2017 har jeg hjulpet virksomheder med deres digitale
            performance. Min højeste prioritet er at skabe de bedste løsninger
            for mine kunder, så de får mest ud af hver besøgende på deres
            website. Jeg bygger alle de fede features, og kommer med de skarpe
            idéer, der skaber konverteringer.
          </p>
        </div>
        <div className="services">
          <h3 className="section-subtitle items-center">
            Services jeg tilbyder
          </h3>
          <div className="service heart full-width">
            <ul>
              <li>
                <span className="highlight">Temaudvikling</span>
              </li>
              <li>Tilretning af tema</li>
              <li>CRO-Sparring</li>
              <li>Webshop support</li>
              <li>Butiksopsætning og migration</li>
            </ul>
          </div>
          <div className="service half-width">
            <ul>
              <li>
                <span className="highlight">Shopify</span>
              </li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className="service half-width">
            <ul>
              <li>
                <span className="highlight">Liquid</span>
              </li>
              <li>
                <span className="highlight">JavaScript</span>
              </li>
              <li>React</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
        <div className="grid-container">
          <h3 className="section-subtitle">Det du får hos mig</h3>
          <div className="grid no-gap three-columns font-small small-margin">
            <div className="grid-item text-center flex-col">
              <h4>Jeg har altid en plan</h4>
              <img loading="lazy" src={planning} alt="Planning" />
              <p>
                Om du er ny eller rutineret i e-handel og digitale medier, så
                kan jeg være til hjælp. Så slap af, og lad mig guide dig
                igennem.
              </p>
            </div>
            <div className="grid-item text-center flex-col">
              <h4>Gennemsigtige priser</h4>
              <img loading="lazy" src={dollar} alt="Gennemsigtige priser" />
              <p>
                Jeg tror ikke på skjulte omkostninger eller uforudsete udgifter.
                Jeg er meget transparent og står altid ved mit tilbud.
              </p>
            </div>
            <div className="grid-item text-center flex-col">
              <h4>Bundsolid kode</h4>
              <img loading="lazy" src={solidcode} alt="Bundsolid kode" />
              <p>
                Stabilitet, enkelthed og skalérbarhed er grundstenene i mine
                løsninger. Jeg gennemtester alt mit arbejde og sikrer fulde
                responsive løsninger.
              </p>
            </div>
            <div className="grid-item text-center flex-col">
              <h4>Samarbejdspartnere</h4>
              <img loading="lazy" src={partners} alt="Samarbejdspartnere" />
              <p>
                Jeg samarbejder med både tekstforfattere, grafikere og andre
                digitale eksperter. Jeg kan derfor hjælpe med at løse mange
                opgaver – eller sætte dig i forbindelse nogle der kan.
              </p>
            </div>
            <div className="grid-item text-center flex-col">
              <h4>Få mere for pengene</h4>
              <img loading="lazy" src={goldbar} alt="Få mere for pengene" />
              <p>
                I modsætning til store bureauer, har jeg lave fast omkostninger.
                Du betaler derfor for et godt stykke arbejde, og ikke for min
                fredagsbar.
              </p>
            </div>
            <div className="grid-item text-center flex-col">
              <h4>Ekspertviden</h4>
              <img loading="lazy" src={business} alt="Ekspertviden" />
              <p>
                Jeg tilbyder kun services jeg er ekspert i. Alt det andet lader
                jeg andre om.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button text="Mere om mig" link="/about" />
    </section>
  );
};

export default Why;
