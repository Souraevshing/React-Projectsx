import React, { useState } from 'react'
import data from './data'
import Question from './Question'
import './App.css'

function App() {
  const [question, setQuestion] = useState(data)
  return (
    <>
      <div className='container'>
        <h2>Question & Answer</h2>
        <section className='info'>
          {question.map((ques) => {
            return <Question key={ques.id} {...ques}></Question>
          })}
        </section>
      </div>
    </>
  )
}

export default App
