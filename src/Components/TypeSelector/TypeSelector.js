import React from 'react';
import classes from './TypeSelector.module.css';

const TypeSelector = (props) => {
    let styles;

    if(props.type === 'Movies') {
        styles = {
            gridArea: "TypeSelector-start / 5 / TypeSelector-end / 9"
        }
    } else {
        styles = {
            gridArea: "TypeSelector-start / 9 / TypeSelector-end / 13"
        }
    }

    return (
        <div style={styles}>
            <button className={classes.TypeSelector}>
                {props.type}
            </button>
        </div>    
    );
};

export default TypeSelector;