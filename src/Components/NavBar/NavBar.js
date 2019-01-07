import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import logo from '../../assets/logo.jpg';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <div >
                <img className={classes.NavBar__logo} src={logo} alt="Logo"/>
            </div>
            <SearchBar />
            <div className={classes.NavBar__links}>
                <NavLink className={classes.NavBar__link} exact to="/">Home</NavLink>
                <NavLink className={classes.NavBar__link} exact to="/">Discover</NavLink>
                <NavLink className={classes.NavBar__link} exact to="/">My Account</NavLink>
            </div>
        </div>
    );
}

export default NavBar;