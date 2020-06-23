import React from 'react'

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
        <div className='signUp-form'>
            <div className='name-input-form'>
            <label>Name
            <div className='name-input' >
                  <input 
                    type='text'
                    name='name'
                    minLength='100'
                    value={values.name}
                    onChange={onSignUpChange}
                    placeholder='FirstName-LastName'
                    
                />
            </div>  
            </label>
        </div>
            <div>
            <label> Username 
                <div>
                    <input 
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onSignUpChange}
                    placeholder='username'
                />
                </div>
                 
            </label>
            </div>
            <div>
            <label> 
                <div>
                    Email 
                </div>   
                <div>
                  <input 
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onSignUpChange}
                    placeholder='example@example.com'
                />   
                </div>
            </label>
            </div>
            <div>
            <label>Password 
                <div>
                  <input 
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={onSignUpChange}
                    placeholder='Password'
                />   
                </div>
            </label>
            </div>
            <div>
                <label>BirthDate
                    <div>
                        <input
                            type='date'
                            name='birthdate'
                            onChange={onSignUpChange}
                            placeholder='mm/dd/yyyy'
                        />
                    </div>
                </label>
                <label>Terms of service
                 
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
           
            
        </div> 
           
    </form>

 ) 

}
 
export default SignUpForm;