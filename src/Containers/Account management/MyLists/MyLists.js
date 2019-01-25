import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import apiKey from '../../../assets/apikey';
import classes from './MyLists.module.css';
import { addOrRemoveFromList } from '../../../store/actions/listItems';
import { fetchAccountDetails } from '../../../store/actions/auth';

class MyLists extends Component {

    state = {
        error: false,
        favoriteMovies: [],
        favoriteTv: [],
        watchlistMovies: [],
        watchlistTv: [],
        accountDetails: {}
    }

    // fetches all list data on mount and saves to local state
    componentDidMount() {
        this.fetchData();
    }

    // fetch favorite and watchlist lists
    fetchData = () => {
        fetch(`https://api.themoviedb.org/3/account/{account_id}/favorite/movies?${apiKey}&session_id=${this.props.sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ favoriteMovies: data.results }))
        .catch(err => this.setState({error: true}));

        fetch(`https://api.themoviedb.org/3/account/{account_id}/favorite/tv?${apiKey}&session_id=${this.props.sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ favoriteTv: data.results }))
        .catch(err => this.setState({error: true}));
        
        fetch(`https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?${apiKey}&session_id=${this.props.sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ watchlistMovies: data.results }))
        .catch(err => this.setState({error: true}));

        fetch(`https://api.themoviedb.org/3/account/{account_id}/watchlist/tv?${apiKey}&session_id=${this.props.sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ watchlistTv: data.results }))
        .catch(err => this.setState({error: true}));

        // fetch account details
        this.props.onFetchAccountDetails(`https://api.themoviedb.org/3/account?${apiKey}&session_id=${this.props.sessionId}`)


        // fetch(`https://api.themoviedb.org/3/account?${apiKey}&session_id=${this.props.sessionId}`)
        // .then(res => res.json())
        // .then(data => this.setState({ accountDetails: data }));
    }

    // handles logic for remove items from lists
    handleRemoveFromList = (listType, id, mediaType) => {
        
        this.props.onAddorRemoveFromList(this.props.sessionId, this.props.accountDetails.id, listType, id, mediaType, false)

        // removes from state/render based on id
        if(listType === "favorite" && mediaType === "movie"){
            let newState = [...this.state.favoriteMovies]
            for(let i = 0; i < newState.length; i++){
                if(newState[i].id === id){
                    newState.splice(i, 1);
                    this.setState({favoriteMovies: newState});
                }
            }
        } else if (listType === "favorite" && mediaType === "tv"){
            let newState = [...this.state.favoriteTv]
            for(let i = 0; i < newState.length; i++){
                if(newState[i].id === id){
                    newState.splice(i, 1);
                    this.setState({favoriteTv: newState});
                }
            }
        } else if (listType === "watchlist" && mediaType === "movie"){
            let newState = [...this.state.watchlistMovies]
            for(let i = 0; i < newState.length; i++){
                if(newState[i].id === id){
                    newState.splice(i, 1);
                    this.setState({watchlistMovies: newState});
                }
            }
        } else if (listType === "watchlist" && mediaType === "tv") {
            let newState = [...this.state.watchlistTv]
            for(let i = 0; i < newState.length; i++){
                if(newState[i].id === id){
                    newState.splice(i, 1);
                    this.setState({watchlistTv: newState});
                }
            }
        }
    };

    

    render() {

        // displays error message on error
        let itemList;
        if(this.state.error){
            itemList = <h3 className={classes.myLists__noItem}> Sorry your list couldnt be displayed </h3>
        // checks ther are items and displays message if not 
        } else if(this.props.listType === "favoriteMovies" && this.state.favoriteMovies.length === 0) {
           itemList = <p className={classes.myLists__noItem}>You have no items in this list</p>
        // if there are items, maps over and creates the list 
        } else if (this.props.listType === "favoriteMovies" && this.state.favoriteMovies.length > 0){
            itemList = this.state.favoriteMovies.map (item => {
                // checks if description is over limit and reduces if is
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
                    // creates each list item 
                    <div key={`${item.title}container`} className={classes.myLists__listItem}>
                        <Link 
                            key={item.id}
                            to={`/details/movie/${item.id}`} 
                            className={classes.myLists__listItem_picture}
                            >

                            <img 
                                key={`${item.title}pic`}
                                className={classes.myLists__listItem_picture} 
                                src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                alt={item.title} 
                            />
                        </Link>

                        <div 
                            key={`${item.title}div`} 
                            className={classes.myLists__listItem_info}>

                            <div 
                                key={`${item.title}2`}
                                className={classes.myLists__listItem_removeContainer}>
                                <h3 
                                    key={`${item.title}h3`} 
                                    className={classes.myLists__listItem_info_text}>
                                    Title: {item.title}
                                </h3>

                                <button
                                    onClick={() => this.handleRemoveFromList("favorite", item.id, "movie")}
                                    key={`${item.title}remove`}
                                    className={classes.myLists__listItem_remove}>
                                    Remove from list
                                </button>

                            </div>
                            
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

        else if(this.props.listType === "favoriteTv" && this.state.favoriteTv.length === 0) {
            itemList = <p className={classes.myLists__noItem}>You have no items in this list</p>
 
         } else if (this.props.listType === "favoriteTv" && this.state.favoriteTv.length > 0){
             itemList = this.state.favoriteTv.map (item => {
 
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
                     <div key={`${item.name}container`} className={classes.myLists__listItem}>
                         <Link 
                             key={item.id}
                             to={`/details/tv/${item.id}`} 
                             className={classes.myLists__listItem_picture}
                             >
 
                             <img 
                                 key={`${item.name}pic`}
                                 className={classes.myLists__listItem_picture} 
                                 src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                 alt={item.name} 
                             />
                         </Link>
 
                         <div 
                             key={`${item.name}div`} 
                             className={classes.myLists__listItem_info}>
                             
                            <div 
                                key={`${item.name}div2`}
                                className={classes.myLists__listItem_removeContainer}>
                                <h3 
                                    key={`${item.name}h3`} 
                                    className={classes.myLists__listItem_info_text}>
                                    Name: {item.name}
                                </h3>

                                <button
                                    key={`${item.name}remove`}
                                    onClick={() => this.handleRemoveFromList("favorite", item.id, "tv")}
                                    className={classes.myLists__listItem_remove}>
                                    Remove from list
                                </button>

                            </div>
 
                             <p 
                                 key={`${item.name}rating`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Rating: {item.average_vote}
                             </p>
 
                             <p 
                                 key={`${item.name}overview`} 
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
                                key={`${item.title}pic`}
                                 className={classes.myLists__listItem_picture} 
                                 src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                 alt={item.title} 
                             />
                         </Link>
 
                         <div 
                             key={`${item.title}div`} 
                             className={classes.myLists__listItem_info}>
                             
                            <div 
                                key={`${item.title}div2`}
                                className={classes.myLists__listItem_removeContainer}>
                                <h3 
                                    key={`${item.title}h3`} 
                                    className={classes.myLists__listItem_info_text}>
                                    Title: {item.title}
                                </h3>

                                <button
                                    key={`${item.title}remove`}
                                    onClick={() => this.handleRemoveFromList("watchlist", item.id, "movie")}
                                    className={classes.myLists__listItem_remove}>
                                    Remove from list
                                </button>

                            </div>
 
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
                     <div key={`${item.name}container`} className={classes.myLists__listItem}>
                         <Link 
                             key={item.id}
                             to={`/details/tv/${item.id}`} 
                             className={classes.myLists__listItem_picture}
                             >
 
                             <img 
                                 key={`${item.name}pic`}
                                 className={classes.myLists__listItem_picture} 
                                 src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                 alt={item.title} 
                             />
                         </Link>
 
                         <div 
                             key={`${item.name}div`} 
                             className={classes.myLists__listItem_info}>
                             
                            <div 
                                key={`${item.name}div2`}
                                className={classes.myLists__listItem_removeContainer}>
                                <h3 
                                    key={`${item.name}h3`} 
                                    className={classes.myLists__listItem_info_text}>
                                    Name: {item.name}
                                </h3>

                                <button
                                    key={`${item.name}remove`}
                                    onClick={() => this.handleRemoveFromList("watchlist", item.id, "tv")}
                                    className={classes.myLists__listItem_remove}>
                                    Remove from list
                                </button>

                            </div>
                             <p 
                                 key={`${item.name}rating`} 
                                 className={classes.myLists__listItem_info_text}>
                                 Rating: {item.average_vote}
                             </p>
 
                             <p 
                                 key={`${item.name}overview`} 
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
        listData: state.lists,
        accountDetails: state.auth.accountDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddorRemoveFromList: (sessionId, accountId, listType, id, mediaType, boolSelector) => dispatch(addOrRemoveFromList(sessionId, accountId, listType, id, mediaType, boolSelector)),
        onFetchAccountDetails: (url) => dispatch(fetchAccountDetails(url))
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (MyLists);