import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import { ArticleSet } from "../../components/Article/Set";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul
        style={{
          display: "flex",
          flexWrap: "nowrap",
          margin: "0 -15px",
          padding: "9px 15px",
          backgroundColor: "#f8f8f8",
          istStyle: "none",
          fontSize: "14px",
          lineHeight: 1,
          fontWeight: 400,
          overflowX: "auto",
        }}
      >
        {data.allMdx.group.map((field) => (
          <li
            style={{
              listStyle: "none",
            }}
          >
            <a
              style={{
                display: "inline-flex",
                justifyContent: "center",
                height: "36px",
                lineHeight: "17px",
                borderRadius: "18px",
                border: "1px solid #eee",
              }}
            >
              {field.fieldValue}
            </a>
          </li>
        ))}
      </ul>

      <ArticleSet blogs={data.allMdx.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
