import React from 'react'
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faFaceB } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-footer">
        <div class="the-row">
          <div class="footer-col">
            <h4>MPox.info</h4>
            <ul>
              <div className='allRightsContainer'>
                <a href="https://github.com/ZakariaBouguira/MonkeyPox" target={"_blank"} className="footerLinks">
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2rem", paddingLeft: "2px" }}>
                  </FontAwesomeIcon>
                </a>
                <a href='https://github.com/ZakariaBouguira/MonkeyPox' target={"_blank"} className="footerLinks">Link To Data</a>
              </div>
            </ul>
          </div>

          <div class="footer-col">
            <div class="social-links">
              {/* <h3> All Rights Reserved </h3> */}
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;