import React, { Component } from 'react'


class HoverEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment = ()=>{
        this.setState(prevHover =>{
            return {count: prevHover.count + 1}
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
      <h1 onMouseOver={this.increment}>Hovered {count} times</h1>
      <input onKeyUp={this.increment} type='text' />
      <button onClick={this.increment}>Clicked {count} times</button>
      </div>
    )
  }
}

export default HoverEvent