import React from 'react'
import './App.css'
import Review from './Review'

const App = () => {
  return (
    <section className='container'>
      <div className='title'>
        <h1>Review Project</h1>
        <div className='underline'></div>
        <Review />
      </div>
    </section>
  )
}

export default App
