import Button from "./Button";

const Hero = () => {
  const handleContact = (event) => {
    const infoContainer = document.querySelector(".contact--container");

    if (infoContainer.classList.contains("visible")) {
      infoContainer.classList.add("fade-out");
    } else {
      infoContainer.classList.add("visible");
      document.querySelector("html").style.overflow = "hidden";
    }
    infoContainer.addEventListener("transitionend", () => {
      if (infoContainer.classList.contains("fade-out")) {
        document.querySelector("html").style.overflow = "";
        infoContainer.classList.remove("visible");
        infoContainer.classList.remove("fade-out");
      }
    });
  };
  return (
    <section className="hero front bg-black">
      <div className="content flex-col">
        {/*}  <h1>
          <span className="firstName">Morten</span>
          <span className="lastName">Nørrehus</span>
  </h1> {*/}
        <h1>Hey! jeg er freelance frontend udvikler</h1>
        {/*} <h2>Jeg laver ting til internettet</h2>
        <h3>
          <i>(Shopify, Liquid, JavaScript, React) </i>
</h3> {*/}
        <span className="subtitle">
          Mit navn er Morten Nørrehus, og jeg hjælper virksomheder med kode,
          fede features og digital sparring der skaber konverteringer!
        </span>
        <Button text="Se hvad jeg har lavet" link="#cases" />
        <button
          className="button contact"
          aria-label="toggle-menu"
          onClick={handleContact}
        >
          eller kontakt mig
        </button>
      </div>
      <div className="arrow"></div>
    </section>
  );
};

export default Hero;
