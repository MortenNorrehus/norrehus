import kennyLogo from "/images/ka-logo-kvard_grey.svg";
import dogcoachLogo from "/images/DogCoach-logo.svg";
import luciaLogo from "/images/Lucia_grey.svg";
import nordbaekLogo from "/images/NORDBAEK_LOGO_POS_grey.svg";
import fugleLogo from "/images/fuglemysli_grey.svg";

const Clients = () => {
  return (
    <section className="">
      <div className="content">
        <h2>Brands jeg har hjulpet</h2>
        <div className="client-logos">
          <img src={kennyLogo} alt="Kenny Anker" />
          <img src={luciaLogo} alt="Lucia Care" />
          <img src={dogcoachLogo} alt="DogCoach" />
          <img src={nordbaekLogo} alt="NORDBAEK" />
          <img src={fugleLogo} alt="Fuglemysli" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
