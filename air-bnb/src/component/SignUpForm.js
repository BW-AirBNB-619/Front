import React from 'react'
import Containstyle from './formstyle'
import SmallDiv from './smalldiv'

function SignUpForm (props) {

    const {
        values,
        onSubmit,
        onSignUpChange,
        onCheckChange,
        errors,
        disabled,
    } = props

 return (

     <form className="user-form" onSubmit={onSubmit}>
        
        <Containstyle>
            <div className='name-input-form'>
            <label htmlFor='name'>Name
            <div className='name-input' >
                  <input 
                    type='text'
                    name='name'
                    minLength='100'
                    value={values.name}
                    onChange={onSignUpChange}
                    placeholder='FirstName-LastName'
                    size='40'
      
                />
            </div>  
            </label>
          
        </div>
            <div className='username-input-form'>
            <label htmlFor='username'> Username 
                <div className='username-input'>
                    <input 
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onSignUpChange}
                    placeholder='username'
                    size='40'
                />
                </div>
                 
            </label>
            </div>
            <div className='email-input-form'>
            <label htmlFor='email'> 
                <div className='email-input-formname'>
                    Email 
                </div>   
                <div className='email-input'>
                  <input 
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onSignUpChange}
                    placeholder='example@example.com'
                    size='40'
                />   
                </div>
            </label>
            </div>
            <div className='password-input-form'>
            <label htmlFor='password'>Password 
                <div className='password-input'>
                  <input 
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={onSignUpChange}
                    placeholder='Password'
                    size='40'
                />   
                </div>
            </label>
            </div>
            <div className='birthdate-input-form'>
                <label htmlFor='birthdate'>BirthDate
                    <div className='birthdate-input'>
                        <input
                            type='date'
                            name='birthdate'
                            onChange={onSignUpChange}
                            value={values.birthdate}
                            placeholder='mm/dd/yyyy'
                        />
                    </div>
                </label>
                <label htmlFor='term'>Terms of service
                 
                        <input
                            type='checkbox'
                            name='term'
                            checked={values.term}
                            onChange={onCheckChange}
                            
                        />
                    
                </label> 
            </div>
            <div className='error-container'> 
            <button disabled={disabled}>Agree and continue</button>
                <div> {errors.name} </div>
                <div> {errors.username} </div>
                <div> {errors.email} </div>
                <div> {errors.password} </div>
                <div> {errors.term} </div>
            </div>
           
            
        {/* </div>  */}
       </Containstyle>    
    </form>

 ) 

}
 
export default SignUpForm;