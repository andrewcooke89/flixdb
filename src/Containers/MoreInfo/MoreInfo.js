import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import apiKey from '../../assets/apikey';
import { fetchMoreInfo, fetchSimilar, fetchReviews, fetchTrailer } from '../../store/actions/fetchMoreInfo';

class MoreInfo extends Component {


    

    componentDidMount() {
        this.fetchData()
    }

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
    
    render() {
        console.log(this.props.reviews, this.props.trailers, this.props.similar, this.props.details)
       
        return (
            <>
                <NavBar />

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