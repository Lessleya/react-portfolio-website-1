import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Get it done" />
            </div>
          <h3>Get it done</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, saepe quod natus non harum facilis qui cupiditate tempore fuga sit exercitationem ducimus praesentium, totam mollitia! Ipsum distinctio eaque aliquam labore.</p>
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Get it done" />
            </div>
          <h3>PASS</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus repellat aperiam temporibus, distinctio natus, illo excepturi corporis unde, ipsum fugiat quasi reiciendis labore. Voluptatum, excepturi totam eveniet culpa ullam ab.</p>
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Get it done" />
            </div>
          <h3>VIMA</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem assumenda sapiente consectetur natus accusamus nobis ea autem magni. Dolorum quibusdam illum modi, odio dolores eius? Ipsum cum voluptatem accusamus?</p>
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Get it done" />
            </div>
          <h3>  I-BALANCE</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fuga laboriosam ipsa corporis cumque nesciunt laborum eum et eos iusto! Dolorem dignissimos doloribus fugiat! Tempore laborum assumenda ipsa incidunt repudiandae.</p>
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
};

export default Portfolio;
