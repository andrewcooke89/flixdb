import React from 'react';
import trendingImage from '../../../assets/john-moeses-bauan-713049-unsplash.jpg';
import classes from './TrendingCarouselImg.module.css';

const TrendingCarouselImg = (props) => {
    return (
        <img className={classes.TrendingCarouselImg} src={trendingImage} alt="Trending-1" />
    );
};

export default TrendingCarouselImg