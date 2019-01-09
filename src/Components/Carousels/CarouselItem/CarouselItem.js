import React from 'react';
import classes from './CarouselItem.module.css';


const CarouselItem = (props) => {
    return (
        <div className={classes.CarouselItem__Container}>
            <img className={classes.CarouselItem} src={props.item} alt="Carousel Item" />
            
        </div>
    );
};

export default CarouselItem;