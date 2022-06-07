import React from 'react'
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faFaceB } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-footer">
        <div class="the-row">
          <div class="footer-col">
            <h4>MokeyPox</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Suivez-nous</h4>
            <div class="social-links">
{/*               <Link to=""><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link to=""><FontAwesomeIcon icon={faInstagram} /></Link> */}
            </div>
            <div className='allRightsContainer'>
            <h3 className='allRights'> All Rights Reserved </h3>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer