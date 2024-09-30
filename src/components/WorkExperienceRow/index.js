import * as React from "react";

export const WorkExperienceRow = ({
  title,
  description,
  didlist,
  teckstack,
}) => {
  return (
    <ul>
      <h3>{title}</h3>
      <p>요약: {description}</p>
      <p>테크스택 : {teckstack}</p>
      <div>
        what I did :{" "}
        {didlist?.map((did) => (
          <li>{did}</li>
        ))}
      </div>
    </ul>
  );
};
