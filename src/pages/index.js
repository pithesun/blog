// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="home page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src={"../images/중문해수욕장.jpeg"} />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title={"Home Page"} />;

// Step 3: Export your component
export default IndexPage;
