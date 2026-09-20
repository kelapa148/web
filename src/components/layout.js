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
        <p>
          &copy; {new Date().getFullYear()} Coconut Lab &bull; Crafted with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>
          &nbsp; by <a href="https://github.com/kelapa148">kelapa148</a>
        </p>
        <SocialLinks />
      </footer>
    </div>
  );
};
