import React from 'react';
import CarouselHeading from '../../../Components/Typography/CarouselHeading/CarouselHeading';
import CarouselItem from '../CarouselItem/CarouselItem';
import classes from './CarouselTemplate.module.css';
import PagBack from '../PaginationButtons/PagBack/PagBack';
import PagForward from '../PaginationButtons/PagForward/PagForward';

const CarouselTemplate = (props) => {

    // media query - items per carousel based on screen size
    let curPageList;
    const mediaQuery = (items) => {
        if (props.page === 1){
            curPageList = [...props.itemList].slice(0,items);
        } else if (props.page === 2) {
            curPageList = [...props.itemList].slice(items, items*2);
        }
    }   

    if (document.documentElement.clientWidth > 900) {
        mediaQuery(10);
    } else if ((document.documentElement.clientWidth < 900) && (document.documentElement.clientWidth > 500)) {
        mediaQuery(5);
    } else if (document.documentElement.clientWidth < 500) {
        mediaQuery(3);
    }

    const listItems = curPageList.map(item => {
        if (item.poster_path) {
            return (
                <CarouselItem 
                item={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
                key={item.id}
                id={item.id}
                type={props.type}
                />
        )
        }
        
    })
    return (
        <>
            <PagBack clickMethod={props.pagBackClickMethod} styleProp={props.pagBackStyleProp}/>
            <PagForward clickMethod={props.pagForwardClickMethod} styleProp={props.pagForwardStyleProp}/>
            <CarouselHeading headingText={props.headingText} headingStyleProp={props.headingStyleProp}/>
            <div className={classes.Carousel__Container} style={props.CarouselStyle}>
                {listItems}
            </div>
        </>
    );
};

export default CarouselTemplate;