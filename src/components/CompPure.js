import React, { PureComponent } from 'react'

class CompPure extends PureComponent {
  render() {
    console.log('pure Com Render')
    return (
      <div>Campo {this.props.name}</div>
    )
  }
}

export default CompPure