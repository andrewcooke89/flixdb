import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';

class MoreInfo extends Component {
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

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);