import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import apiKey from '../../assets/apikey';
import { fetchMoreInfo, fetchSimilar, fetchReviews, fetchTrailer } from '../../store/actions/fetchMoreInfo';
import classes from './MoreInfo.module.css';
import Footer from '../../Components/Footer/Footer';
import CarouselTemplate from '../../Components/Carousels/CarouselTemplate/CarouselTemplate';


class MoreInfo extends Component {


    
    // make api requests 
    componentDidMount() {
        this.fetchData()
    }

    // handle api requests using the id and type params from the previous link
    fetchData = (id = this.props.match.params.id, type = this.props.match.params.type) => {
        if (type === "movies") {
            this.props.onFetchMoreInfo(`https://api.themoviedb.org/3/movie/${id}?${apiKey}&language=en-US`)
            this.props.onFetchReviews(`https://api.themoviedb.org/3/movie/${id}/reviews?${apiKey}&language=en-US&page=1`)
            this.props.onFetchSimilar(`https://api.themoviedb.org/3/movie/${id}/similar?${apiKey}&language=en-US&page=1`)
            this.props.onFetchTrailer(`https://api.themoviedb.org/3/movie/${id}/videos?${apiKey}&language=en-US`)
            
        } else if (type === "tv") {
            this.props.onFetchMoreInfo(`https://api.themoviedb.org/3/tv/${id}?${apiKey}&language=en-US`)
            this.props.onFetchReviews(`https://api.themoviedb.org/3/tv/${id}/reviews?${apiKey}&language=en-US&page=1`)
            this.props.onFetchSimilar(`https://api.themoviedb.org/3/tv/${id}/similar?${apiKey}&language=en-US&page=1`)
            this.props.onFetchTrailer(`https://api.themoviedb.org/3/movie/${id}/videos?${apiKey}&language=en-US`)
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
    
    render() {
        
        // backdrop image from the api call
        const backdropStyle = {
            backgroundImage: `url('http://image.tmdb.org/t/p/original//${this.props.details.backdrop_path}')`
        };
        
        // film/tv title 
        const heading = this.props.details.original_title

        // star svg 
        const star = <svg className={classes.moreInfo__star}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20">
        <title>star</title>
        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
        </svg>

        // checks if there are reviews and then loops and displays them
        let reviews;
        let reviewsHeading;
        if(this.props.reviews) {
            reviewsHeading = <h2 className={classes.moreInfo__summary_heading}>Reviews</h2>
            reviews = this.props.reviews.map(review => {
                return (
                    <div className={classes.moreInfo__review}>
                        <h4 className={classes.moreInfo__review_author}>Author: {review.author}</h4>
                        <p className={classes.moreInfo__review_text}>{this.limitReview(review.content)}</p>
                        <hr className={classes.moreInfo__review_hr}/>
                    </div>
                )
            })  
        }
       
       
        return (
            <>
                <NavBar />

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
                        <h2 className={classes.moreInfo__summary_heading}>Plot Summary</h2>
                        <p className={classes.moreInfo__summary_text}>{this.props.details.overview}</p>
                        {reviewsHeading}
                        {reviews}
                    </div>

                    

                </main>
                <Footer />
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
        details: state.moreInfo.details
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMoreInfo: (url) => dispatch(fetchMoreInfo(url)),
        onFetchSimilar: (url) => dispatch(fetchSimilar(url)),
        onFetchReviews: (url) => dispatch(fetchReviews(url)),
        onFetchTrailer: (url) => dispatch(fetchTrailer(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);