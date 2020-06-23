import React, { useState, useEffect } from 'react';
import { Switch, Route, Link , NavLink} from 'react-router-dom'
import './App.css';
import * as Yup from 'yup';
import axios from 'axios';
import SignUpForm from './component/SignUpForm';
import formSchema from './validate/formSchema'



const initialSignUpForm = {
  name: '',
  username: '',
  email: '',
  password: '',
  birthdate: '',
  term: false,
}
const initialErrors = {
  name: '',
  username: '',
  email: '',
  password: '',
  birthdate: '',
  term: '',
}
const initailDisabled = true


function App() {

  const [users, setUsers] = useState([]);
  const [signUpFromValues, setSignUpFormValues] = useState(initialSignUpForm);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initailDisabled);

const getNewUsers = () =>{
  axios.get('https://reqres.in/api/users')
  .then(res =>{
    setUsers(res.data) 
  })
  .catch(err =>{
    console.log(err)
  })

}
  
  const postNewUsers = newUsers =>{
    axios.post('https://reqres.in/api/users', newUsers)
    .then(res =>{
      console.log(res.data)
      setUsers([...users, res.data])
    })
    .catch(err =>{

    })
    .finally(()=>{
      setSignUpFormValues(initialSignUpForm)
    })
  }
  const onSignUpChange = event =>{
    const {name, value} = event.target
    Yup 
    .reach(formSchema, name )
    .validate(value)
    .then(()=>{
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err =>{
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setSignUpFormValues({
      ...signUpFromValues,
      [name]: value
    })
  }

  const onSubmit = event =>{
    event.preventDefault();
    const newUsers = {
      ...signUpFromValues,    
      
    }
    postNewUsers(newUsers)
  }
  
  const onCheckChange = event =>{
    const {name, checked} = event.target
  
    setSignUpFormValues({
      ...signUpFromValues,
      [name]: checked,
    })
  }
  useEffect(()=>{
    getNewUsers();
  }, [])

  useEffect(() =>{
    formSchema.isValid(signUpFromValues).then(valid =>{
      setDisabled(!valid)
    })
  }, [signUpFromValues])

  return (
    <div className="App">
   
      <header className="App-header">

        <h3>AirBnB user Register</h3>
        <div className='link-contain'>
          <NavLink className='home-link' to='/exam'>Home</NavLink>
          <NavLink className='signUp-link' to='/sign-up'>Sign Up</NavLink>
          <NavLink className='signUp-link' to='/log-in'>Log in</NavLink>

        </div>
 
      </header>
      <Switch>
        <Route path='/sign-up'>
       <SignUpForm 
          values={signUpFromValues}
          onSubmit={onSubmit}
          onSignUpChange={onSignUpChange}
          onCheckChange={onCheckChange}
          disabled={disabled}
          errors={formErrors}    
          
        />
        </Route>
        <Route path='/exam' component={()=>{
          window.location.href = 'https://www.airbnb.com/s/all?refinement_paths%5B%5D=%2Ffor_you&lat=39.9393633&lng=-82.9178733&search_type=autosuggest';
           return null;
        }} />

        <Route path='/log-in' component={()=>{
          window.location.href = 'https://front.airbnb-op.vercel.app/';
           return null;
        }} />
       </Switch>  
     
    </div> 
   
  );
}


export default App;
