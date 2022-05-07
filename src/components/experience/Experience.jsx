import React from "react";
import "./experience.css";
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3Full} from 'react-icons/di';
import {IoLogoJavascript} from 'react-icons/io';
import {DiSass} from 'react-icons/di';
import {DiReact} from 'react-icons/di';
import {SiAdobexd} from 'react-icons/si';
import {FiFigma} from 'react-icons/fi';
import {SiAdobe} from 'react-icons/si';
import {HiOutlineCursorClick} from 'react-icons/hi';
import {BsLaptop} from 'react-icons/bs';
import {BiUserCheck} from 'react-icons/bi';
import {MdBusinessCenter} from 'react-icons/md';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {BiData} from 'react-icons/bi';
import {ImUsers} from 'react-icons/im';

const Experience = () => {
  return <section id="experience">
    <h5>My Skills</h5>
    <h2>My Experience</h2>

    <div className="containerexperience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <AiFillHtml5/>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <DiCss3Full/>
            <h4>CSS</h4>
            <small className="text-light">Intermediate</small>
          </article>
          <article className="experience__details">
            <DiSass/>
            <h4>SASS</h4>
            <small className="text-light">Intermediate</small>
          </article>
          <article className="experience__details">
            <IoLogoJavascript/>
            <h4>JavaScript</h4>
            <small className="text-light">Begginer</small>
          </article>
          <article className="experience__details">
            <DiReact/>
            <h4>React</h4>
            <small className="text-light">Begginer</small>
          </article>
        </div>
      </div>

      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <AiFillHtml5/>
            <h4>Node JS</h4>
            <small className="text-light">Begginer</small>
          </article>
          <article className="experience__details">
            <DiCss3Full/>
            <h4>Mongo DB</h4>
            <small className="text-light">Begginer</small>
          </article>
          <article className="experience__details">
            <DiSass/>
            <h4>MySQL</h4>
            <small className="text-light">Intermediate</small>
          </article>
          <article className="experience__details">
            <IoLogoJavascript/>
            <h4>Python</h4>
            <small className="text-light">Intermediate</small>
          </article>
          <article className="experience__details">
            <DiReact/>
            <h4>PHP</h4>
            <small className="text-light">Begginer</small>
          </article>
        </div>
      </div>

      <div className="experience__uxdesign">
        <h3>UX/UI Design</h3>
        <div className="experience__content">
          <article className="experience__details">
            <SiAdobexd/>
            <h4>Adobe XD</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <FiFigma/>
            <h4>Figma</h4>
            <small className="text-light">Intermadiate</small>
          </article>
          <article className="experience__details">
            <SiAdobe/>
            <h4>Adobe Creative Suit</h4>
            <small className="text-light">Intermediate</small>
          </article>
          <article className="experience__details">
            <HiOutlineCursorClick/>
            <h4>Prototyping</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <BsLaptop/>
            <h4>Wireframing</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <BiUserCheck/>
            <h4>Usability Testing</h4>
            <small className="text-light">Experienced</small>
          </article>
        </div>
      </div>

      <div className="experience__productmanagement">
        <h3>Product Management</h3>
        <div className="experience__content">
          <article className="experience__details">
            <MdBusinessCenter/>
            <h4>Business Acumen</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <AiOutlineShoppingCart/>
            <h4>Product Design</h4>
            <small className="text-light">Intermadiate</small>
          </article>
          <article className="experience__details">
            <FiUsers/>
            <h4>User Empathy</h4>
            <small className="text-light">Intermediate</small>
          </article>
          <article className="experience__details">
            <BiData/>
            <h4>Data Analysis</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <ImUsers/>
            <h4>Agile</h4>
            <small className="text-light">Experienced</small>
          </article>
        </div>
      </div>
    </div>
  </section>;
};

export default Experience;
