import dogcoachCase from "/images/dogcoach_case.webp";
import luciaCase from "/images/luciacare_case.webp";
import kennyanker from "/images/kennyanker_case.webp";
import Case from "./Case";

const Cases = () => {
  return (
    <section id="cases" className="cases">
      <div className="content items-center">
        <div className="width-small items-center">
          <h3 className="section-subtitle">Portfolio</h3>
          <h2 className="section-title">
            Vil du se hvad jeg har lavet?
            <br />
            Så tag et kig herunder..
          </h2>
          <p>
            Jeg har lavet så meget, men det må jeg desværre ikke vise. Men her
            kan du heldigvis se, nogle af de cases jeg har fået lov til, at
            fremvise.
          </p>
        </div>
        <div className="cases-wrapper">
          <Case
            position={"left"}
            image={dogcoachCase}
            title="DogCoach"
            subtitle="Konverteringsoptimering"
            link="https://dogcoach.dk"
            text={
              "I samarbejde med DogCoach har vi fokuseret på optimering af den nu værende webshop. Fokusområderne var hastighed og konverteringsoptimering. I den forbindelse har jeg sammen med en webdesigner implementeret nyt konverteringsoptimeret design, samt fokuseret på at øge sidens hastighed og generelle brugeroplevelse."
            }
          />

          <Case
            position={"right"}
            image={luciaCase}
            title="Lucia Care"
            subtitle="Skabe en selvskørende webshop"
            link="https://luciacare.com"
            text={
              "Hos Lucia Care har jeg lavet en webshop hvor den daglige drift er automatiseret. Det er gjort ved at opsætte automatisk håndtering af ordre mellem webshop og lager, den anden er automatiske kampagner."
            }
          />

          {/*}  <Case
            position={"left"}
            image={kennyanker}
            title="Kenny Anker"
            subtitle="dshgshs"
            text={""}
          />
          {*/}
        </div>
      </div>
    </section>
  );
};

export default Cases;
