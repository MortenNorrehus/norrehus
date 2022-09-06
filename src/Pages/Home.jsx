import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hero from "../components/Hero";
import Cases from "../components/cases/Cases";
import Why from "../components/Why";
import About from "../components/About";
import Clients from "../components/Clients";
import GoodFit from "../components/GoodFit";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <Why />
      <About />
      <GoodFit />
      <Clients />
      <Cases />
      <Testimonials />
    </div>
  );
}

export default Home;
