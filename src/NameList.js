import React from 'react'

function PersonList() {
    const personObj = [
        {
            id: 1,
            name: 'Babam',
            age: 20,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Bolll',
            age: 25,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Noffin',
            age: 23,
            skill: 'Angular'
        },
        {
            id: 4,
            name: 'Kamkam',
            age: 21,
            skill: 'Vue'
        },
    ]
    const eachPersons = personObj.map((eachPerson) => <h2 key={eachPerson.id}>Hello, my name is {eachPerson.name}, I am {eachPerson.age} years old, and I work with {eachPerson.skill}.</h2>)
  return (
    <div> {eachPersons} </div>
  )
}

export default PersonList