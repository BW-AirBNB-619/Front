import React from "react";
import Footer from "./Styles/FooterStyle";
import { NavLink } from "react-router-dom";

const FooterNav = () => {
  return (
    <Footer>
      <footer className="footerNav">
        <h1>AirBnB Pricing Tool for New York City</h1>
        <div className="link-contain">
          <NavLink to="/">Log out</NavLink>
        </div>
      </footer>
    </Footer>
  );
};

export default FooterNav;
