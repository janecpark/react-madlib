import React from 'react'

/* Renders a single madlib. */
const Story = (props) =>{
    return(
        <div>
            <p>There was {props.noun} who loved a {props.adjective} {props.color} {props.noun2}</p>
        </div>
       
    )
}

export default Story;