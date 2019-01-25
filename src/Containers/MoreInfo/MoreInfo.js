import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import apiKey from '../../assets/apikey';
import { withRouter } from 'react-router-dom';
import { fetchMoreInfo, fetchSimilar, fetchReviews, fetchTrailer } from '../../store/actions/fetchMoreInfo';
import classes from './MoreInfo.module.css';
import Footer from '../../Components/Footer/Footer';
import CarouselItem from '../../Components/Carousels/CarouselItem/CarouselItem';
import { addOrRemoveFromList } from '../../store/actions/listItems';


class MoreInfo extends Component {

    state = {
        page: 1,
      
    }
    
    // make api requests 
    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id){
            this.fetchData()
        }
    }
   

    // add item to fav or watchlist
    addToList = (listType) => {
        
        // checks media type
        let mediaType;
        if(this.props.match.params.type === "tv"){
            mediaType = "tv"
        } else {
            mediaType = "movie"
        }
       
        // sends post request via redux
        this.props.onAddOrRemoveFromList(this.props.sessionId, this.props.accountDetails.id, listType, this.props.details.id, mediaType, true )
    }

    // handle api requests using the id and type params from the previous link
    fetchData = (id = this.props.match.params.id, type = this.props.match.params.type) => {
        if (type === "movies" || type ==="movie") {
            this.props.onFetchMoreInfo(`https://api.themoviedb.org/3/movie/${id}?${apiKey}&language=en-US`)
            this.props.onFetchReviews(`https://api.themoviedb.org/3/movie/${id}/reviews?${apiKey}&language=en-US&page=1`)
            this.props.onFetchSimilar(`https://api.themoviedb.org/3/movie/${id}/similar?${apiKey}&language=en-US&page=1`)
            
            
        } else if (type === "tv") {
            this.props.onFetchMoreInfo(`https://api.themoviedb.org/3/tv/${id}?${apiKey}&language=en-US`)
            this.props.onFetchReviews(`https://api.themoviedb.org/3/tv/${id}/reviews?${apiKey}&language=en-US&page=1`)
            this.props.onFetchSimilar(`https://api.themoviedb.org/3/tv/${id}/similar?${apiKey}&language=en-US&page=1`)
            // this.props.onFetchTrailer(`https://api.themoviedb.org/3/movie/${id}/videos?${apiKey}&language=en-US`)
        }
    }

    // checks if review is longer than character limit and shortens it without cutting words
    limitReview = (review, limit = 200) => {
        const shortReview = [];
        if(review.length > limit){
            review.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    shortReview.push(cur);
                }
                return acc + cur.length;
            }, 0);

            return `${shortReview.join(' ')} ...`;
        }
        return review;
    }

    pageChange = () => {
        const curState = {...this.state};
        let newState;
        if(curState.page === 1){
            newState = 2;
        } else {
            newState = 1;
        }
        this.setState({page: newState})
    }
    
    render() {


         // Pag icons
         const backIcon = <svg  xmlns="http://www.w3.org/2000/svg" className={classes.moreInfo__similar_icon} viewBox="0 0 20 20">
         <path d="M14.959 4.571l-7.203 4.949c0 0-0.279 0.201-0.279 0.481s0.279 0.479 0.279 0.479l7.203 4.951c0.572 0.38 1.041 0.099 1.041-0.626v-9.609c0-0.727-0.469-1.008-1.041-0.625zM6 4h-1c-0.553 0-1 0.048-1 0.6v10.8c0 0.552 0.447 0.6 1 0.6h1c0.553 0 1-0.048 1-0.6v-10.8c0-0.552-0.447-0.6-1-0.6z"></path>
         </svg>
 
         const forwardIcon = <svg  xmlns="http://www.w3.org/2000/svg" className={classes.moreInfo__similar_icon} viewBox="0 0 20 20">
         <title>controller-next</title>
         <path d="M12.244 9.52l-7.203-4.949c-0.572-0.383-1.041-0.102-1.041 0.625v9.609c0 0.725 0.469 1.006 1.041 0.625l7.203-4.951c0 0 0.279-0.199 0.279-0.478s-0.279-0.481-0.279-0.481zM14 4h1c0.553 0 1 0.048 1 0.6v10.8c0 0.552-0.447 0.6-1 0.6h-1c-0.553 0-1-0.048-1-0.6v-10.8c0-0.552 0.447-0.6 1-0.6z"></path>
         </svg>
 
        
        // backdrop image from the api call
        
        let backdropStyle;
        if(this.props.details.backdrop_path){
            backdropStyle = {
                backgroundImage: `url('http://image.tmdb.org/t/p/original//${this.props.details.backdrop_path}')`
            };
           

        }

        // film/tv title 
        let heading;
        if(this.props.match.params.type !== 'tv'){
            heading = this.props.details.title
        } else {
            heading = this.props.details.name
        }
        
        // star svg 
        const star = <svg className={classes.moreInfo__star}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20">
        <title>star</title>
        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
        </svg>

        // checks if there are reviews and then loops and displays them
        let reviews;
        let reviewsHeading;
        if(this.props.reviews.length > 0) {
            reviewsHeading = <h2 className={classes.moreInfo__summary_heading}>Reviews</h2>
            reviews = this.props.reviews.map(review => {
                return (
                    <div key={review.id} className={classes.moreInfo__review}>
                        <h4 key={`h4${review.id}`} className={classes.moreInfo__review_author}>Author: {review.author}</h4>
                        <p key={`p${review.id}`} className={classes.moreInfo__review_text}>{this.limitReview(review.content)}</p>
                        <a key={`a${review.id}`} className={classes.moreInfo__review_link} href={review.url}>Read full review</a>
                        <hr key={`hr${review.id}`} className={classes.moreInfo__review_hr}/>
                    </div>
                )
            })  
        }

        // Similar Carousel
        let curCarouselPage;
        let curCarouselItems;
        let carouselHeading = null
        let pagBack = null;
        let pagForward = null;
        if(this.props.similar.length > 0){
            if (this.state.page === 1){
                curCarouselPage = [...this.props.similar].slice(0, 8) 
            } else  {
                curCarouselPage = [...this.props.similar].slice(8,16)
            }

            carouselHeading = <h2 className={classes.moreInfo__summary_heading}>Others you might like</h2>

            pagBack = <div className={classes.moreInfo__similar_pagBack}>
                        <button    
                            className={classes.moreInfo__similar_btn} onClick=  {this.pageChange}>{backIcon}
                        </button>
                        </div>

            pagForward = <div className={classes.moreInfo__similar_pagForward}>
                        <button 
                            className={classes.moreInfo__similar_btn} 
                            onClick={this.pageChange}>
                            {forwardIcon}
                        </button>
                        </div>

            curCarouselItems = curCarouselPage.map(card => {
                return (
                    <CarouselItem
                        item={`http://image.tmdb.org/t/p/w300${card.poster_path}`}
                        key={card.id}
                        id={card.id}
                        type={this.props.match.params.type}
                        />
                );
            })
        }

        let addToListButtons;
        this.props.loginStatus === "loggedOut" ? addToListButtons = null : addToListButtons = <div>
            <button 
                onClick={() => this.addToList("favorite")}
                className={classes.moreInfo__summary_addTo}>
                Add to Favorites
            </button>
            <button 
                onClick={() => this.addToList("watchlist")}
                className={classes.moreInfo__summary_addTo}>
                Add to Watchlist
            </button>
        </div>

        return (
            <>
                <NavBar loginStatus={this.props.loginStatus} />
                <div style={backdropStyle} className={classes.moreInfo__backdrop}></div>

                <div className={classes.moreInfo__heading}>
                    <h1 className={classes.moreInfo__title}>{heading}</h1>  
                    <p className={classes.moreInfo__rating}>
                        {this.props.details.vote_average}
                        {star}
                    </p>
                </div>
                <main>

                    <div className={classes.moreInfo__summary_container}>
                        {addToListButtons}
                        <h2 className={classes.moreInfo__summary_heading}>Plot Summary</h2>
                        <p className={classes.moreInfo__summary_text}>{this.props.details.overview}</p>
                        {reviewsHeading}
                        {reviews}

                        {carouselHeading}
                    </div>

                    
                    <div className={classes.moreInfo__similar_container}>
                        
                        {pagBack}

                        <div className={classes.moreInfo__similar_carousel}>
                            {curCarouselItems}
                        </div>

                        {pagForward}
                    </div>

                </main>
                <Footer loginStatus={this.props.loginStatus}  />
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        selectorType: state.typeSelector.entertainmentType,
        reviews: state.moreInfo.reviews,
        trailers: state.moreInfo.trailers,
        similar: state.moreInfo.similar,
        details: state.moreInfo.details,
        loginStatus: state.auth.loginStatus,
        sessionId: state.auth.sessionId,
        accountDetails: state.auth.accountDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMoreInfo: (url) => dispatch(fetchMoreInfo(url)),
        onFetchSimilar: (url) => dispatch(fetchSimilar(url)),
        onFetchReviews: (url) => dispatch(fetchReviews(url)),
        onFetchTrailer: (url) => dispatch(fetchTrailer(url)),
        onAddOrRemoveFromList: (sessionId, accountId, listType, id, mediaType, boolSelector) => dispatch(addOrRemoveFromList(sessionId, accountId, listType, id, mediaType, boolSelector))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoreInfo));