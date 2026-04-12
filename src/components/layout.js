import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  inner,
  a,
  mainContainer,
} from "./layout.module.css";
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <header className={container}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
          <span style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            {data.site.siteMetadata.title}
          </span>
        </Link>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={mainContainer}>{children}</main>
    </div>
  );
};

export default Layout;
