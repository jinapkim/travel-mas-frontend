import React from "react";
import { Nav, NavLink, NavBtn, NavMenu, Bars, LogoImg } from "./NavbarElements";
import Login from "../Login/Login";
import Search from "../Search/search_bar";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            <LogoImg src={process.env.PUBLIC_URL + "/travelmas-logo.png"} />
          </NavLink>
          <Search />
          <NavLink to="/experiences" activeStyle>
            Experiences
          </NavLink>
          <NavLink to="/trip-experiences" activeStyle>
            My Trips
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Login />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
