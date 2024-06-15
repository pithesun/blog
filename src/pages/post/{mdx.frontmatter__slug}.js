import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h1 style={{ margin: "0.2em" }}>{data.mdx.frontmatter.title}</h1>
      <p style={{ margin: 0, padding: "0 8px", opacity: 0.5 }}>
        {data.mdx.frontmatter.date}
      </p>
      {children}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: 360,
          margin: "44px 0 0 0",
        }}
      >
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
          imgStyle={{ maxWidth: 360, height: "auto" }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
