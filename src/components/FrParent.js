import React, { Component } from 'react'
import FrChild from './FrChild'

class FrParent extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }
    clickHandler = ()=> {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <FrChild ref={this.inputRef}/>
        <button onClick={this.clickHandler}> Focus Input from Parent Component</button>
      </div>
    )
  }
}

export default FrParent