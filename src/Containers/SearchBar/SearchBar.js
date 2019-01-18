import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './SearchBar.module.css';
import { changeSearchValue } from '../../store/actions/searchField';
import { Redirect } from 'react-router-dom';

class SearchBar extends Component {

    // state set up to trigger the redirect
    state = {
        redirect: false
    }

    // function to change state and trigger redirect on enter press submit
    onSubmit = (event) => {
        if (event.key === 'Enter'){
            // prevent default behaviour submit
            event.preventDefault();
            this.setState({redirect: true});
            
        }
    }

    render() {

        // redirect is triggered on state change
        if(this.state.redirect){
            // this.setState({redirect: false});
            return <Redirect to={`/search/${this.props.searchValue}`} />
            
        }
        
        return (
            <form  className={classes.SearchBar__searchBox}>
                <input onKeyDown={this.onSubmit} onChange={this.props.onSearchChange} className={classes.SearchBar}  type="search" placeholder="Search Movies and Series" />
            </form>
            
        );
    }
};

const mapStateToProps = state => {
    return {
        searchValue: state.search.searchValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(changeSearchValue(event.target.value))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);