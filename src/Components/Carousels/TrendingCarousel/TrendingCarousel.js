import React from 'react';
import classes from './TrendingCarousel.module.css';
import trendingImage from '../../../assets/john-moeses-bauan-713049-unsplash.jpg';

const TrendingCarousel = () => {
    return (
        <div className={classes.TrendingCarousel}>
            <img className={classes.TrendingCarousel__image} src={trendingImage} alt="Trending-1" />
            <img className={classes.TrendingCarousel__image} src={trendingImage} alt="Trending-2" />
            <img className={classes.TrendingCarousel__image} src={trendingImage} alt="Trending-3" />
            <img className={classes.TrendingCarousel__image} src={trendingImage} alt="Trending-4" />
            <img className={classes.TrendingCarousel__image} src={trendingImage} alt="Trending-5" />
        </div>
    );
};

export default TrendingCarousel;