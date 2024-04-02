import React from 'react';

import {NavLink, Link} from "react-router-dom";
import logo from "../assets/media/rf-logo-white.png";

import './navbar.css';
function Navbar  ()  {

    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{lineHeight:"1rem"}}>
            <div className="container-fluid mx-5">
                <Link reloadDocument className="navbar-brand" to={"/"}>
                    <img src={logo} id="logo" alt="logo"/>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" style={{flexGrow:'0'}} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink reloadDocument className={({ isActive }) =>isActive ? 'nav-link active' : 'nav-link'} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink reloadDocument className={({ isActive }) =>isActive ? 'nav-link active' : 'nav-link'} to="/about">
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink reloadDocument className={({ isActive }) =>isActive ? 'nav-link active' : 'nav-link'} to="/success-stories">
                                Success Stories
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
