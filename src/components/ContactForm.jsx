import React, { useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [storeurl, setStoreurl] = useState("");
  const [submit, setSubmit] = useState(false);

  const headline = "🎉  *NY BESKED* 🎉 ";

  async function submitForm(e) {
    e.preventDefault();

    if (name == "" && email == "" && message == "") {
      alert("Du mangler at udfylde nogle af felterne");
      return;
    }

    const spinner = document.querySelector(".spinner");
    const submitButton = document.querySelector(".button span");

    const webhookUrl =
      "https://hooks.slack.com/services/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";

    const data = {
      type: "mkrdown",
      text: `${headline} \n Name: ${name} \n Email: ${email} \n Message: ${message}`,
    };

    let res = await axios.post(webhookUrl, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers.post["Content-Type"];
          return data;
        },
      ],
    });

    if (res.status === 200) {
      // alert("Message Sent!");
      //clear state so text boxes clear
      setName("");
      setEmail("");
      setMessage("");
      submitButton.innerHTML = "";
      spinner.style.display = "block";

      setTimeout(() => {
        setSubmit(true);
      }, "2000");
    } else {
      alert("There was an error.  Please try again later.");
    }
  }
  return (
    <section className="contactform bg-black">
      <div className="flex content white-text">
        <h1 className="text-center">Skal vi komme igang?</h1>
        <h3 className="subtitle text-center width-small">
          Hey, du er kommet så langt - skal vi så ikke lige gøre det færdigt?
        </h3>
        {!submit && (
          <p className="white-text width-small text-center">
            <br />
            Udfyld formularen herunder, så er du hurtigt igang,
            <br /> ellers kan du kontakte mig via mail, telefon eller Linkedin
          </p>
        )}
        {!submit && (
          <div className="contact-form">
            <form>
              <div className="form-input">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Navn*
                </label>
                <input
                  className=""
                  id="name"
                  type="text"
                  placeholder="Fornavn - efternavn"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="form-input">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Hvilken mail kan jeg fange dig på*?
                </label>
                <input
                  className=""
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-input">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Har du et telefonnummer?
                </label>
                <input
                  className=""
                  id="phone"
                  type="tel"
                  placeholder="20 85 36 93"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="form-input">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="store-url"
                >
                  Addresse til din webshop (hvis du har en)
                </label>
                <input
                  className=""
                  id="store-url"
                  type="url"
                  placeholder="Hjemmeside"
                  value={storeurl}
                  onChange={(e) => {
                    setStoreurl(e.target.value);
                  }}
                />
              </div>

              <div className="form-input">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Hvad vil du gerne have hjælp til*
                </label>
                <textarea
                  className=""
                  id="message"
                  type="textarea"
                  placeholder="Jeg vil gerne have hjælp til..&#10;- Ny Feature&#10;- Support&#10;- CRO&#10;......"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>

              <button className="button" onClick={(e) => submitForm(e)}>
                <Spinner />
                <span>Send</span>
              </button>
            </form>
          </div>
        )}
        {submit && (
          <div className="success-message">
            <p className="featured-statement white-text width-small">
              <br />
              Tak for din besked!
              <br />
              Jeg vender tilbage hurtigst muligt -<br />
              <span className="highlight text-black">
                ofte er det inden for en dag.
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
