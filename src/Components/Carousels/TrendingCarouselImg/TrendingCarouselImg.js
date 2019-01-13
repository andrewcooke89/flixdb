import React from 'react';
import classes from './TrendingCarouselImg.module.css';
import { Link } from 'react-router-dom';

const TrendingCarouselImg = (props) => {
    return (
        <Link to={`/details/${props.type}/${props.id}`} className={classes.TrendingCarouselImg__Container}>
            <img className={classes.TrendingCarouselImg} src={props.image} alt="Trending-1" />
        </Link>
    );
};

export default TrendingCarouselImg