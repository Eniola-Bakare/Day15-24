import React, { Component } from 'react'

class Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hallo!'
      }
    //   binding in the constructor function
    this.eventHandler = this.eventHandler.bind(this)
    }
    // binding...
    eventHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }

    // arrow func for binding 'this'
    eventHandler = ()=>{
        this.setState({
            message: 'Byebye'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* binding in render */}
        {/* <button onClick={this.eventHandler.bind(this)}>Click!</button> */}

        {/* arroww func in render */}
        {/* <button onClick={()=> this.eventHandler()}>Click!</button> */}
        
        {/* binding in constructor; class prop as arrow func */}
        <button onClick={this.eventHandler}>Click!</button>
      </div>
    )
  }
}

export default Binding