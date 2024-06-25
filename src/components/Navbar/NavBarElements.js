import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #fff0ba;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1700px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: ${({ isActive }) => (isActive ? "#ae612e" : "#000000")};
  display: flex;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: left;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #568d33;
  padding: 10px 22px;
  color: #ffffff;
  outline: none;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    background: #406429;
  }
`;
