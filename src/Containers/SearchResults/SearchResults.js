import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './SearchResults.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import apiKey from '../../assets/apikey';
import CarouselItem from '../../Components/Carousels/CarouselItem/CarouselItem';

class SearchResults extends Component {

    state = {
        resultList: []
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.query !== prevProps.match.params.query){
            this.fetchData()
        }
    }
    

    fetchData = (query = this.props.match.params.query) => {
       // fetch data response from search field data
       fetch(`https://api.themoviedb.org/3/search/multi?${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
       .then(resp => resp.json())
        //set the result state to fetch response
       .then(data => {this.setState({resultList: data.results})})
    }


    render() {

        // function for creating list of results
        let results;
        
        // this check prevents error if they go to /search directly in url
        if(this.state.resultList && this.state.resultList.length > 0)  {
            // loops through list and removes and items that are people or have no poster
            const filterData = this.state.resultList.filter(result => result.poster_path !== null && result.media_type !== "person");
            
            // loops through list and creates carousel item for each
            results = filterData.map(result => {
                    return (
                        <CarouselItem
                            item={`http://image.tmdb.org/t/p/w300${result.poster_path}`}
                            key={result.id}
                            id={result.id}
                            type={result.media_type}
                        />
                    )
                
                 
            })
        } else {
            results = (
                <p className={classes.searchResults__noResults}>Sorry, there are no results for "{this.props.searchValue}". Please check the spelling and try again.</p>
            )
        }

        
        return (
            <>
                <NavBar />
                <main className={classes.searchResults} >
                    
                    <h1 className={classes.searchResults__heading}>Results for {this.props.searchValue}</h1>
        
                    <div className={classes.searchResults_resultsContainer}>
                        {results}
                    </div>
                    
                </main>
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        searchValue: state.search.searchValue
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);