import React from "react";
import "./footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
  return ( <footer>
   <div className="footer__socials">
     <a href="https://facebook.com"><FaFacebookF/></a>
     <a href="https://instagram.com"><FiInstagram/></a>
     <a href="https://github.com"><AiFillGithub/></a>
     <a href="https://linkedin.com"><AiFillLinkedin/></a>
   </div>

   <div className="footer__copyright">
     <small>&copy; Lesliee Cruz. All rights reserved.</small>
   </div>

  </footer>);
};

export default Footer;
