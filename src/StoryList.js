import React, {useState} from 'react'
import Form from './Form'
import Story from './Story'
import { v4 as uuidv4 } from 'uuid'
/* Renders a list of madlib.
 * Can also reset madlib */
const StoryList = () =>{
    const [story, setStory] = useState([])
    const add = (storyObj) =>(
        setStory([storyObj])
    )   
    const reset = () =>{
        setStory([])
    }
    return(
        <div>
         {story.length ==0 ? (<Form makeStory={add} />)  : null} 
          {story.map(str =>(
            <Story 
            key={uuidv4()}
            noun={str.noun}
            adjective={str.adjective}
            color={str.color}
            noun2={str.noun2}
            />
        ))}
        {story.length !== 0 ? (<button onClick={reset}>Restart</button>): null}
        </div>
    )
}
    
export default StoryList