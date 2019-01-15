import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './SearchResults.module.css';
import NavBar from '../../Components/NavBar/NavBar';

class SearchResults extends Component {

    state = {
        resultList: []
    }

    componentDidMount() {
        
    }

    fetchData = () => {
        
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