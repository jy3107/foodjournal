import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavBarElements";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";


const Navbar = () => {

    const navigate = useNavigate();

    const journalPage = () => {
      navigate("/journal");
    };


    const CustomButton = () => {
      return (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            journalPage(); // Navigate to journal page on successful login
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      );
    };
    
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
        <NavBtn>
          <CustomButton/>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
