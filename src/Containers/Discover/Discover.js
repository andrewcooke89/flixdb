import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import classes from './Discover.module.css';

class Discover extends Component {
    render(){

        const searchIcon = <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
        <title>search</title>
        <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
        </svg>
        
        return (
            <>
                <NavBar />
                <main className={classes.discover}>
                    <h1 className={classes.discover__heading}>DISCOVER NEW ENTERTAINMENT </h1>
                    <form className={classes.discover__form}>
                        {/* sort by */}
                        <select className={classes.discover__filter} id="sortBy">
                            <option value="">Sort</option>
                            <option value="popularity.asc">Popularity.asc</option>
                            <option value="popularity.desc">Popularity.desc</option>
                            <option value="release_date.asc">Release_Date.asc</option>
                            <option value="release_date.desc">Release_Date.desc</option>
                            <option value="average_vote.asc">Rating.asc</option>
                            <option value="average_vote.desc">Rating.desc</option>
                            <option value="original_title.asc">Title.asc</option>
                            <option value="original_title.desc">Title.desc</option>
                        </select>
                        <select className={classes.discover__filter} id="genre">
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
                        <input className={classes.discover__filter} id="yearInput" type="number" min="1930" max="2019" step="1" placeholder="Year" />
                        <input className={classes.discover__filter} id="ratingInput" type="number" min="0" max="10" step="1" placeholder="Rating"/>
                        <button className={classes.discover__btn} type="submit">{searchIcon}</button>
                    </form>
                    <hr className={classes.discover__hr}/>
                </main>
                <Footer />
            </>
        );
    };
};

export default Discover;