import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='container'>
        <div>
          <h3 className='card_title'>{props.title}</h3>
          <img src={props.img} alt='' className='card_img' />
          <div>
            <a target='_blank' href={props.link} rel='noreferrer'>
              <button className='btn'>Play</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
