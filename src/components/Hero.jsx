import Button from "./Button";

const Hero = () => {
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
      </div>
      <div className="arrow"></div>
    </section>
  );
};

export default Hero;
