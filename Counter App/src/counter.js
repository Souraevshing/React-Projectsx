import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1 className='head'>Counter App using functional component</h1>
      <h1 className='count'>{count}</h1>
      <button className='btn' onClick={increaseCount}>
        Increase
      </button>
      <button className='btn' onClick={decreaseCount}>
        Decrease
      </button>
    </>
  )
}

export default Counter
