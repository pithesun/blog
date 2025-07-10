import * as React from "react";

export const WorkExperienceRow = ({
  title,
  description,
  didlist,
  issueList,
  toDoList,
  teckstack,
}) => {
  return (
    <ul>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>테크스택 : {teckstack}</p>
      <p>
        🔨 이슈와 실행내용 :{" "}
        <ul>
          {issueList?.map((issue) => (
            <li>{issue}</li>
          ))}
        </ul>
      </p>
      <p>
        📈 실행결과와 인사이트 :{" "}
        <ul>
          {didlist?.map((did) => (
            <li>{did}</li>
          ))}
        </ul>
      </p>
      {toDoList && (
        <p>
          To do list :
          <ul>
            {toDoList?.map((todo) => (
              <li>{todo}</li>
            ))}
          </ul>
        </p>
      )}
    </ul>
  );
};
