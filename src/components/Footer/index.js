import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return(
    <div className="footer-div">
      <footer className="footer fixed-bottom">
        
        {/* Social Media Links */}
        <nav className="social">
          
          <a className="social-links" id="github-link" href="https://github.com/dsarra1018" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          
          <a className="social-links" id="gmail-link" href="mailto:adriansarra18@gmail.com" target="_blank">
            <i class="fas fa-envelope"></i>
          </a>
          
          <a className="social-links" id="linkedin-link" href="https://www.linkedin.com/in/darren-sarra-b6718119b/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </nav>

        {/* Nav Links */}
        <nav className="footer-nav">
          
          <ul className="nav-links-list">
            
            <li className="nav-links">
              <Link className="links" to="/">HOME</Link>
            </li>
            
            <li className="nav-links">
              <Link className="links" to="/about">ABOUT</Link>
            </li>
            
            <li className="nav-links">
              <Link className="links" to="/projects">PROJECTS</Link>
            </li>
            
            <li className="nav-links">
              <Link className="links" to="/contact">CONTACT</Link>
            </li>
          </ul>

        </nav>
        
        {/* Copyright */}
        <div className="copyright">
          ©2020 DARREN SARRA
        </div>
      </footer>
    </div>
  )
}

export default Footer;