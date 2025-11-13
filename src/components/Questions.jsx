import React, {useState, useEffect} from "react";

export default function Questions({onEndGame}) {
     const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    return (
        <div> Questions </div>
    )
}