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
            title={"상품상세 스켈레톤 UI 및 진입 속도 개선(2025.1~2025.3)"}
            description={
              "스켈레톤 UI 개선과 API 최적화를 통한 진입 속도 및 CLS 지표 개선"
            }
            issueList={[
              "스켈레톤 UI 구매영역까지의 확대 요구사항으로 인한 속도 지연 이슈에 대한 우려",
              "스켈레톤 UI를 최적화하여도 뒤따르는 실제 UI의 렌더링 속도가 따라오지 못하는 경우, FID 지표 하락 우려",
            ]}
            didlist={[
              "스켈레톤 API 최적화와 레디스 캐싱 적용을 통해 추가 조회로 인한 API 속도 지연 이슈 해결",
              "렌더링 트리 분석을 통한 불필요 dynamic import 코드 삭제 및 useDefferedValue 훅을 사용한 깜빡임 현상 제거를 통해 상품상세 페이지 CLS 성능 지표 개선 평균 40% 개선 및 깜빡임 현상 제거",
            ]}
            teckstack={"typescript, React, Next.js, Java, Spring Boot"}
          />
          <br />
          <br />
          <WorkExperienceRow
            title={"Hmall 상품평 탭 리뉴얼(2024.10)"}
            description={
              "상품 옵션별 상품평 노출을 위한 상품평 프론트 및 백엔드 로직 설계 및 개발"
            }
            issueList={[
              "분리된 특정 브랜드 전용 상세 템플릿과 Hmall 공통 상세 템플릿의 상품평 탭에 동일 기능 적용 필요",
              "기존에 커스텀 훅으로 제공되는 상품평 관련 함수와 상태값을 모든 신규 컴포넌트에도 prop drilling하여 적용 필요",
              "필터링을 위해 관리해야 하는 state값들이 많아져 코드의 가독성 저하",
              "네트워크로 받아오는 상품평 사진의 고유 사이즈(intrinsic size)가 렌더링되는 사이즈에 비해 과도하게 큼",
            ]}
            didlist={[
              "상품평 탭에서 공통으로 사용할 수 있는 컴포넌트를 추출하여, 유지보수 포인트를 줄임",
              "state(페이지번호, 정렬 필터, 옵션 필터 등)를 반복적으로 변경하여 호출하는 상품평 탭의 특성을 고려해, 커스텀 훅으로 작성된 로직을 React Context API와 useReducer를 사용하여 재작성 (prop drilling 이슈 해결과 코드 재사용성 및 가독성 향상)",
              "상품평 이미지를 렌더링 사이즈와 유사한 크기로 CDN을 호출하여 1/10가량 네트워크 크기를 줄임",
              "이미지 호출 사이즈를 영역별로 정의 및 통일하여, 불필요하게 중복된 이미지를 호출하는 건수를 줄임",
            ]}
            teckstack={"javascript, React, Next.js, Java, Spring Boot"}
          />
          <br />
          <br />

          <WorkExperienceRow
            title={
              "라이브 방송 중인 상품 상세 페이지 진입 시 영상 자동 재생(2024.6 및 2025.3 최적화)"
            }
            description={
              "라이브 방송 중인 상품 상세 페이지 진입 시 영상 자동 재생 및 상단 영역 미니 플레이어 고정 재생"
            }
            issueList={[
              "영상 재생 여부(영상 중지, 페이지 이탈 등)에 맞춰서 실시간 시청자 수 집계 API 요청을 중복/누락 없이 호출 필요",
              "웹뷰 환경에서 웹과 앱 모두에서 비디오 제어 필요(미디어 세션 제어/ 타 앱 및 탭 이동 등)",
              "스크롤하여 하단 이동하는 경우 고정 비디오 영역 생성",
            ]}
            didlist={[
              "사용자의 임의 영상 재생/중지뿐만 아니라, 상세 페이지 이탈, 타 앱/탭 진입, 미디어 세션을 통한 비디오 재생/중지 케이스를 고려하여, beforeunload / visibility change / mediaSession과 같은 여러 웹 API를 활용하여 개발.",
              "stale closer issue로 인해 의도치 않은 API 호출 중복/누락 문제를 해결하기 위해 영상 재생 여부의 state를 react 업데이터 함수를 사용하여 setState하도록 함.",
            ]}
            teckstack={"javascript, React, Next.js, Java, Spring Boot"}
          />
          <WorkExperienceRow
            title={
              "Hmall 차세대 프로젝트 (2023.06~2024.01) 및 안정화 (2024.01~)"
            }
            description={`Hmall의 기술 스택 및 설계를 변경하는 차세대 프로젝트(jsp/Spring Framework -> React/nextjs, Spring Boot) 지원 및 안정화 작업 참여`}
            issueList={[
              "상품 상세 정책 히스토리 정리 부재로 개발, 기획, QA 간 원활한 협업 불가",
              "기존에는 jsp에서 model-viewer 라이브러리를 스크립트에 심어 구현했던 3d 이미지 뷰어를 react/모노레포 환경에서 개발 필요",
              "변경되는 알림 랜딩 url을 바탕으로 다양한 알림 채널(ex. 앱푸시 또는 카카오 알림톡)로 대고객 재입고 알림 전송하는 배치 개발 필요",
              "상품 옵션 조회 API에서 에러 응답 시, 프런트에서 방어 로직 부재로 구매레이어가 빈 창으로 뜨는 오류",
            ]}
            didlist={[
              "현재 동작하고 있는 코드를 분석하여 기획자와 긴밀하게 소통하며, 상품 상세 영역 IA (Information Architecture) 문서 작성 및 정책 정리",
              "react/모노레포 환경에서 model-viewer 라이브러리를 npm으로 다운받아 커스텀 태그로 재정의하여 glb 파일 노출되도록 개발",
              "테스트 편의성을 위해 하드 코딩된 알림 랜딩 url을 배치 어드민에서 설정할 수 있도록 개발 / 알림 채널별로 enum을 정의하고 알림 전송 공통 메서드를 활용하여 분기 로직을 최소화",
              "상품 옵션 조회 API를 호출하는 프론트 소스에서 불필요한 try-catch문을 삭제하고 흩어져있는 에러를 한 곳에서 처리하도록 코드 개선 (진행하면서 했던 고민 : https://jyu-log.tistory.com/93)",
            ]}
            toDoList={[
              "bf cache의 적용을 위해서 3d 관련 코드(webXR)를 제거해야 하여, 3d 관련 뷰어 팝업들은 모두 dynamic import로 전환 예정.",
            ]}
            teckstack={"javascript, React, Next.js, Java, Spring Boot"}
          />
        </div>
      </div>
    </>
  );
};
