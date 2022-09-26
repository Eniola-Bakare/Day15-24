import React, { Component } from 'react'
import InputFocus from './InputFocus'

 class FocusInputBtn extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef2 = React.createRef()
    }
    clickHandler = () => {
        this.inputRef2.current.focusInput()
    }
  render() {
    return (
      <div>
        <InputFocus ref={this.inputRef2} />
        <button onClick={this.clickHandler}>Focus Input Area</button>
      </div>
    )
  }
}

export default FocusInputBtn