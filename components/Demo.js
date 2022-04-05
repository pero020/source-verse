import { useState, useEffect } from 'react';

import AskForm from './AskForm.js'
import AnswerForm from './AnswerForm.js'

export default function Demo (handleSubmit) {
  const [question, setQuestion] = useState({
    title: "",
    description: "",
    category: ""
  });
  const [demoState, setDemoState] = useState("start")
  const [currentScene, setCurrentScene] = useState()

  useEffect(() => {
    console.log(1)
    updateScene()
  }, [demoState])

  return <div>
  {currentScene}
  </div>

  function handleSubmit(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    let category =e.target.category.value;

    if (title && description) {
      setQuestion({
        "title": title,
        "description": description,
        "category": category
      })
      setDemoState("beforeAnswer");
    }

  }

  function handleAnswer(e) {
    e.preventDefault();
    console.log(e)
    setDemoState("end");
  }

  function updateScene () {
    if (demoState === "start") {
      setCurrentScene(<h1>Describe what's on your mind</h1>)
      setTimeout(() => {
        setDemoState("AskForm")
      }, 2000);
    } else if (demoState === "AskForm") {
      setCurrentScene(<AskForm handleSubmit={handleSubmit}></AskForm>)
    } else if (demoState === "beforeAnswer") {
      setCurrentScene(<h1>Someone special will get to answer your question</h1>)
      setTimeout(() => {
        setDemoState("AnswerForm")
      }, 2000);
    } else if (demoState === "AnswerForm") {
      setCurrentScene(<AnswerForm handleAnswer={handleAnswer} question={question}></AnswerForm>)
    } else if (demoState === "end") {
      setCurrentScene(<h1>Login to receve feedback or help others and climb the leaderboard</h1>)
    }
  }

}