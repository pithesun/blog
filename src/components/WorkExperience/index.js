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
            title={"상품상세 설명서 이미지 CDN 예상 트래픽 보고서 알리미 신설"}
            description={
              "스켈레톤 UI 개선과 API 최적화를 통한 진입 속도 및 CLS 지표 개선"
            }
            issueList={[
              "방송상품의 설명서 이미지의 예상트래픽 보고서 통해 CDN 비용증가 사전방지",
              "단순 DB조회 데이터가 아닌 최적화와 캐싱된 설명서 이미지를 제공하는 API가 필요하여 Nextjs의 API 라우트 기능을 사용하여 프론트의 캐싱/최적화 로직을 재사용하여 기능개발",
            ]}
            didlist={[
              "API 호출부에서는 상품코드로만 설명서의 최적화된 이미지 url을 알 수 있어, 예상트래픽 조회 보고서를 작성하는 기능 개발 시 상품상세의 설명서 로직을 알 필요 없이 간단히 개발가능",
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
              "스켈레톤 UI에 포함되는 영역 확대로 인한 속도 지연 이슈에 대한 우려가 있어 API 최적화와 레디스 캐싱 적용을 통해 추가 조회로 인한 API 속도 지연 이슈 방지",
              "기존 스켈레턴 UI 구매하기 영역 미포함 등의 사유로 cls 성능 지표가 구글에서 제안한 0.1을 초과한 0.3이상이 나오고 있어, 렌더링 트리 분석을 통한 불필요 dynamic import 코드 삭제 및 useDefferedValue 훅을 사용한 깜빡임 현상 제거",
            ]}
            didlist={[
              "스켈레톤 API 최적화와 레디스 캐싱 적용을 통해 추가 조회로 인한 API 속도 지연 이슈 해결",
              "상품상세 페이지 CLS 성능 지표가 0.04로 줄어드는 등 평균 40% 개선 ",
            ]}
            teckstack={"typescript, React, Next.js, Java, Spring Boot"}
          />
          <WorkExperienceRow
            title={"[2024.10]Hmall 상품평 탭 리뉴얼"}
            description={
              "상품 옵션별 상품평 노출을 위한 상품평 프론트 및 백엔드 로직 설계 및 개발"
            }
            issueList={[
              "특정 브랜드 전용 상세 템플릿과 Hmall 공통 상세 템플릿의 상품평 탭에 동일 기능 적용 필요하여 공통으로 사용할 수 있는 컴포넌트를 추출하여, 유지보수 포인트를 줄임",
              "네트워크로 받아오는 상품평 사진의 고유 사이즈(intrinsic size)가 렌더링되는 사이즈에 비해 과도하게 커 상품평 이미지를 렌더링 사이즈와 유사한 크기로 CDN을 호출",
              "반복적으로 변경하여 호출하는 상품평 탭의 특성을 고려해, 커스텀 훅으로 작성된 로직을 React Context API와 useReducer를 사용하여 재작성",
            ]}
            didlist={[
              "상품평 탭 리뉴얼 시 컴포넌트의 재사용성을 높여 리뉴얼과 템플릿 3개에 1달 안에 동일한 리뉴얼 내용을 적용하여 배포함.",
              "상품평 이미지를 렌더링 사이즈와 유사한 크기로 CDN을 호출하여 1/10가량 네트워크 크기를 줄여, CDN 비용 감소",
            ]}
            teckstack={"javascript, React, Next.js, Java, Spring Boot"}
          />
          <WorkExperienceRow
            title={
              "[2024.6 및 2025.3 최적화]라이브 방송 중인 상품 상세 페이지 진입 시 영상 자동 재생"
            }
            description={
              "상품의 라이브 방송을 상단 비디오에서 뿐만 아니라 스크롤 시에도 고정적으로 영상 재생"
            }
            issueList={[
              "웹뷰 환경에서 영상 재생 여부(영상 중지, 페이지 이탈 등)에 맞춰서 미디어 세션 API, 웹 API(visibility change 등)을 이용하여 실시간 시청자 수 집계 API 요청을 중복/누락 없이 호출함",
              "사용자가 화면 스크롤 시, 같은 비디오 플레이어 컴포넌트의 UI를 변경하며 노출하여 상단/고정재생을 반복하여도 끊김없는 영상 재생 지원",
              "스트리밍 라이브 영상을 사용자가 일시정지 후 다시 재생할 때 라이브 중인 시점으로 이동하는 기능 개발함.",
            ]}
            didlist={["고객의 라이브 시청 유도 및 시청률 상승"]}
            teckstack={"javascript, React, Next.js"}
          />
          <WorkExperienceRow
            title={"[2023.06~2024.01] Hmall 차세대 프로젝트"}
            description={`Hmall의 기술 스택 및 설계를 변경하는 차세대 프로젝트(jsp/Spring Framework -> React/nextjs, Spring Boot) 지원 및 안정화 작업 참여`}
            issueList={[
              "상품 상세 정책 히스토리 정리 부재로 개발, 기획, QA 간 원활한 협업 불가하여 코드를 분석하여 기획자와 긴밀하게 소통하며, 상품 상세 영역 IA (Information Architecture) 문서 작성 및 정책 정리",
              "외주 개발자 인력 부족과 프로젝트 기일로 인해 프론트, 배치, 백엔드 등의 Hmall 차세대 개발 과정에 참여",
              "jsp에서 스크립트에 심어 구현했던 3d 이미지 뷰어를 react/모노레포 환경에서  오픈소스 라이브러리(model-viewer)를 npm으로 다운받아 커스텀 태그로 재정의하여 3d 이미지(glb 파일)이 정상적으로 정시되도록 개발함.",
              "변경되는 알림 랜딩 url을 바탕으로 다양한 알림 채널로 대고객 재입고 알림 전송하는 배치 개발 필요하여테스트 편의성을 위해 하드 코딩된 알림 랜딩 url을 배치 어드민에서 설정할 수 있도록 개발 / 알림 채널별로 enum을 정의하고 알림 전송 공통 메서드를 활용하여 분기 로직을 최소화",
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
