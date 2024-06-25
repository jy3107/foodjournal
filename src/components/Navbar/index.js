import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavBarElements";
import { useLocation } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Navbar = () => {
  const location = useLocation();

  const CustomButton = () => {
    const journalPage = () => {
      console.log("Navigating to journal page...");
    };

    return (
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          journalPage(); // Navigate to journal page on successful login
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        render={({ onClick }) => (
          <NavBtnLink onClick={onClick}>
            <button className="start-btn">Make Your Food Journal!</button>
          </NavBtnLink>
        )}
      />
    );
  };

  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" isActive={location.pathname === "/"}>
            {" "}
            {/* Check if it's active */}
            Home
          </NavLink>
          <NavLink to="/journal" isActive={location.pathname === "/journal"}>
            {" "}
            {/* Check if it's active */}
            Journal
          </NavLink>
        </NavMenu>
        <NavBtn>
          <CustomButton />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
