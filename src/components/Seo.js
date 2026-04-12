import * as React from "react";
import { graphql, useStaticQuery, withPrefix } from "gatsby";

const Seo = ({ title }) => {
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
    <>
      <title>
        {title ? `${title} | ` : ``} {data.site.siteMetadata.title}
      </title>
      <link rel="icon" type="image/svg+xml" href={withPrefix("/favicon.svg")} />
    </>
  );
};

export default Seo;
