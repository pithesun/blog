import * as React from "react";
import { WorkExperienceRow } from "../WorkExperienceRow";
import { row, rowLeft, rowRight } from "./style.module.css";

export const WorkExperience = () => {
  return (
    <>
      <h2>Work Experience</h2>
      <div>
        <div className={rowLeft}>
          <h3>현대퓨처넷(구 현대아이티앤이).</h3>
          <span>2022.1.3~</span>
        </div>
        <div className={rowRight}>
          <WorkExperienceRow
            title={"[2025.07~] Playwright E2E 테스트 환경 도입 및 CI/CD 통합"}
            description={
              "Playwright 기반 E2E 테스트 환경을 CI/CD 파이프라인에 통합하여 자동화된 실행 환경 구축."
            }
            issueList={[
              "상품상세의 구매버튼, 로그인 전환, 옵션 선택 등 핵심 플로우 오류가 직접적으로 매출에 영향을 주는 영역으로, 자동화 테스트 필요성이 높음.",
              "상품상세의 구매로직과 관련된 비즈니스 요청사항의 변경 주기가 잦아, 기능 회귀 테스트를 매번 수동으로 진행하는 데 많은 리소스가 소요됨",
              "E2E 테스트 자동화 도구로 Playwright를 선정하여 테스트 스크립트를 작성하고, 도커 기반 CI/CD 파이프라인에 통합.",
            ]}
            didlist={[
              "상품상세 구매로직 변경에 대응하는 테스트 리소스 절약 및 배포주기 단축",
              "필수 기능에 대한 신속한 회귀 테스트로 안정성 향상",
              "인프라팀과의 협업을 통해 CI/CD 파이프라인에 E2E 테스트 단계를 추가하여 자동화된 테스트 실행 환경 구축",
            ]}
            teckstack={"Playwright, TypeScript, Docker, tekton, argoCD"}
          />
          <WorkExperienceRow
            title={
              "[2025.05] 상품상세 설명서 이미지 CDN 예상 트래픽 보고서 알리미 신설"
            }
            description={
              "방송상품 설명서 이미지의 CDN 비용 증가를 사전 방지하기 위해, 실제 전시 이미지 기반 API를 Next.js API Route로 개발."
            }
            issueList={[
              "방송상품의 설명서 이미지가 CDN 비용 증가의 주요 원인으로 파악되어, 실제 전시된 이미지 기반으로 예상 트래픽 보고서를 산출하는 API 개발 필요",
              "방송상품 설명서 이미지의 CDN 비용 증가를 사전 방지하기 위해, 실제 전시 이미지 기반 API를 Next.js API Route로 개발.",
            ]}
            didlist={[
              "상품코드만으로 최적화된 설명서 이미지 접근 가능.",
              "CDN 예산 계획에 활용될 수 있는 보고서 자동화 기반 제공.",
              "기존 DB조회가 아닌, 프론트에서 캐싱·최적화된 결과를 재활용해 정합성 높은 이미지 데이터를 제공.",
            ]}
            teckstack={"typescript, React, Next.js"}
          />
          <WorkExperienceRow
            title={
              "[2025.1~2025.3] 상품상세 스켈레톤 UI 영역 확대와 진입 속도 개선"
            }
            description={
              "스켈레톤 UI 개선과 API 최적화를 통한 진입 속도 및 CLS 지표 개선"
            }
            issueList={[
              "상품상세 진입 시 구매버튼이 바로 뜨지 않아 불편하다는 현업의 피드백을 반영하여, 스켈레톤 UI 영역 확대 필요",
              "상품상세 진입 시 구매버튼 노출 지연과 UX 저하 원인을 DevTools, WebVitals로 분석해 CLS 핵심 지표를 도출.",
              "렌더링 병목을 줄이기 위해 코드 스플리팅과 useDeferredValue 도입.",
              "구매플로우에 필요한 정보를 취합, 필수 데이터만 우선 호출하도록 API 구조를 변경하고 Redis 캐싱 적용.",
            ]}
            didlist={[
              "CLS 0.1 이하 사용자 3월 82.57% -> 4월 89.1%로 상승",
              "3월 대비 4월 구매전환률 10% 상승 (15% -> 17%)",
            ]}
            teckstack={"typescript, React, Next.js, Java, Spring Boot"}
          />
          <WorkExperienceRow
            title={
              "[2024.6 및 2025.3 최적화] 라이브 방송 중인 상품 상세 페이지 진입 시 영상 자동 재생"
            }
            description={
              "상품의 라이브 방송을 상단 비디오에서 뿐만 아니라 스크롤 시에도 고정적으로 영상 재생"
            }
            issueList={[
              "상단·고정 UI 전환 시 동일 영상 컴포넌트로 끊김 없는 재생 지원. 웹뷰 환경에서 Media Session API와 Page Visibility API를 활용해 실시간 시청자 수 집계 API 중복 호출 방지. 일시정지 후 자동으로 최신 라이브 시점으로 이동하는 기능 개발.",
            ]}
            didlist={[
              "끊김 없는 UX 제공으로 사용자 시청 유지율 및 몰입도 향상.",
            ]}
            teckstack={"javascript, React, Next.js"}
          />
          <WorkExperienceRow
            title={"[2023.06~2024.01] Hmall 차세대 프로젝트"}
            description={`Hmall의 기술 스택 및 설계를 변경하는 차세대 프로젝트(jsp/Spring Framework -> React/nextjs, Spring Boot) 지원`}
            issueList={[
              "상품 상세 정책 히스토리 정리 부재로 개발, 기획, QA 간 원활한 협업 불가하여 코드를 분석하여 기획자와 긴밀하게 소통하며, 상품 상세 영역 IA (Information Architecture) 문서 작성 및 정책 정리",
              "외주 개발자 인력 부족과 프로젝트 기일로 인해 프론트, 배치, 백엔드 등의 Hmall 차세대 개발 과정에 참여",
              "기존에 jsp에서 스크립트에 심어 구현했던 3d 이미지 뷰어를 모노레포/nextjs 환경에서 npm으로 라이브러리 설치 후, 커스텀 태그를 재정의하여 3d 이미지가 정상적으로 렌더링되도록 개발함.",
              // "다양한 알림 채널로 대고객 재입고 알림 전송하는 배치 개발 필요하여 테스트 편의성을 위해 하드 코딩된 알림 랜딩 url을 배치 어드민에서 설정할 수 있도록 개발함",
              // "알림 채널별로 enum을 정의하고 알림 전송 공통 메서드를 활용하여 분기 로직을 최소화하는 개발로 유지보수성을 높임",
            ]}
            didlist={[
              "프로젝트 전반의 기획, 개발, 테스트 과정에 모두 참여하여 업무에 대한 이해도를 높일 뿐만 아니라 모노레포, MSA 등의 새로운 개발환경에 적응할 수 있었음",
              "차세대 프로젝트의 성공적인 오픈 이후 안정화 작업에도 주도적으로 참여할 수 있는 기반이 됨",
            ]}
            teckstack={"javascript, React, Next.js, Java, Spring Boot"}
          />
        </div>
      </div>
    </>
  );
};
