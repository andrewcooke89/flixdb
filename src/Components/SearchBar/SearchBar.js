import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={classes.SearchBar__searchBox}>
            <input className={classes.SearchBar}  type="search" placeholder="Search Movies and Series" />
        </div>
        
    );
};

export default SearchBar;