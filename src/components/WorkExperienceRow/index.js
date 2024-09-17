import * as React from "react";

export const WorkExperienceRow = ({ title, description, didlist }) => {
  return (
    <ul>
      <h3>{title}</h3>
      <p>요약: {description}</p>
      <div>
        what I did :{" "}
        {didlist?.map((did) => (
          <li>{did}</li>
        ))}
      </div>
    </ul>
  );
};
