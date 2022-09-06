import Button from "./Button";
import github from "/images/github.svg";
import linkedin from "/images/linkedin.svg";
import mail from "/images/envelope.svg";

const Footer = () => {
  return (
    <section className="footer bg-black">
      <div className="content">
        <h3>Get in Touch</h3>
        <p className="footer-info">
          Jeg vil altid gerne høre om nye muligheder og projekter. Hvis du er på
          udkigt efter udvikler-hjælp, eller har andre spørgsmål skal du
          absolute ikke tøve med at kontakte mig.
        </p>
        <Button icon="phone" text="20 85 36 93" link="tel:20853693" />
        <div className="links">
          <a target="_blank" href="https://github.com/MortenNorrehus">
            <img src={github} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mortennorrehus/">
            <img src={linkedin} />
          </a>
          <a target="_blank" href="mailto:morten@raincode.dk">
            <img src={mail} />
          </a>
        </div>
        <div className="footer--bottom">
          <p>Denne side er bygget med Vite, React og er hostet af Netlify</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
