import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import apiKey from '../../assets/apikey';

class MoreInfo extends Component {


    

    componentDidMount() {
        if (this.props.selectorType === "movies") {
            fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?${apiKey}&language=en-US`)
            .then(response => response.json())
            .then(data => console.log(data));
        } else {
            fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?${apiKey}&language=en-US`)
            .then(response => response.json())
            .then(data => console.log(data));
        }
    }

    



    render() {

       
        return (
            <>
                <NavBar />

            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        selectorType: state.typeSelector.entertainmentType
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);