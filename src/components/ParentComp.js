import React, { Component } from 'react'
import CompPure from './CompPure'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'

 class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Eniola'
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        name: 'Eniola'
      })
    }, 2000);
  }
  render() {
    console.log('**************Parent Com Render')
    return (
      <div>
        <h1>Parent Component</h1>
        <MemoComp name={this.state.name}/>
        <CompPure name={this.state.name} />
        <RegularComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
