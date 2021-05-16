import React from 'react'
import './counter.css'

class Counter1 extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    //this.increaseCount = this.bind(this)
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <h1 className='head'>Counter App using Class component</h1>
        <h1 className='count'>{this.state.count}</h1>
        <button className='btn' onClick={this.increaseCount}>
          Increase
        </button>
        <button className='btn' onClick={this.decreaseCount}>
          Decrease
        </button>
      </>
    )
  }
}
export default Counter1
