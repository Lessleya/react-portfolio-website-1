import React from "react";
import "./services.css";
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <sectio id="services">
      <h5>What I Offer?</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          
          <div className="service_head">
            <h3>UX/UI Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
            <li>
              <BiCheck className="service__list"/>
              <p>Lorem, ipsum dolor sit amet</p>
            </li>
          </ul>
        </article>
      </div>
    </sectio>
  )
};

export default Services;
