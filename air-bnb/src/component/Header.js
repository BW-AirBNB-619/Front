import React from "react";
import Header from "./Styles/HeaderStyles";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <Header>
      <header className="headerNav">
        <h1>AirBnB Price Predictor - New York City</h1>
        <div className="link-contain">
          <NavLink to="/sign-up">Sign Up</NavLink>
          <NavLink to="/log-in">Log In</NavLink>
          <NavLink to="/log-out">Log out</NavLink>
        </div>
      </header>
    </Header>
  );
};

export default HeaderNav;
