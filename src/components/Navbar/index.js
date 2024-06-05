import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/journal" activeStyle>
            Journal
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
