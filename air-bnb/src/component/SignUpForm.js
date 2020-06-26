import React, { useState, useEffect } from "react";
import FormStyle from "./Styles/FormStyle";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import formSchema from "../validate/formSchema";
import * as Yup from "yup";

const initialSignUpForm = {
  username: "",
  email: "",
  password: "",
};

const initialErrors = {
  username: "",
  email: "",
  password: "",
};
const initialDisabled = true;

function SignUpForm(props) {
  const [users, setUsers] = useState([]);
  const [signUpFromValues, setSignUpFormValues] = useState(initialSignUpForm);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getNewUsers = () => {
    axiosWithAuth()
      .get("")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postNewUsers = (newUsers) => {
    axiosWithAuth()
      .post("", newUsers)
      .then((res) => {
        console.log(res.data);
        setUsers([...users, res.data]);
        window.localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch((err) => {})
      .finally(() => {
        setSignUpFormValues(initialSignUpForm);
      });
  };
  const onSignUpChange = (event) => {
    const { name, value } = event.target;
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setSignUpFormValues({
      ...signUpFromValues,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newUsers = {
      ...signUpFromValues,
    };
    postNewUsers(newUsers);
  };

  useEffect(() => {
    getNewUsers();
  }, []);

  useEffect(() => {
    formSchema.isValid(signUpFromValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [signUpFromValues]);

  return (
    <FormStyle className="user-form" onSubmit={onSubmit}>
      <div className="username-input-form">
        <label htmlFor="username">
          {" "}
          <h3>Username</h3>
          <div className="username-input">
            <input
              type="text"
              name="username"
              value={signUpFromValues.username}
              onChange={onSignUpChange}
              placeholder="username"
              size="34"
            />
          </div>
        </label>
      </div>
      <br />
      <div className="email-input-form">
        <label htmlFor="email">
          <div className="email-input-formname">
            <h3>Email</h3>
          </div>
          <div className="email-input">
            <input
              type="email"
              name="email"
              value={signUpFromValues.email}
              onChange={onSignUpChange}
              placeholder="example@example.com"
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
              value={signUpFromValues.password}
              onChange={onSignUpChange}
              placeholder="Password"
              size="34"
            />
          </div>
        </label>
      </div>
      <br />

      <div className="error-container">
        <div> {formErrors.username} </div>
        <div> {formErrors.email} </div>
        <div> {formErrors.password} </div>

        <button disabled={disabled}>Sign Up!</button>
      </div>
      <br />
      <Link to="/sign-in">Already have an account? Click here to sign in!</Link>
    </FormStyle>
  );
}

export default SignUpForm;
