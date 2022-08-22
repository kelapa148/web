import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";

export default ({ children }) => {
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
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
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
      </footer>
    </div>
  );
};
