import React from 'react';
import classes from './TrendingCarousel.module.css';
import TrendingCarouselImg from './TrendingCarouselImg/TrendingCarouselImg';


const TrendingCarousel = () => {

    const backIcon = <svg  xmlns="http://www.w3.org/2000/svg" className={classes.TrendingCarousel__pag_back_icon} viewBox="0 0 20 20">
    <path d="M14.959 4.571l-7.203 4.949c0 0-0.279 0.201-0.279 0.481s0.279 0.479 0.279 0.479l7.203 4.951c0.572 0.38 1.041 0.099 1.041-0.626v-9.609c0-0.727-0.469-1.008-1.041-0.625zM6 4h-1c-0.553 0-1 0.048-1 0.6v10.8c0 0.552 0.447 0.6 1 0.6h1c0.553 0 1-0.048 1-0.6v-10.8c0-0.552-0.447-0.6-1-0.6z"></path>
    </svg>

    const forwardIcon = <svg  xmlns="http://www.w3.org/2000/svg" className={classes.TrendingCarousel__pag_forward_icon} viewBox="0 0 20 20">
    <title>controller-next</title>
    <path d="M12.244 9.52l-7.203-4.949c-0.572-0.383-1.041-0.102-1.041 0.625v9.609c0 0.725 0.469 1.006 1.041 0.625l7.203-4.951c0 0 0.279-0.199 0.279-0.478s-0.279-0.481-0.279-0.481zM14 4h1c0.553 0 1 0.048 1 0.6v10.8c0 0.552-0.447 0.6-1 0.6h-1c-0.553 0-1-0.048-1-0.6v-10.8c0-0.552 0.447-0.6 1-0.6z"></path>
    </svg>
    
    return (
        <>
            <span className={classes.TrendingCarousel__pag_back}>
                {backIcon}
            </span>
            <div className={classes.TrendingCarousel}>
                <TrendingCarouselImg />
                <TrendingCarouselImg />
                <TrendingCarouselImg />
                <TrendingCarouselImg />
                <TrendingCarouselImg />
            </div>
            <span className={classes.TrendingCarousel__pag_forward}>
                {forwardIcon}
            </span>
        </>
    );
};

export default TrendingCarousel;