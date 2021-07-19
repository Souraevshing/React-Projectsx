import React, { useState } from 'react'
import data from './data'
import { FaChevronLeft, FaChevronRight, RiAwardFill } from 'react-icons/all'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = data[index]

  const prevBtn = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkIndex(newIndex)
    })
  }

  const nextBtn = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkIndex(newIndex)
    })
  }

  const randomBtn = () => {
    let random = Math.floor(Math.random - data.length)
    if (random === index) {
      random = index + 1
    }
    setIndex(checkIndex(random))
  }
  const checkIndex = (no) => {
    if (no < 0) {
      return 0
    }
    if (no > data.length - 1) {
      return data.length - 1
    }
    return no
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <RiAwardFill />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevBtn}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextBtn}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  )
}

export default Review
