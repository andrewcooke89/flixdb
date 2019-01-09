import React from 'react';
import classes from './CarouselHeading.module.css';

const CarouselHeading = (props) => {
    return (
        <div className={classes.CarouselHeading__Container} style={props.headingStyleProp}>
            <h2 className={classes.CarouselHeading}>{props.headingText}</h2>
        </div>
    );
};

export default CarouselHeading;