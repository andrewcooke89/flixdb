import React from 'react';
import classes from './CarouselItem.module.css';
import { Link } from 'react-router-dom';


const CarouselItem = (props) => {
    return (
        <Link to={`/details/${props.type}/${props.id}`} className={classes.CarouselItem__Container}>
            <img className={classes.CarouselItem} src={props.item} alt="Carousel Item" />
        </Link>
    );
};

export default CarouselItem;