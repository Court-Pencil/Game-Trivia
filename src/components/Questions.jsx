import React, {useState, useEffect} from "react";

export default function Questions({onEndGame}) {
     const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const decodeHtmlEntities = (text) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };

  useEffect(() => {const fetchData = async () => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=15&type=multiple`
      );
      const data = await response.json();
      console.log("fetched data:", data);
      const formattedQuestions = data.results.map((q) => ({
        question: decodeHtmlEntities(q.question),
        correct_answer: decodeHtmlEntities(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map((ans) =>
          decodeHtmlEntities(ans)
        ),
        all_answers: [
          ...q.incorrect_answers.map((a) => decodeHtmlEntities(a)),
          decodeHtmlEntities(q.correct_answer),
        ].sort(),
      }));

      setQuestions(formattedQuestions);
      if (formattedQuestions.length > 0) {
        setCurrentQuestionIndex(0);
      }
      setLoading(false);
    } catch (e) {
      setError("Failed to fetch questions. Please try again later.");
    }
  };
    fetchData();
    console.log("useEffect called");
  }, []);

    return (
         <div className="quiz-container">
      <h1>Video Game Trivia</h1>
      <div className="question-counter">
        <span>
          Question {currentQuestionIndex + 1} of {questions.length}{" "}
        </span>
      </div>

      <div className="question-text">
        <h2>{questions[currentQuestionIndex].question}</h2>
      </div>
      </div>
    )
}