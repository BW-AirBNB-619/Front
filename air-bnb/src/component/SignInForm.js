import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import FormStyle from "./Styles/FormStyle";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialFormValues = {
  username: "",
  password: "",
};

const initialDisabled = true;

function SignInForm(props) {
  let history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;


    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(initialFormValues.username);
  };

  const postUser = () => {
    axios.post('https://ww-foundation.herokuapp.com/login',
        `grant_type=password&username=${formValues.username}&password=${formValues.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }

      )
      .then((res) => {
        window.localStorage.setItem("access_token", res.data.access_token);
        history.push("/dashboard")
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Post error:", err);
      })
      .finally(() => {
        console.log("post request done");
      })
   
      
};

const onSubmit = (evt) => {
  evt.preventDefault();

  const userDetails = {
    username: formValues.username.trim(),
    password: formValues.password.trim(),
  };

  postUser(userDetails);
  console.log(userDetails.username, userDetails.password);
};

useEffect(() => {
  if (formValues.username === "" && formValues.password === "") {
    setDisabled(true);
  } else if (formValues.username !== "" && formValues.password !== "") {
    setDisabled(false);
  }
}, [formValues]);

return (
  <FormStyle className="user-form" onSubmit={onSubmit}>

    <div className="email-input-form">
      <label htmlFor="email">
        <div className="email-input-formname">
          <h3>Username</h3>
        </div>
        <div className="email-input">
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={onInputChange}
            placeholder="username"
            size="34"
          />
        </div>
      </label>
    </div>
    <br />
    <div className="password-input-form">
      <label htmlFor="password">
        <h3>Password</h3>
        <div className="password-input">
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onInputChange}
            placeholder="Password"
            size="34"
          />
        </div>
      </label>
    </div>
    <br />
    <button disabled={disabled}>Sign In</button>
    <br />
    <Link to="/sign-up">Don't have an account? Click here to sign up!</Link>

  </FormStyle>
);
}


export default SignInForm;
