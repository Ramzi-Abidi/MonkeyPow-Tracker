import React from 'react'
import "./footer.css" ;

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-footer">
        <div class="the-row">
          <div class="footer-col">
            <h4>EPACT</h4>
            <ul>
              <li>Home</li>
              <li>Contact us</li>
              <li>Cart</li>
              <li>à propos</li>

            </ul>
          </div>

          <div class="footer-col">
            <h4>Suivez-nous</h4>
            <div class="social-links">
              <a href="" target={"_blank"}><i class="fab fa-facebook-f"></i></a>
              <a to="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer