import React from "react";
import NavStyle from "../styles/navBarStyle";

const NavBar = () => {
  return (
    <NavStyle>
      <div className="left">
        <h3>ABDULLAH JAMIU</h3>
        <ul>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Services</li>
        </ul>
      </div>

      <div className="right">
        <i>ss</i>
        <i>aa</i>
      </div>
    </NavStyle>
  );
};

export default NavBar;
