import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Footer(){
    return(
        <footer className="footer fixed-bottom">
        <div className="conatiner copyright">
          <span className="text-muted">© 2020 Christoph Dominy</span>
          <a href="https://github.com/cldominy"><FontAwesomeIcon className="footerIcon" icon={faGithub} size="2x"/></a>
          <a href="https://www.linkedin.com/in/christoph-dominy/"><FontAwesomeIcon className="footerIcon" icon={faLinkedin} size="2x"/></a>
          <a href="mailto: cdominy@utexas.edu"><FontAwesomeIcon className="footerIcon" icon={faEnvelope} size="2x"/></a>
        </div>
      </footer>
    );
}

export default Footer;