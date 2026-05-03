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
          {issueList?.map((issue, i) => (
            <li key={`issue-${i}`}>{issue}</li>
          ))}
        </ul>
      </p>
      <p>
        📈 실행결과와 인사이트 :{" "}
        <ul>
          {didlist?.map((did, i) => (
            <li key={`did-${i}`}>{did}</li>
          ))}
        </ul>
      </p>
      {toDoList && (
        <p>
          To do list :
          <ul>
            {toDoList?.map((todo, i) => (
              <li key={`todo-${i}`}>{todo}</li>
            ))}
          </ul>
        </p>
      )}
    </ul>
  );
};
