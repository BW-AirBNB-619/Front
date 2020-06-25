import Dashboard from './component/Dashboard'
import PrivateRoute from "./component/PrivateRoute"
import React from "react";
import { Switch, Route, NavLink} from "react-router-dom";
import "./App.css";
import SignInForm from "./component/SignInForm";
import SignUpForm from './component/SignUpForm';
import HeaderNav from "./component/Header";
import FooterNav from "./component/Footer";
import AppContainer from "./component/Styles/AppContainerStyles";
import BodyContainer from "./component/Styles/BodyContainerStyles";



function App() {

  return (
   
    <AppContainer>
      <HeaderNav />
      <BodyContainer>
        <Switch>
          <Route path="/sign-up">
            <SignUpForm />
          </Route>
          <Route
            path="/marketing"
            component={() => {
              window.location.href =
                "https://bw-airbnb-619.netlify.app/team/team.html";
              return null;
            }}
          />
          <Route path="/sign-in">
            <SignInForm />
          </Route>
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </BodyContainer>

      <FooterNav />
    </AppContainer>
  );
}

export default App;
