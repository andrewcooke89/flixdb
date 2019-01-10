import React, { Component } from 'react';
import classes from './TrendingCarousel.module.css';
import TrendingCarouselImg from '../../../Components/Carousels/TrendingCarouselImg/TrendingCarouselImg';
import { connect } from 'react-redux';
import { fetchTrendingMovies } from '../../../store/actions/fetchMovies';
import { fetchTrendingTv } from '../../../store/actions/fetchTv';
import PagBack from '../../../Components/Carousels/PaginationButtons/PagBack/PagBack';
import PagForward from '../../../Components/Carousels/PaginationButtons/PagForward/PagForward';
import CarouselHeading from '../../../Components/Typography/CarouselHeading/CarouselHeading';

class TrendingCarousel extends Component{

    state = {
        curPage: 1
    }

    componentDidMount () {
        // fetch the trending movies data 
        this.props.onFetchTrendingMovies();
    }

    render() {

        // changes data list based on selection type
        let currentTrendingTypeData;
        if (this.props.selectorType === "movies"){
            currentTrendingTypeData = [...this.props.trendingMovies];
        } else {
            currentTrendingTypeData = [...this.props.trendingTv];
        }

        // selecting the current 5 film posters based on current page
        let curTrendingPage;
        if(this.state.curPage === 1){
            curTrendingPage = [...currentTrendingTypeData].slice(0, 5)
        } else if(this.state.curPage === 2) {
            curTrendingPage = [...currentTrendingTypeData].slice(5, 10)
        } else if(this.state.curPage === 3) {
            curTrendingPage = [...currentTrendingTypeData].slice(10, 15)
        } else if(this.state.curPage === 4) {
            curTrendingPage = [...currentTrendingTypeData].slice(15, 20)
        } 

        // iterating over the trendingmovies array to render carousel
        const curTrendingCarouselItems = curTrendingPage.map(card => {
            return (
                <TrendingCarouselImg 
                    image={`http://image.tmdb.org/t/p/w300${card.poster_path}`}
                    key={card.id}
                    id={card.id}
                    />
            );
        })

        // changes the current page
        const pageForward = () => {
            const curState = {...this.state};
            let newPage;
            if(curState.curPage < 4){
                newPage = curState.curPage += 1;
            } else if (curState.curPage === 4){
                newPage = 1;
            }
            this.setState({curPage:newPage})
        }

        // changes the current page
        const pageBack = () => {
            const curState = {...this.state}
            let newPage;
            if(curState.curPage > 1){
                newPage = curState.curPage -= 1;
            } else if (curState.curPage === 1){
                newPage = 4;
            }
            this.setState({curPage:newPage})
            
        }

        // placement styling props for the pagination
        const pagBackStyle = {
            gridArea: "trendingCarousel-start / 1 / trendingCarousel-end / 2"
        }
        const pagForStyle = {
            gridArea: "trendingCarousel-start / 16 / trendingCarousel-end / -1"
        }
        const headingStyle = {
            gridArea: "gutter-2 / 2 / trendingCarousel-start / 3"
        }

        return (
            <>
                <CarouselHeading headingText="TRENDING" headingStyleProp={headingStyle}/>
                <PagBack clickMethod={pageBack} styleProp={pagBackStyle}/>
                <div className={classes.TrendingCarousel}>
                    {curTrendingCarouselItems}
                </div>
                <PagForward clickMethod={pageForward} styleProp={pagForStyle} />
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        trendingMovies: state.movies.trendingResults,
        trendingTv: state.tv.trendingResults,
        selectorType: state.typeSelector.entertainmentType
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchTrendingMovies: () => dispatch(fetchTrendingMovies()),
        onFetchTrendingTv: () => dispatch(fetchTrendingTv()),
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingCarousel);