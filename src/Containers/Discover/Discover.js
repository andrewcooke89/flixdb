import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import classes from './Discover.module.css';
import { fetchDiscover } from '../../store/actions/fetchDiscover';
import CarouselItem from '../../Components/Carousels/CarouselItem/CarouselItem';
import apiKey from '../../assets/apikey';

class Discover extends Component {

    state = {
        mediaType: "movie",
        sortBy: "",
        genre: "",
        year: "",
        page: 1
    }

    componentDidMount(){
        this.props.onFetchDiscover("https://api.themoviedb.org/3/discover/movie?api_key=75bed52e5460f1769ab1519250e6b314&language=en-uk&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");
    }

    fetchData = () => {
        this.props.onFetchDiscover(`https://api.themoviedb.org/3/discover/${this.state.mediaType}?${apiKey}&language=en-uk&sort_by=${this.state.sortBy}&include_adult=false&include_video=false&page=${this.state.page}${this.state.genre}${this.state.year}`);
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.fetchData();
    }

    onChangePage = (type) => {
        if(type === "forward"){
            let newState = {...this.state};
            newState.page += 1;
            this.setState({page: newState.page});
            this.fetchData();
        } else if (type === "back") {
            let newState = {...this.state};
            if (newState.page > 1) {
                newState.page -= 1;
                this.setState({page: newState.page})
                this.fetchData();
            } 
        }
    }

   

    render(){
        console.log(this.state)
        const searchIcon = <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
        <title>search</title>
        <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
        </svg>

        let discoverItemList;
        if(this.props.discover.length > 0) {
            discoverItemList = this.props.discover.map(result=> {
                return (
                    <CarouselItem
                        margin={{marginRight: "1.3rem", marginBottom: "3rem"}}
                        item={`http://image.tmdb.org/t/p/w300${result.poster_path}`}
                        key={result.id}
                        id={result.id}
                        type={this.state.mediaType}
                    />
                )
            })
        }

     
        
        return (
            <>
                <NavBar loginStatus={this.props.loginStatus} />
                <main >
                    <div className={classes.discover}>
                        <h1 className={classes.discover__heading}>DISCOVER NEW ENTERTAINMENT </h1>
                        <form method="GET"  className={classes.discover__form}>
                           {/* media type */}
                            <select 
                                onChange={e => this.setState({mediaType: e.target.value})}
                                className={classes.discover__filter}                  
                                ref="mediaType"
                            >
                                <option value="movie">Movie</option>
                                <option value="tv">TV</option>
                            </select>
                            {/* sort by */}
                            <select className={classes.discover__filter} ref="sortBy"
                                    onChange={e => this.setState({sortBy: e.target.value})}>
                                <option value="">Sort</option>
                                <option value="popularity.desc">Popularity.desc</option>
                                <option value="popularity.asc">Popularity.asc</option>
                                <option value="release_date.asc">Release_Date.asc</option>
                                <option value="release_date.desc">Release_Date.desc</option>
                                <option value="average_vote.asc">Rating.asc</option>
                                <option value="average_vote.desc">Rating.desc</option>
                                <option value="original_title.asc">Title.asc</option>
                                <option value="original_title.desc">Title.desc</option>
                            </select>
                            {/* genre */}
                            <select 
                                onChange={e => this.setState({genre: `${"&with_genres="}${e.target.value}`})}
                                className={classes.discover__filter} ref="genre">
                                <option value="">Genre</option>
                                <option value="28">Action</option>
                                <option value="12">Adventure</option>
                                <option value="16">Annimation</option>
                                <option value="35">Comedy</option>
                                <option value="80">Crime</option>
                                <option value="99">Documentary</option>
                                <option value="18">Drama</option>
                                <option value="10751">Family</option>
                                <option value="14">Fantasy</option>
                                <option value="36">History</option>
                                <option value="27">Horror</option>
                                <option value="10402">Music</option>
                                <option value="9648">Mystery</option>
                                <option value="10749">Romance</option>
                                <option value="878">Science Fiction</option>
                                <option value="10770">TV Movie</option>
                                <option value="53">Thriller</option>
                                <option value="10752">War</option>
                                <option value="37">Western</option>
                            </select>
                            <input 
                                className={classes.discover__filter} 
                                ref="yearInput" 
                                type="number" 
                                min="1930" 
                                max="2019" 
                                step="1" 
                                placeholder="Year" 
                                onChange={e => this.setState({year: `${"&year="}${e.target.value}`})}/>
                            
                            <button className={classes.discover__btn} onClick={this.onSubmit}  type="submit">{searchIcon}</button>
                        </form>
                    </div>

                    <hr className={classes.discover__hr}/>
                    
                    <div className={classes.discover__resultsContainer}>
                        <div className={classes.discover__resultsContainer_list}>
                            {discoverItemList}
                        </div>
                    </div>

                    

                    <div className={classes.discover__resultsContainer_btnContainer}>
                        <button 
                            style={{marginRight: "2rem", marginLeft: "-2rem"}}  
                            className={classes.discover__resultsContainer_changePage}
                            onClick={() => this.onChangePage("back")}>
                            Previous Page
                        </button>
                        <button 
                            className={classes.discover__resultsContainer_changePage} 
                            onClick={() => this.onChangePage("forward")}>
                            Next Page
                        </button>
                    </div>
                </main>
                <Footer loginStatus={this.props.loginStatus} />
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        discover: state.discover.discoverResults,
        loginStatus: state.auth.loginStatus
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchDiscover: (url) => dispatch(fetchDiscover(url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Discover);