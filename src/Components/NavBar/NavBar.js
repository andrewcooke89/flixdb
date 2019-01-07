import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import logo from '../../assets/logo.jpg';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {

    const HomeIcon = <svg xmlns="http://www.w3.org/2000/svg" className={classes.NavBar__link_icon} viewBox="0 0 20 20">
    <title>home</title>
    <path d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"></path>
    </svg>

    const AccountIcon = <svg xmlns="http://www.w3.org/2000/svg" className={classes.NavBar__link_icon} viewBox="0 0 20 20">
    <title>laptop</title>
    <path d="M19.754 15.631c-0.247-0.371-1.754-2.631-1.754-2.631v-9c0-1.102-0.9-2-2-2h-12c-1.101 0-2 0.898-2 2v9c0 0-1.507 2.26-1.754 2.631-0.246 0.369-0.246 0.582-0.246 0.869v0.5c0 0.5 0.5 1 0.999 1h18.002c0.499 0 0.999-0.5 0.999-1v-0.5c0-0.287 0-0.5-0.246-0.869zM7 16l0.6-1h4.8l0.6 1h-6zM16 12h-12v-8h12v8z"></path>
    </svg>

    const DiscoverIcon = <svg xmlns="http://www.w3.org/2000/svg" className={classes.NavBar__link_icon} viewBox="0 0 20 20">
    <path d="M20 5v-1.201c0-0.442-0.357-0.799-0.799-0.799h-18.4c-0.443 0-0.801 0.357-0.801 0.799v1.201h2v2h-2v2h2v2h-2v2h2v2h-2v1.199c0 0.442 0.358 0.801 0.801 0.801h18.4c0.442 0 0.799-0.359 0.799-0.801v-1.199h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2zM8 13v-6l5 3-5 3z"></path>
    </svg>
    



    return (
        <div className={classes.NavBar}>
            <div >
                <img className={classes.NavBar__logo} src={logo} alt="Logo"/>
            </div>
            <SearchBar />
            <div className={classes.NavBar__links}>
                <NavLink className={classes.NavBar__link} exact to="/">
                    <div className={classes.NavBar__link_group}>
                        {HomeIcon}
                        <span className={classes.NavBar__link_text}>Home</span>
                    </div>
                    
                </NavLink>
                <NavLink className={classes.NavBar__link} exact to="/">
                    <div className={classes.NavBar__link_group}>
                        {DiscoverIcon}
                        <span className={classes.NavBar__link_text}>Discover</span>
                    </div>
                    
                </NavLink>
                <NavLink className={classes.NavBar__link} exact to="/">
                    <div className={classes.NavBar__link_group}>
                        {AccountIcon}
                        <span className={classes.NavBar__link_text}>My Account</span>
                    </div>
                    
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;