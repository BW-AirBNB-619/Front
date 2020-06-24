import React from "react";
import FormStyle from "./Styles/FormStyle";
import { Link } from "react-router-dom";

function SignUpForm(props) {
  const {
    values,
    onSubmit,
    onSignUpChange,
    onCheckChange,
    errors,
    disabled,
  } = props;

  return (
    <FormStyle>
      <form className="user-form" onSubmit={onSubmit}>
        <div className="name-input-form">
          <label htmlFor="name">
            <h3>Name</h3>
            <div className="name-input">
              <input
                type="text"
                name="name"
                maxLength="100"
                value={values.name}
                onChange={onSignUpChange}
                placeholder="FirstName-LastName"
                size="40"
              />
            </div>
          </label>
        </div>
        <div className="username-input-form">
          <label htmlFor="username">
            {" "}
            <h3>Username</h3>
            <div className="username-input">
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={onSignUpChange}
                placeholder="username"
                size="40"
              />
            </div>
          </label>
        </div>
        <div className="email-input-form">
          <label htmlFor="email">
            <div className="email-input-formname">
              <h3>Email</h3>
            </div>
            <div className="email-input">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={onSignUpChange}
                placeholder="example@example.com"
                size="40"
              />
            </div>
          </label>
        </div>
        <div className="password-input-form">
          <label htmlFor="password">
            <h3>Password</h3>
            <div className="password-input">
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={onSignUpChange}
                placeholder="Password"
                size="40"
              />
            </div>
          </label>
        </div>
        <div className="birthdate-input-form">
          <label htmlFor="birthdate">
            <h3>BirthDate</h3>
            <div className="birthdate-input">
              <input
                type="date"
                name="birthdate"
                onChange={onSignUpChange}
                value={values.birthdate}
                placeholder="mm/dd/yyyy"
              />
            </div>
          </label>
          <label htmlFor="term">
            <h3>Terms of service</h3>
            <input
              type="checkbox"
              name="term"
              checked={values.term}
              onChange={onCheckChange}
            />
          </label>
        </div>
        <div className="error-container">
          <button disabled={disabled}>Agree and continue</button>
          <div> {errors.name} </div>
          <div> {errors.username} </div>
          <div> {errors.email} </div>
          <div> {errors.password} </div>
          <div> {errors.term} </div>
        </div>
        <br />
        <Link to="/log-in">
          Already have an account? Click here to sign in!
        </Link>
      </form>
    </FormStyle>
  );
}

export default SignUpForm;
