import Home from "./Home";
import About from "./AboutPage";
import GetStarted from "./GetStarted";
import { HireMe } from "./HireMe";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/hireme" element={<HireMe />} />
    </Routes>
  );
};

export default Pages;
