import * as React from "react";
import { row, rowLeft, rowRight } from "./style.module.css";

export const Education = () => {
  return (
    <>
      <h2>Education</h2>
      <div className={row}>
        <div className={rowLeft}>
          <h3>오픈소스 컨트리뷰션 아카데미 수료</h3>
        </div>
        <div className={rowRight}>
          <ul>
            <li>Git 활용 및 DevOps / MLOps 체험형 수료 (2023.7~2023.8)</li>
            <li>Githru 오픈소스 참여형 (2024.7 ~)</li>
          </ul>
        </div>
      </div>
      <div className={row}>
        <div className={rowLeft}>
          <h3>React18 공식 문서에 대한 한국어 번역 스터디 참여</h3>
        </div>
        <div className={rowRight}>
          <ul>
            <li>
              (2023.3~2023.5)
              https://react-ko.dev/learn/extracting-state-logic-into-a-reducer
            </li>
          </ul>
        </div>
      </div>
      <div className={row}>
        <div className={rowLeft}>
          <h3>현대아이티앤이 채용 확정형 교육</h3>
        </div>
        <div className={rowRight}>
          <ul>
            <li>
              웹 개발 전반(Vue, Spring Framework, Oracle/Java) (2021.7~2021.12)
            </li>
          </ul>
        </div>
      </div>
      <div className={row}>
        <div className={rowLeft}>
          <h3>중앙대학교</h3>
        </div>
        <div className={rowRight}>
          <ul>
            <li>
              국어국문학과 졸업 (2017.3~2022.2)
              <br /> 컴퓨터공학과 복수전공
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
