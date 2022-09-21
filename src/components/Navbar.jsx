import logo from "/images/MortenNorrehus.webp";
import burger from "/images/burger.png";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        handleContact();
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

  const handleMobileNav = () => {
    const mobileToggle = document.querySelector(".navbar-toggler");
    mobileToggle.classList.toggle("is-active");
  };

  const handleNav = () => {
    const navContainer = document.querySelector(".navigation");
    navContainer.classList.toggle("revealed");
  };

  return (
    <nav className="navbar bg-black">
      <div className="content">
        {/*} <NavLink to="/">
          <div className="logo">
            <img loading="lazy" src={logo} alt="Morten Nørrehus Logo"></img>
            <div className="info">
              <span id="name">Morten Nørrehus</span>
              <span id="title">Shopify Partner & Udvikler</span>
            </div>
          </div>
  </NavLink> {*/}
        <div className="navigation">
          <button className="navigation--toggle" onClick={handleNav}>
            <img src={burger} />
          </button>
          <div className="navigation--container">
            <ul className="navbar-nav">
              <li onClick={handleNav}>
                <a href="/">
                  Forside
                  <span className="sub">Ryk tilbage til start</span>
                </a>
              </li>
              <li onClick={handleNav}>
                <a href="/#cases">
                  Mit arbejde
                  <span className="sub">Et lille udpluk af alt det lækre</span>
                </a>
              </li>
              <li onClick={handleNav}>
                <NavLink to="about">
                  Om Mig <span className="sub">The man, the myth</span>
                </NavLink>
              </li>
              <li onClick={handleNav}>
                <button
                  id="contact"
                  aria-label="toggle-menu"
                  onClick={handleContact}
                >
                  Kontakt
                  <span className="sub">Let's talk business</span>
                </button>
              </li>
              <li onClick={handleNav}>
                <NavLink to="getstarted">
                  Kom igang <span className="sub">Skip the chit-chat</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* }<div className="nav--container">
          <button className="navbar-toggler" onClick={handleMobileNav}>
            <span className="navbar-toggler--icon"></span>
          </button>

          <ul className="navbar-nav">
            <li>
              <a href="/#cases">Mit arbejde</a>
            </li>
            <li>
              <NavLink to="about">Om Mig</NavLink>
            </li>
            <li>
              <button
                id="contact"
                aria-label="toggle-menu"
                onClick={handleContact}
              >
                Kontakt
              </button>
            </li>
            <li>
              <NavLink to="getstarted">Kom igang</NavLink>
            </li>
          </ul>
  </div> {*/}
      </div>
    </nav>
  );
};

export default Navbar;
