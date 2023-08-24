import "./Navbar.scss";
import NavEl from "../../atoms/NavEl/NavEl";
import Button from "../../atoms/Button/Button";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  const navLinks = [
    "Home",
    "About Us",
    "Portofolio",
    "Management Profile",
    "Careers",
  ];

  return (
    <nav>
      <a href="">
        <img src={logo} alt="Spatium Logo" />
      </a>
      <div className="nav__links">
        {navLinks.map((link, index) => (
          <NavEl link={link} key={index} />
        ))}
      </div>
      <Button text="Contact Us" />
    </nav>
  );
};

export default Navbar;
