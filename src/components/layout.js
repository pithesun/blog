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
import CommonLogo from "./Common/Logo";

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
    <div style={{ margin: "auto" }}>
      <header className={container}>
        <Link to="/">
          <CommonLogo />
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
