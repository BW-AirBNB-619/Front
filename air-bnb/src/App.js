import React, { useState, useEffect } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import * as Yup from "yup";
import axios from "axios";
import SignUpForm from "./component/SignUpForm";
import formSchema from "./validate/formSchema";
import SignInForm from "./component/SignInForm";
import HeaderNav from "./component/Header";
import FooterNav from "./component/Footer";
import AppContainer from "./component/Styles/AppContainerStyles";
import BodyContainer from "./component/Styles/BodyContainerStyles";

const initialSignUpForm = {
  name: "",
  username: "",
  email: "",
  password: "",
  birthdate: "",
  term: false,
};
const initialErrors = {
  name: "",
  username: "",
  email: "",
  password: "",
  birthdate: "",
  term: "",
};
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([]);
  const [signUpFromValues, setSignUpFormValues] = useState(initialSignUpForm);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getNewUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postNewUsers = (newUsers) => {
    axios
      .post("https://reqres.in/api/users", newUsers)
      .then((res) => {
        console.log(res.data);
        setUsers([...users, res.data]);
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

  const onCheckChange = (event) => {
    const { name, checked } = event.target;

    setSignUpFormValues({
      ...signUpFromValues,
      [name]: checked,
    });
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
    <AppContainer>
      <HeaderNav />

      <BodyContainer>
        <Switch>
          <Route path="/sign-up">
            <SignUpForm
              values={signUpFromValues}
              onSubmit={onSubmit}
              onSignUpChange={onSignUpChange}
              onCheckChange={onCheckChange}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>
          <Route
            path="/marketing"
            component={() => {
              window.location.href =
                "https://bw-airbnb-619.netlify.app/team/team.html";
              return null;
            }}
          />

          <Route path="/log-in">
            <SignInForm />
          </Route>
        </Switch>
      </BodyContainer>

      <FooterNav />
    </AppContainer>
  );
}

export default App;
