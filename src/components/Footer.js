import React from 'react'
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faFaceB } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
            <h4>Social Media</h4>
            <div class="social-links">
{/*               <Link to=""><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link to=""><FontAwesomeIcon icon={faInstagram} /></Link> */}
            </div>
            <div className='allRightsContainer'>
              <FontAwesomeIcon icon={faGithub} style={{fontSize:"2rem",paddingLeft:"2px"}}/>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer ;