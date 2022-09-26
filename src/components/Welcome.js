import React, {Component } from 'react'

class Message extends Component{
    render() {
        // destructuring
        const {name, heroName} = this.props
        return <h1>Welcome {this.props.name}{this.props.heroName}</h1>

    }
}


export default Message

