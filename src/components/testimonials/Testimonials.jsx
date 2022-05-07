import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import ADD from "../../assets/add.png"

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Guest Book</h5>
      <h2>See what other people thinks about my work. Feel free to leave a coment!</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar" />
            <h5 className="client__name">Sean Murdock</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores dolores officiis tenetur consequatur voluptates eveniet ad! Quibusdam laudantium quos eos atque odit eligendi. Labore itaque magnam totam perspiciatis placeat.</small>
          </div>
        </article>
      </div>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar" />
            <h5 className="client__name">Sean Murdock</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores dolores officiis tenetur consequatur voluptates eveniet ad! Quibusdam laudantium quos eos atque odit eligendi. Labore itaque magnam totam perspiciatis placeat.</small>
          </div>
        </article>
      </div>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar" />
            <h5 className="client__name">Sean Murdock</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores dolores officiis tenetur consequatur voluptates eveniet ad! Quibusdam laudantium quos eos atque odit eligendi. Labore itaque magnam totam perspiciatis placeat.</small>
          </div>
        </article>
      </div>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={ADD} alt="avatar" />
            <h5 className="client__name">Leave a coment</h5>
            
          </div>
        </article>
      </div>
    </section>
    
  );
};

export default testimonials;
