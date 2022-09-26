import React from 'react'

// destructuring
const Greeting = (props)=> {
    const {name, heroName} =props
    return(
        <h1>Hello {name} also a {heroName} </h1>
    )
}

export default Greeting