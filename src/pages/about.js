import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/layout";
import { Contact } from "../components/Contact";
import { WorkExperience } from "../components/WorkExperience";
import { Education } from "../components/Education";

const AboutPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h3>안녕하세요, 3년차 웹개발자 원주혜입니다</h3>
      <p style={{ lineHeight: "160%", overflowX: "hidden" }}>
        3년간 Hmall의 웹 서비스 운영팀에서 상품 상세의 프런트엔드와 백엔드
        개발을 담당하였습니다. <br />
        운영팀 담당자로서 개발팀과 협업하여 크고 작은 프로젝트를 오픈하고
        운영하였으며, <br />
        운영 도중 생기는 이슈들에 대응하였습니다. <br />
        주로 프론트엔드 개발 기술에 관심이 많습니다.
      </p>
      <Contact />
      <br />
      <WorkExperience />
      <Education />
    </Layout>
  );
};

export const Head = () => <Seo title={"About Me"} />;

// Step 3: Export your component
export default AboutPage;
