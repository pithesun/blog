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
        3년간 Hmall 웹서비스 운영팀에서 상품상세 영역을 담당하며, <br />
        프론트엔드 중심으로 서비스 고도화와 안정화를 이끌었습니다.
        <br /> 개발팀과 긴밀히 협업하여 다양한 프로젝트를 오픈하고, 성능 개선과
        사용자 경험 향상에 주력해왔습니다. <br />
        프론트엔드 기술을 깊이 이해하고, 더 나은 사용자 경험을 만드는 일에
        열정을 가지고 있습니다. <br />
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
