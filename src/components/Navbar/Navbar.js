import React from 'react';
import { Nav, NavLink, NavBtn, NavBtnLink, NavMenu, Bars, LogoImg } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        <LogoImg src={process.env.PUBLIC_URL + '/travelmas-logo.png'} />
                    </NavLink>
                    <NavLink to='/experiences' activeStyle>
                        Experiences
                    </NavLink>
                    <NavLink to='/account' activeStyle>
                        My Account
                    </NavLink>
                    <NavLink to='/signup' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

export default Navbar;