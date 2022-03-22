import React from 'react'
import "./hero.css"
import ME from "../../assets/mee.png"

const hero = () => {
  return (
    <div className='hero__content'>
      <div className="logo">
      <img src={ME} alt="Lesliee Itzel Cruz Ceron" />
      
      </div>
      <div class="wrapper">
      <h1>Hola! My name is <span>Lesliee Cruz</span></h1>
        <div className="static-txt">I'm a</div>
          <ul className="dynamic-txts">
            <li><span>PRODUCT MANAGER</span></li>
            <li><span>UX/UI DESIGNER</span></li>
            <li><span>WEB DEVELOPER</span></li>
            <li><span>SOFTWARE ENGINEER</span></li>
          </ul>
        </div>
        
    </div>
  )
}

export default hero