import React from "react";
import Footer from "./Styles/FooterStyle";
import { NavLink } from "react-router-dom";

const FooterNav = () => {
  return (
    <Footer>
      <footer className="footerNav">
        <div className="link-contain">
          <NavLink to="/marketing">Marketing Website</NavLink>
        </div>
      </footer>
    </Footer>
  );
};

export default FooterNav;
