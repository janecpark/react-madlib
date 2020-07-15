import React, {useState} from 'react'

/* Form to make madlib */
const Form = ({makeStory}) =>{
    const initialState = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange= (e) =>{
        const {name, value} = e.target;
        setFormData(data =>({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {noun, noun2, adjective, color } = formData;
        makeStory({...formData})
        
        setFormData(initialState)
    }

    return(
        <form onSubmit={handleSubmit} className="Form">
            <input 
            type="text" 
            name="noun"
            placeholder="noun"
            value={formData.noun}
            onChange={handleChange}
            />
             <input 
            type="text" 
            name="noun2"
            placeholder="noun 2"
            value={formData.noun2}
            onChange={handleChange}
            />
            <input 
            type="text" 
            name="adjective"
            placeholder="adjective"
            value={formData.adjective}
            onChange={handleChange}
            />
             <input 
            type="text" 
            name="color"
            placeholder="color"
            value={formData.color}
            onChange={handleChange}
            />
        <br/>
        <button>Get Story</button>
        </form>
    )
}

export default Form