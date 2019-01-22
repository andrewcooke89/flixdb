import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavouriteMovies, fetchFavouriteTv, fetchWatchListMovies, fetchWatchListTv } from '../../../store/actions/fetchLists';

class MyLists extends Component {

    componentDidMount() {
        this.props.onFetchFavouriteMovies(this.props.sessionId)
        this.props.onFetchFavouriteTv(this.props.sessionId)
        this.props.onFetchWatchListMovies(this.props.sessionId)
        this.props.onFetchWatchListTv(this.props.sessionId)
    }

    fetchListData = () => {
        this.props.onFetchFavouriteMovies(this.props.sessionId)
        this.props.onFetchFavouriteTv(this.props.sessionId)
        this.props.onFetchWatchListMovies(this.props.sessionId)
        this.props.onFetchWatchListTv(this.props.sessionId)
    }

    render() {

        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sessionId: state.auth.sessionId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFavouriteMovies: (sessionId) => dispatch(fetchFavouriteMovies(sessionId)),
        onFetchFavouriteTv: (sessionId) => dispatch(fetchFavouriteTv(sessionId)),
        onFetchWatchListMovies: (sessionId) => dispatch(fetchWatchListMovies(sessionId)),
        onFetchWatchListTv: (sessionId) => dispatch(fetchWatchListTv(sessionId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (MyLists);