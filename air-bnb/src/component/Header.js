import React from "react";
import Header from "./Styles/HeaderStyles";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <Header>
      <header className="headerNav">
        <h1>AirBnB Pricing Tool for New York City</h1>
        <div className="link-contain">
          <NavLink to="/">Log out</NavLink>
        </div>
      </header>
    </Header>
  );
};

export default HeaderNav;
