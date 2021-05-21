import React, { Component } from 'react'
const Form = (props) => (
  <form onSubmit={props.getWeather}>
    <input type='text' name='city' placeholder='Type city name' />
    <input type='text' name='country' placeholder='Type country name' />
    <button>Get Weather Info</button>
  </form>
)

export default Form
