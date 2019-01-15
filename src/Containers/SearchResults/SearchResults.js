import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './SearchResults.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import apiKey from '../../assets/apikey';

class SearchResults extends Component {

    state = {
        resultList: []
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        // trim the search string replacing space with %20
       const trimmedSearch = encodeURIComponent(this.props.searchValue.trim());
       // fetch data response from search field data
       fetch(`https://api.themoviedb.org/3/search/multi?${apiKey}&language=en-US&query=${trimmedSearch}&page=1&include_adult=false`)
       .then(resp => resp.json())
        //set the result state to fetch response
       .then(data => {this.setState({resultList: data.results})})
    }


    render() {

        
        return (
            <>
                <NavBar />
                <main className={classes.searchResults} >
                    <h1 className={classes.searchResults__heading}>Results for {this.props.searchValue}</h1>
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