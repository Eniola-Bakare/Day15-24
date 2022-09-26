import React, { Component } from 'react'

class RegularComp extends Component {

  render() {
    console.log('regular Com Render')
    return (
      <div>Regular Comp {this.props.name}</div>
    )
  }
}

export default RegularComp