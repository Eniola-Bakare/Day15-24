import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('yeah, I know yaa!!')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>CLick me, durr</button>
      </div>
    )
  }
}

export default ClassClick