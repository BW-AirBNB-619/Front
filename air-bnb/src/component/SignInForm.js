import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormStyle from "./Styles/FormStyle";
import Axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  name: "",
  password: "",
};

const initialDisabled = true;

function SignInForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const postUser = (newUser) => {
    axiosWithAuth()
      .post("/api/users", newUser)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
            props.history.push("/dashboard")
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Post error:", err);
      })
      .finally(() => {
        console.log("post request done");
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const userDetails = {
      name: formValues.email.trim(),
      password: formValues.password.trim(),
    };

    postUser(userDetails);
  };

  useEffect(() => {
    if (formValues.email === "" && formValues.password === "") {
      setDisabled(true);
    } else if (formValues.email !== "" && formValues.password !== "") {
      setDisabled(false);
    }
  }, [formValues]);

  return (
    <FormStyle>
      <form className="user-form" onSubmit={onSubmit}>
        <div className="email-input-form">
          <label htmlFor="email">
            <div className="email-input-formname">
              <h3>Email</h3>
            </div>
            <div className="email-input">
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={onInputChange}
                placeholder="example@example.com"
                size="40"
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
                size="40"
              />
            </div>
          </label>
        </div>
        <br />
        <button disabled={disabled}>Sign In</button>
        <br />
        <Link to="/sign-up">Don't have an account? Click here to sign up!</Link>
      </form>
    </FormStyle>
  );
}

export default SignInForm;
