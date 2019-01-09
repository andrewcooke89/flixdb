import React from 'react';
import CarouselHeading from '../../../Components/Typography/CarouselHeading/CarouselHeading';
import CarouselItem from '../CarouselItem/CarouselItem';
import classes from './CarouselTemplate.module.css';
import PagBack from '../PaginationButtons/PagBack/PagBack';
import PagForward from '../PaginationButtons/PagForward/PagForward';

const CarouselTemplate = (props) => {
    // selects items based on cur page
    let curPageList;
    if (props.page === 1){
        curPageList = [...props.itemList].slice(0,8);
    } else if (props.page === 2) {
        curPageList = [...props.itemList].slice(8,16);
    }

    const listItems = curPageList.map(item => {
        return (
            <CarouselItem 
            item={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
            key={item.id}
            id={item.id}
            />
        )
        
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