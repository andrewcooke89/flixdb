import React, { Component } from 'react';
import classes from './TrendingCarousel.module.css';
import TrendingCarouselImg from '../../../Components/Carousels/TrendingCarouselImg/TrendingCarouselImg';
import { connect } from 'react-redux';
import { fetchTrendingMovies } from '../../../store/actions/fetchMovies';

class TrendingCarousel extends Component{

    state = {
        curPage: 1
    }

    componentDidMount () {
        // fetch the trending movies data
        this.props.onFetchTrendingMovies();
    }

    render() {

        // pagination back icon
        const backIcon = <svg  xmlns="http://www.w3.org/2000/svg" className={classes.TrendingCarousel__pag_back_icon} viewBox="0 0 20 20">
        <path d="M14.959 4.571l-7.203 4.949c0 0-0.279 0.201-0.279 0.481s0.279 0.479 0.279 0.479l7.203 4.951c0.572 0.38 1.041 0.099 1.041-0.626v-9.609c0-0.727-0.469-1.008-1.041-0.625zM6 4h-1c-0.553 0-1 0.048-1 0.6v10.8c0 0.552 0.447 0.6 1 0.6h1c0.553 0 1-0.048 1-0.6v-10.8c0-0.552-0.447-0.6-1-0.6z"></path>
        </svg>

        // pagination forward icon
        const forwardIcon = <svg  xmlns="http://www.w3.org/2000/svg" className={classes.TrendingCarousel__pag_forward_icon} viewBox="0 0 20 20">
        <title>controller-next</title>
        <path d="M12.244 9.52l-7.203-4.949c-0.572-0.383-1.041-0.102-1.041 0.625v9.609c0 0.725 0.469 1.006 1.041 0.625l7.203-4.951c0 0 0.279-0.199 0.279-0.478s-0.279-0.481-0.279-0.481zM14 4h1c0.553 0 1 0.048 1 0.6v10.8c0 0.552-0.447 0.6-1 0.6h-1c-0.553 0-1-0.048-1-0.6v-10.8c0-0.552 0.447-0.6 1-0.6z"></path>
        </svg>

        // selecting the current 5 film posters based on current page
        let curTrendingPage;
        if(this.state.curPage === 1){
            curTrendingPage = [...this.props.trendingMovies].slice(0, 5)
        } else if(this.state.curPage === 2) {
            curTrendingPage = [...this.props.trendingMovies].slice(5, 10)
        } else if(this.state.curPage === 3) {
            curTrendingPage = [...this.props.trendingMovies].slice(10, 15)
        } else if(this.state.curPage === 4) {
            curTrendingPage = [...this.props.trendingMovies].slice(15, 20)
        } 

        // iterating over the trendingmovies array to render carousel
        const curTrendingCarouselItems = curTrendingPage.map(card => {
            return (
                <TrendingCarouselImg 
                    image={`http://image.tmdb.org/t/p/w185${card.poster_path}`}
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

        return (
            <>
                <span onClick={pageBack} className={classes.TrendingCarousel__pag_back}>
                    {backIcon}
                </span>
                <div className={classes.TrendingCarousel}>
                    {curTrendingCarouselItems}
                </div>
                <span onClick={pageForward} className={classes.TrendingCarousel__pag_forward}>
                    {forwardIcon}
                </span>
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        trendingMovies: state.trendingResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchTrendingMovies: () => dispatch(fetchTrendingMovies())
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingCarousel);