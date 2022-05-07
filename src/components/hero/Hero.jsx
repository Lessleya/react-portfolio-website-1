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
      <h1>  Hola! My name is Lesliee Cruz I'm a</h1>
        <div className="static-txt"></div>
          <ul className="dynamic-txts">
            <li><span>PRODUCT MANAGER</span></li>
            <li><span>UX/UI DESIGNER</span></li>
            <li><span>WEB DEVELOPER</span></li>
            <li><span>SOFTWARE ENGINEER</span></li>
          </ul>
        </div>
        <p></p>
        
    </div>
  )
}

export default hero