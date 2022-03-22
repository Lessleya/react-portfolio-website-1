import React from "react";
import "./about.css";
import ME from "../../assets/ME.jpg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return <section id="about">

    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about_me">
        <div className="about-me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">

        <div className="about__cards">
          <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Experience</h5>
            <small>1 + Years Working</small>
          </article>
        </div>
      </div>
      <div className="about__content">

<div className="about__cards">
  <article className="about__card">
    <VscFolderLibrary className="about__icon"/>
    <h5>Experience</h5>
    <small>1 + Years Working</small>
  </article>
</div>
</div>
<div className="about__content">

<div className="about__cards">
  <article className="about__card">
    <FaAward className="about__icon"/>
    <h5>Projects</h5>
    <small>5 + Projects Completed</small>
  </article>
</div>
<p>
Hello again! Thanks for scrolling this far!! 🤗 I currently study Software Engineering with an emphasis in Web Development at Brigham Young University-Idaho (love Idaho✨). I also got my Associetes in Web Design & Development and a Graphic Design Certificate. Other than coding and design, I spend most of my free time painting(I love art✨) or drawing. 🤓 I've also been trying to learn chess so feel free to reach out to me if you wanna play!✨
</p>
<a href="#contant" className="btn btn-primary">Let's Talk</a>
</div>
    </div>
  </section>;
};

export default About;
