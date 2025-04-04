import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { ArticleSet } from "../components/Article/Set";
import { Categories } from "../components/Categories";
import { useState } from "react";
import { DEFAULT_LABEL } from "../constants";

const BlogPage = ({ data }) => {
  const [selectedLabel, setSelectedLabel] = useState(DEFAULT_LABEL);

  return (
    <Layout pageTitle="My Blog Posts">
      <Categories
        categories={data.allMdx.group}
        selectedLabel={selectedLabel}
        onSelect={setSelectedLabel}
      />
      <ArticleSet
        blogs={
          selectedLabel === DEFAULT_LABEL
            ? data.allMdx.nodes
            : data.allMdx.group
                ?.filter((field) => {
                  return (
                    String(field.fieldValue).toLowerCase() ===
                    String(selectedLabel).toLowerCase()
                  );
                })?.[0]
                .edges?.flatMap((edge) => edge.node)
        }
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          slug
        }
        id
        excerpt
      }
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY.MM.DD")
              title
              slug
            }
            id
            excerpt
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
