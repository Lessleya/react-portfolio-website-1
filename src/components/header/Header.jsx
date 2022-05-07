import React from "react";
import "./header.css";
import LOGO from "../../assets/le.png";
import RESUME from "../../assets/resume.pdf";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img className="logo" src={LOGO} alt="logo" />
        <ul>
          <li>
            <a href={RESUME} download className="btn  ">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="btn btn-primary ">
              Let's Talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
