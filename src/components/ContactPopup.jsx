import { useEffect } from "react";

const ContactPopup = () => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        handleContact(event);
      }
    });
  }, []);

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
    <div className="contact--container">
      <div className="info--container">
        <span id="contactclose" onClick={handleContact}></span>
        <h2>Kontakt mig</h2>
        <p>
          Har du spørgsmål, eller har du brug for hjælp til et problem. Så må du
          endelig give mig et kald!
          <br /> - jeg lover at tage telefonen 😄
        </p>
        <div className="contact--info">
          <a href="tel:20853693">Tlf: 20 85 36 93</a>
          <a href="mailto:kontakt@mortennorrehus.dk">Email</a>
          <a target="_blank" href="https://www.linkedin.com/in/mortennorrehus/">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="contact--overlay"></div>
    </div>
  );
};

export default ContactPopup;
