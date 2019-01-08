import React from 'react';
import classes from './TrendingCarouselImg.module.css';

const TrendingCarouselImg = (props) => {
    return (
        <div className={classes.TrendingCarouselImg__Container}>
            <img className={classes.TrendingCarouselImg} src={props.image} alt="Trending-1" />
        </div>
    );
};

export default TrendingCarouselImg