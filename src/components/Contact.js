import React from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-content">
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
              <a href="mailto:zubenkalyan87@gmail.com">
                zubenkalyan87@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <FontAwesomeIcon icon={faPhone} size="2x" color="white"/>
              <a href="tel:+919304330584">+91 9304330584</a>
            </div>

            <div className="contact-detail">
              <FontAwesomeIcon icon={faHome} size="2x" color="white" />
              <address>JAMSHEDPUR, India</address>
            </div>
          </div>

          <div className="social">
            <h2>Socials</h2>
            <div className="social-icons">
              <a href="https://www.facebook.com/zuben.kalyan?mibextid=ZbWKwL">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>

              <a href="https://www.github.com/your-username">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>

              <a href="https://www.instagram.com/zubenkalyan_2412/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>

              <a href="https://www.linkedin.com/in/zuben-k-85431612a/">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
