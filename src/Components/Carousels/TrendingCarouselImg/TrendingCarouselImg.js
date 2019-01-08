import React from 'react';
import classes from './TrendingCarouselImg.module.css';

const TrendingCarouselImg = (props) => {
    return (
        <img className={classes.TrendingCarouselImg} src={props.image} alt="Trending-1" />
    );
};

export default TrendingCarouselImg