import React from "react";
import "./header.css";
import LOGO from "../../assets/logo.png";
import RESUME from "../../assets/resume.pdf";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img className="logo" src={LOGO} alt="logo" />
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>

          <li>
            <a href="#">Skills</a>
          </li>
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
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
