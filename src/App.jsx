import Pages from "./Pages/Pages";
import Navbar from "./components/Navbar";
import ContactPopup from "./components/ContactPopup";

import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Pages />
        <ContactPopup />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
