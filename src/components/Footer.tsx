import React from "react";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand / Logo */}
        <div className="footer__brand">
          {/* If you prefer text instead of an SVG, replace the img with <span>Blogr</span> */}
          <img src="src/assets/Images/logo.svg" alt="Blogr" />
        </div>

        {/* Columns */}
        <nav className="footer__cols" aria-label="Footer">
          <div className="footer__col">
            <h4 className="footer__heading">Product</h4>
            <ul className="footer__list">
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#marketplace">Marketplace</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#integrations">Integrations</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__list">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Connect</h4>
            <ul className="footer__list">
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#newsletter">Newsletter</a>
              </li>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
