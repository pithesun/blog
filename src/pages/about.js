import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h3>안녕하세요, 원주혜입니다</h3>
      <p style={{ lineHeight: "160%", overflowX: "hidden" }}>
        웹 기술, 특히 프론트엔드 개발에 관심이 많아요.
        <br /> 이곳에 한 자, 한 자 채워나가며 <strong>개발자 원주혜</strong>
        로서의
        <br />
        발자취를 담아보려고 합니다.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title={"About Me"} />;

// Step 3: Export your component
export default AboutPage;
