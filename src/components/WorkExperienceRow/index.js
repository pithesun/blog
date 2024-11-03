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
        Issue Point :{" "}
        <ul>
          {issueList?.map((issue) => (
            <li>{issue}</li>
          ))}
        </ul>
      </p>
      <p>
        What I did :{" "}
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
