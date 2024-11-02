import * as React from "react";
import { WorkExperienceRow } from "../WorkExperienceRow";
import { row, rowLeft, rowRight } from "./style.module.css";

export const WorkExperience = () => {
  return (
    <>
      <h2>Work Experience</h2>
      <div>
        <div className={rowLeft}>
          <h3>현대퓨처넷(현대아이티앤이).</h3>
          <span>2022.1.3~</span>
        </div>
        <div className={rowRight}>
          <WorkExperienceRow
            title={"Hmall 상품평 탭 리뉴얼(2024.10)"}
            description={
              "상품 옵션별 상품평 노출을 위한 상품평 프론트 및 백엔드 로직 설계."
            }
            issueList={[
              "특정 브랜드 전용 상세 템플릿과 Hmall 공통 상세 템플릿의 상품평 탭에 기능을 모두 적용 필요",
              "커스텀 훅으로 제공되는 상품평 관련 함수와 상태값을 모든 신규 컴포넌트에도 prop drilling하여 적용 필요",
              "필터링을 위해 유지관리해야하는 state값들이 많아져 코드의 가독성 저하",
              "네트워크로 받아오는 상품평 사진의 고유 사이즈(intrinsic size)가 렌더링되는 사이즈에 비해 과도하게(약 10배 가량) 큼",
            ]}
            didlist={[
              "상품평 탭에서 공통으로 사용할 수 있는 컴포넌트를 추출하여, 유지보수 포인트를 줄임",
              "state를 반복적으로 변경하여 호출하는 상품평 탭의 특성을 고려해, 커스텀 훅으로 작성된 로직을 React Context API와 useReducer를 사용하여 재작성 (prop drilling 이슈와 코드 재사용성 및 가독성 향상)",
              "상품평 이미지를 렌더링 사이즈와 유사한 크기로 cdn을 호출하여 1/10가량 네트워크 크기를 줄임",
              "이미지 호출 사이즈를 영역별로 정의 및 통일하여, 불필요하게 중복된 이미지를 호출하는 건수를 줄임",
            ]}
            teckstack={"javascript, React, Next.js, Java, Spring Boot"}
          />
          <WorkExperienceRow
            title={
              "라이브 방송 중인 상품 상세 페이지 진입 시 영상 자동재생(2024.6)"
            }
            description={
              "라이브 방송 중인 상품 상세 페이지 진입 시 영상을 자동재생 하는 프론트 개발을 진행. 배포 이후 과도한 실시간 시청자수 집계 API 호출로 레디스 캐시를 업데이트할 수 있는 라이브 방송의 실시간 시청자수 집계 API 타 개발자에게 제공받아 진행"
            }
            issueList={[
              "영상 재생 여부(영상 중지, 페이지 이탈 등)에 맞춰서 실시간 시청자수 집계 API 요청을 중복/누락없이 호출 필요",
              "웹뷰 환경에서 웹과 앱 모두 사용자의 비디오 컨트롤 제어 필요",
            ]}
            didlist={[
              "사용자의 임의 영상 재생/중지 뿐만 아니라, 상세페이지 이탈, 타 앱/탭 진입, 미디어 세션을 통한 비디어 컨트롤 등의 케이스를 정의 및 고려하여, visibility change/ mediaSession 과 같은 여러 웹 API를 활용.",
              "stale closer issue로 인해 의도치 않은 API 호출 중복/누락 문제를 해결하기 위해 영상 재생 여부의 state를 react 업데이터 함수를 사용하여 setState하도록 함.",
            ]}
            toDoList={[
              "bf캐시 적용을 위해서는 beforeunload 대신 chrome에서 권장하는 pagehide api로 변경 예정",
            ]}
            teckstack={"javascript, React, Next.js, Java, Spring Boot"}
          />
          <WorkExperienceRow
            title={
              "Hmall 차세대 프로젝트 (2023.06~2024.01) 및 안정화 (2024.01~)"
            }
            description={`Hmall의 기술 스택 및 설계를 변경하는 차세대 프로젝트(jsp/Spring Framework -> React/nextjs, Spring Boot) 지원 및 안정화 작업 참여`}
            issueList={[
              "jsp에서 model-viewer 라이브러리를 스크립트에 심어 구현했던 3d 이미지를 react/모노레포 환경에서 개발",
              "변경된 알림 랜딩 url과 새로운 배치개발 컨벤션을 바탕으로 앱푸시 또는 카카오 알림톡으로 대고객 재입고 알림 전송하는 배치 개발",
              "상품 옵션 조회 API에서 에러 응답 시, 프런트에서 방어로직 부재로 구매레이어가 빈 창으로 뜨는 오류",
              "만료된 accessToken으로 접근 시 API에서 에러 핸들링을 해주지 않아 일부 사용자들이 구매레이어 창을 볼 수 없는 오류.",
              "차세대 통합 테스트를 위한 상품상세 페이지 정책 정리",
            ]}
            didlist={[
              "jsp에서 model-viewer 라이브러리를 스크립트에 심어 구현했던 3d 상품 이미지를 react/모노레포 환경에서 동일 라이브러리를 npm으로 다운받아 커스텀 태그로 재정의하여 glb 파일 노출되도록 개발",
              "안정적인 알림 전송 테스트를 위해 배치 실행 시, 랜딩 url을 설정하여 테스트 가능하게끔 파라미터로 변경할 수 있게끔 개발 진행 / enum을 활용하여 알림 채널 및 상담전화 분기된 소스를 공통화하는 작업",
              "상품 옵션 조회 API를 호출하는 프론트 소스에서 불필요한 try-catch문을 삭제하고 흩어져있는 에러핸들링 로직을 공통을 처리할 수 있게끔 한 곳에서 오류 처리하고 방어로직을 추가 할 수 있게끔 코드 개선 (관련 내용 정리 : https://jyu-log.tistory.com/93)",
              "만료된 accessToken으로 접근 시 API에서 적절히 예외를 throw하여 프론트에서 accessToken을 재발급할 수 있도록 오류 수정",
              "상품상세 기획자와 함께 통합 테스트를 위한 상품상세 영역 IA 문서 작성 및 정책 정리",
            ]}
            toDoList={[
              "bf cache의 적용을 위해서 3d 관련 소스를 권장하지 않아, 3d 관련 팝업들은 모두 dynamic import로 전환 예정.",
            ]}
            teckstack={"javascript, React, Next.js, Java, Spring Boot"}
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
