import morten from "/images/Morten.webp";

const About = () => {
  return (
    <section className="about bg-grey">
      <div className="content items-center">
        <div className="width-small items-center">
          <h3 className="section-subtitle">OM MIG</h3>
          <h2 className="section-title">Så, hvem er Morten?</h2>
        </div>
        <img loading="lazy" src={morten} alt="Morten Nørrehus" />
        <p className="width-small">
          Jeg er freelanceudvikler og digital konsulent
          <br />
          <br /> Hos mig får du altid en målrettet, professionel og ærlig
          behandling. Jeg påtager mig kun de opgaver jeg er ekspert i, men
          arbejder gerne med samarbejdspartnere. Det er vigtigt for mig, at tage
          udgangspunkt i din nuværende position og sikre løsninger, der passer
          til dine ønsker og behov.
        </p>
      </div>
    </section>
  );
};

export default About;
