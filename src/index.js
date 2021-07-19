import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Data from './Components/Data'
import Card from './Components/Card'

ReactDOM.render(
  <>
    {Data.map((props) => {
      return <Card title={props.title} img={props.img} link={props.link} />
    })}
  </>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
