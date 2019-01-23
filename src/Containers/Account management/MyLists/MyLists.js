import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import apiKey from '../../../assets/apikey';
import classes from './MyLists.module.css';

class MyLists extends Component {

    state = {
        error: false,
        favouriteMovies: [],
        favouriteTv: [],
        watchlistMovies: [],
        watchlistTv: []
    }

    componentDidMount() {
        // this.props.onFetchFavouriteMovies(this.props.sessionId)
        // this.props.onFetchFavouriteTv(this.props.sessionId)
        // this.props.onFetchWatchListMovies(this.props.sessionId)
        // this.props.onFetchWatchListTv(this.props.sessionId)
        this.fetchData();
    }

    fetchData = () => {
        fetch(`https://api.themoviedb.org/3/account/{account_id}/favorite/movies?${apiKey}&session_id=${this.props.sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ favouriteMovies: data.results }))
        .catch(err => this.setState({error: true}));

        fetch(`https://api.themoviedb.org/3/account/{account_id}/favorite/tv?${apiKey}&session_id=${this.props.sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ favouriteTv: data.results }))
        .catch(err => this.setState({error: true}));
        
        fetch(`https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?${apiKey}&session_id=${this.props.sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ watchlistMovies: data.results }))
        .catch(err => this.setState({error: true}));

        fetch(`https://api.themoviedb.org/3/account/{account_id}/watchlist/tv?${apiKey}&session_id=${this.props.sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ watchlistTv: data.results }))
        .catch(err => this.setState({error: true}));
    }

    

    render() {

        let itemList;
        if(this.state.error){
            itemList = <h3 className={classes.myLists__noItem}> Sorry your list couldnt be displayed </h3>
        } else if(this.props.listType === "favouriteMovies" && this.state.favouriteMovies.length === 0) {
           itemList = <p>You have no items in this list</p>

        } else if (this.props.listType === "favouriteMovies" && this.state.favouriteMovies.length > 0){
            itemList = this.state.favouriteMovies.map (item => {

                const limitOverview = (overview, limit = 100) => {
                    const shortOverview = [];
                    if(overview.length > limit){
                        overview.split(' ').reduce((acc, cur) => {
                            if (acc + cur.length <= limit) {
                                shortOverview.push(cur);
                            }
                            return acc + cur.length;
                        }, 0);
            
                        return `${shortOverview.join(' ')} ...`;
                    }
                    return overview;
                }
                return (
                    <div key={`${item.title}container`} className={classes.myLists__listItem}>
                        <Link 
                            key={item.id}
                            to={`/details/movie/${item.id}`} 
                            className={classes.myLists__listItem_picture}
                            >

                            <img 
                                className={classes.myLists__listItem_picture} 
                                src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                alt={item.title} 
                            />
                        </Link>

                        <div 
                            key={`${item.title}div`} 
                            className={classes.myLists__listItem_info}>
                            
                            <h3 
                                key={`${item.title}h3`} 
                                className={classes.myLists__listItem_info_text}>
                                Title: {item.title}
                            </h3>

                            <p 
                                key={`${item.title}rating`} 
                                className={classes.myLists__listItem_info_text}>
                                Rating: {item.average_vote}
                            </p>

                            <p 
                                key={`${item.title}overview`} 
                                className={classes.myLists__listItem_info_text}>
                                Description: {limitOverview(item.overview)}
                            </p>
                        </div>
                    </div>
                )
            })
        }

        else if(this.props.listType === "favouriteTv" && this.state.favouriteTv.length === 0) {
            itemList = <p className={classes.myLists__noItem}>You have no items in this list</p>
 
         } else if (this.props.listType === "favouriteTv" && this.state.favouriteTv.length > 0){
             itemList = this.state.favouriteTv.map (item => {
 
                 const limitOverview = (overview, limit = 100) => {
                     const shortOverview = [];
                     if(overview.length > limit){
                         overview.split(' ').reduce((acc, cur) => {
                             if (acc + cur.length <= limit) {
                                 shortOverview.push(cur);
                             }
                             return acc + cur.length;
                         }, 0);
             
                         return `${shortOverview.join(' ')} ...`;
                     }
                     return overview;
                 }
                 return (
                     <div key={`${item.title}container`} className={classes.myLists__listItem}>
                         <Link 
                             key={item.id}
                             to={`/details/tv/${item.id}`} 
                             className={classes.myLists__listItem_picture}
                             >
 
                             <img 
                                 className={classes.myLists__listItem_picture} 
                                 src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                 alt={item.title} 
                             />
                         </Link>
 
                         <div 
                             key={`${item.title}div`} 
                             className={classes.myLists__listItem_info}>
                             
                             <h3 
                                 key={`${item.title}h3`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Title: {item.title}
                             </h3>
 
                             <p 
                                 key={`${item.title}rating`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Rating: {item.average_vote}
                             </p>
 
                             <p 
                                 key={`${item.title}overview`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Description: {limitOverview(item.overview)}
                             </p>
                         </div>
                     </div>
                 )
             })
         } 
         
         else if(this.props.listType === "watchListMovies" && this.state.watchlistMovies.length === 0) {
            itemList = <p className={classes.myLists__noItem}>You have no items in this list</p>
 
         } else if (this.props.listType === "watchListMovies" && this.state.watchlistMovies.length > 0){
             itemList = this.state.watchlistMovies.map (item => {
 
                 const limitOverview = (overview, limit = 100) => {
                     const shortOverview = [];
                     if(overview.length > limit){
                         overview.split(' ').reduce((acc, cur) => {
                             if (acc + cur.length <= limit) {
                                 shortOverview.push(cur);
                             }
                             return acc + cur.length;
                         }, 0);
             
                         return `${shortOverview.join(' ')} ...`;
                     }
                     return overview;
                 }
                 return (
                     <div key={`${item.title}container`} className={classes.myLists__listItem}>
                         <Link 
                             key={item.id}
                             to={`/details/movie/${item.id}`} 
                             className={classes.myLists__listItem_picture}
                             >
 
                             <img 
                                 className={classes.myLists__listItem_picture} 
                                 src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                 alt={item.title} 
                             />
                         </Link>
 
                         <div 
                             key={`${item.title}div`} 
                             className={classes.myLists__listItem_info}>
                             
                             <h3 
                                 key={`${item.title}h3`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Title: {item.title}
                             </h3>
 
                             <p 
                                 key={`${item.title}rating`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Rating: {item.average_vote}
                             </p>
 
                             <p 
                                 key={`${item.title}overview`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Description: {limitOverview(item.overview)}
                             </p>
                         </div>
                     </div>
                 )
             })
         }

         else if(this.props.listType === "watchListTv" && this.state.watchlistTv.length === 0) {
            itemList = <p className={classes.myLists__noItem}>You have no items in this list</p>
 
         } else if (this.props.listType === "watchListTv" && this.state.watchlistTv.length > 0){
             itemList = this.state.watchlistTv.map (item => {
 
                 const limitOverview = (overview, limit = 100) => {
                     const shortOverview = [];
                     if(overview.length > limit){
                         overview.split(' ').reduce((acc, cur) => {
                             if (acc + cur.length <= limit) {
                                 shortOverview.push(cur);
                             }
                             return acc + cur.length;
                         }, 0);
             
                         return `${shortOverview.join(' ')} ...`;
                     }
                     return overview;
                 }
                 return (
                     <div key={`${item.title}container`} className={classes.myLists__listItem}>
                         <Link 
                             key={item.id}
                             to={`/details/tv/${item.id}`} 
                             className={classes.myLists__listItem_picture}
                             >
 
                             <img 
                                 className={classes.myLists__listItem_picture} 
                                 src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                 alt={item.title} 
                             />
                         </Link>
 
                         <div 
                             key={`${item.title}div`} 
                             className={classes.myLists__listItem_info}>
                             
                             <h3 
                                 key={`${item.title}h3`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Title: {item.title}
                             </h3>
 
                             <p 
                                 key={`${item.title}rating`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Rating: {item.average_vote}
                             </p>
 
                             <p 
                                 key={`${item.title}overview`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Description: {limitOverview(item.overview)}
                             </p>
                         </div>
                     </div>
                 )
             })
         }


        return (
            <div className={classes.myLists__list}>
                {itemList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sessionId: state.auth.sessionId,
        listType: state.lists.listType,
        listData: state.lists
    };
};



export default connect(mapStateToProps) (MyLists);