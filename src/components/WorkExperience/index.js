import * as React from "react";
import { WorkExperienceRow } from "../WorkExperienceRow";
import { row, rowLeft, rowRight } from "./style.module.css";

export const WorkExperience = () => {
  return (
    <>
      <h2>Work Experience</h2>
      <div className={row}>
        <div className={rowLeft}>
          <h3>현대퓨처넷(현대아이티앤이).</h3>
          <span>2022.1.3~</span>
        </div>
        <div className={rowRight}>
          <WorkExperienceRow
            title={"Hmall 상품상세(2022.01 ~ 현재)"}
            description={"제품의 유지보수"}
            didlist={[
              "실시간 품절 상품에 대한 구매레이어의 엣지 케이스 처리 및 오류 수정",
              "잘못된 의존성을 가진 useEffect 및 호출구조로 인한 API 과다 호출 개선 경험",
              "네트워크 비용 효율화 및 빠른 이미지 노출을 위한 이미지 사이즈 조정 및 lazyloading 적용",
              "불필요한 컬럼 및 로직으로 클라이언트의 네트워크 다운로드 시간 지연 및 API 속도 지연 개선 - API 응답시간 약 74% 감소 및 네트워크 다운로드 크기 약 80% 감소 ",
              "홈쇼핑 방송상품 상세페이지 내 비디오 자동재생 개발 및 여러 비디오 사용자 인터랙션에 대한 방어처리",
              "비즈니스 요구사항에 빠른 대응을 위해 필요값 상수화 및 어드민 제어 가능하도록 개발",
            ]}
          />
          <WorkExperienceRow
            title={"Hmall 차세대 프로젝트 (2023.06~2024.01)"}
            description={`레거시(jsp/Spring Framework)에서 react/nextjs, Spring Boot로 기술스택 및 설계
              변경하는 차세대 프로젝트 및 안정화 작업에 참여`}
            didlist={[
              "상품상세 영역 IA 문서 작성 및 정책 정리",
              "차세대 프로젝트 테스트 지원 (테스트 케이스 정의)",
              `기존 기능 이관 개발(model-viewer 라이브러리를 활용한 glb 파일 노출, 재입고 알림 배치)`,
              `실시간 혜택가 redis 설정 오류로 변경이 되지
              않는 이슈/ Exception handling 오류로 인해 특정 API uuid 토큰
              발행하지 못하는 이슈/ feign client 도입`,
            ]}
          />
          <WorkExperienceRow
            title={"AI상품평 분석 솔루션 도입 프로젝트(2023.01~2023.03)"}
            description={`외부 ai분석 솔루션을 사용하여 도출된 키워드를 바탕으로
              키워드별 상품평 리스트와 하이라이팅된 상품평 텍스트를 전달하여
              상품평의 가독성 증대`}
            didlist={[
              `외부 솔루션을 사용하는만큼 서버 간 통신 포맷을 통일하기 위해 자사
              상품평 포맷에 맞게끔 데이터 가공처리`,
              "상품평 탭 진입 시 상품평 키워드 노출 및 키워드별 상품평 리스트를 전시",
            ]}
          />
          {/* <ul>
            <li>재입고 알림</li>
          </ul>
          <ul>
            <li>베스트 상품평</li>
            상단 리뉴얼
          </ul> */}
        </div>
      </div>
    </>
  );
};
