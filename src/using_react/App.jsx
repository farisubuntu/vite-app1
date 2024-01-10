import "./App.css";
import { useState, useMemo } from "react";

function renderQuizzes(quizzes) {
  return quizzes.map((quiz, i) => (
    <ul key={i} className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Quiz ID:
        <span className="badge bg-primary rounded-pill">{quiz.id}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Type:
        <span className="badge bg-primary rounded-pill">{quiz.type}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        WordID:
        <span className="badge bg-primary rounded-pill">{quiz.worldID}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Alternates:
        <span className="badge bg-primary rounded-pill">
						{
							quiz.alternates.map( (item => item))
										}
						
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Sols:
        {quiz.sols.map((sol) => (
          <>
            <span className="badge bg-primary rounded-pill">{sol.text}</span>
          </>
        ))}
      </li>
    </ul>
  ));
}
function Quizz(props) {
  return renderQuizzes(props.quizzes);
}

function Lesson(props) {
  // component states:
  const [lessonId, setLessonid] = useState(props.lessonId);
  const [Data, setData] = useState({});
  const [lesson, setLesson] = useState({});
  const [quizzes, setQuizzes] = useState([]);

  const updateData = function (data) {
    setLessonid(lessonId);
    setData(data);
    setLesson(data.lesson);
    setQuizzes(data.quizzes);
  };

  function getUrl(lessonId) {
    var url =
      "https://raw.githubusercontent.com/farisubuntu/urdu-course/gh-pages/data/1/";

    return `${url}${lessonId}.json`;
  }
  function handleNextLesson(e) {
    e.preventDefault();
    return fetch(getUrl(lessonId))
      .then((res) => res.json())
      .then((data) => updateData(data));
  }

  return (
    <>
      <button onClick={handleNextLesson}>Lesson No: {lessonId}</button>
      <>
        <Quizz quizzes={quizzes} />
      </>
    </>
  );
}

function App() {
  return (
    <>
      <Lesson lessonId={"101"} />
      <Lesson lessonId={"102"} />
      <Lesson lessonId={"103"} />
      <Lesson lessonId={"104"} />
    </>
  );
}

export default App;
