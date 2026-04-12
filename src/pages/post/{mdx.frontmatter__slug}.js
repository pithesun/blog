import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./post.module.css";

const BlogPost = ({ data, children }) => {
  const image = data.mdx.frontmatter.hero_image
    ? getImage(data.mdx.frontmatter.hero_image)
    : null;

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className={styles.article}>
        {image && (
          <div className={styles.heroWrapper}>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
              className={styles.heroImage}
              objectFit="cover"
            />
          </div>
        )}
        <header className={styles.header}>
          <time className={styles.date}>{data.mdx.frontmatter.date}</time>
          <h1 className={styles.title}>{data.mdx.frontmatter.title}</h1>
        </header>
        <div className={styles.content}>{children}</div>
      </article>
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
