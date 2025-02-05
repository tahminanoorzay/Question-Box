import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const data = [
  {
    question: "Which team has won the most FIFA World Cups?",
    answer: "Brazil",
  },
  {
    question: "Who is the all-time top scorer in the UEFA Champions League?",
    answer: "Cristiano Ronaldo",
  },
  {
    question:
      "Which video game franchise features a character named 'Master Chief'?",
    answer: "Halo",
  },
  {
    question:
      "In which year was the first 'Grand Theft Auto' (GTA) game released?",
    answer: "1997",
  },
  {
    question:
      "Which programming language is known for web development alongside HTML and CSS?",
    answer: "JavaScript",
  },
  {
    question: "What does 'CSS' stand for in web development?",
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which artist released the album 'Thriller' in 1982?",
    answer: "Michael Jackson",
  },
  {
    question: "Which British rock band released the song 'Bohemian Rhapsody'?",
    answer: "Queen",
  },
  {
    question: "What does 'OOP' stand for in programming?",
    answer: "Object-Oriented Programming",
  },
  {
    question: "Which game studio developed 'The Witcher' series?",
    answer: "CD Projekt Red",
  },
];

function App() {
  const [answerButton, setAnswerButton] = useState(null);

  const handleAnswer = (index) => {
    setAnswerButton(answerButton === index ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <button className="btn" onClick={() => handleAnswer(index)}>
          {answerButton === index ? item.answer : item.question}
        </button>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
