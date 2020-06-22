import React from 'react'

const Form = props =>
    
    <form>
        <label>FirstName :    &nbsp; 
            <input 
                type='text'
                name='fname'
                placeholder='FirstName'
            />
        </label> <br />
        <label> LastName :    &nbsp; 
            <input 
                type='text'
                name='lname'
                placeholder='LastName'
            />
            
        </label>
        

        {
            props.porpsForm
        }
    </form>

export default Form;