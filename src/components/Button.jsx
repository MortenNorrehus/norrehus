import phone from "/images/phone.svg";
import { HashLink as Link } from "react-router-hash-link";

const Button = ({ icon, text, link }) => {
  if (icon == "phone") {
    return (
      <a href={link} className="button">
        {text}
      </a>
    );
  }
  return (
    <Link to={link} className="button">
      {text}
    </Link>
  );
};

export default Button;
