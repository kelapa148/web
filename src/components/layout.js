import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import SocialLinks from "../components/social-links";

export default ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div className="site-wrapper">
      <header className={"site-header" + (menuOpen ? " menu-open" : "")}>
        <div className="site-title">
          <Link to="/">#COCONUT</Link>
        </div>
        <button
          className={"hamburger" + (menuOpen ? " open" : "")}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-info">
          <p>
            &copy; 2008 - {new Date().getFullYear()} COCONUT Lab &bull; by 1337
            Team
          </p>
          <p className="footer-links">
            <Link to="/join">Join Us Now</Link>
            <span aria-hidden="true">&bull;</span>
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </div>
        <SocialLinks />
        <div className="footer-logo">
          <img
            className="footer-logo-light"
            src="/assets/logos/coconut-footer.png"
            alt="COCONUT Computer Club"
          />
          <img
            className="footer-logo-dark"
            src="/assets/logos/coconut-footer-white.png"
            alt="COCONUT Computer Club"
          />
        </div>
      </footer>
    </div>
  );
};
