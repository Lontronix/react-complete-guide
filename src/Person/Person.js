import React from 'react'
//components are just javascript functions that return some jsx
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name}! I am {props.age} years old</p>
        </div>
    )
    
}; 

export default person;