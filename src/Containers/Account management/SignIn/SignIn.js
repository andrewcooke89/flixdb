import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import classes from './SignIn.module.css';
import { fetchRequestToken } from '../../../store/actions/auth';

class SignIn extends Component {

    // fetches request token for sign in
    componentDidMount() {
        this.props.onFetchRequestToken();
    }

    render() {
        return (
            <div >
                <NavBar />
                    <main className={classes.signIn__content_container}>
                        <div className={classes.signIn__btn_choice_container}>
                        {/* processes login with request token to the movie db */}
                            <a  className={classes.signIn__btn_container}
                                href={`https://www.themoviedb.org/authenticate/${this.props.requestToken}?redirect_to=http://localhost:3000/account/myAccount/approved`} >
                                <button 
                                    className={classes.signIn__btn}>Sign in or Register
                                </button>
                            </a>
                            
                            <p className={classes.signIn__text}>Signing in and registering offers a range of features linked to 'The Movie DB', these include rating movies and Tv shows as well as creating custom lists and adding items to favourites/watch lists</p>
                        </div>
                        
                    </main>
                <Footer />
            </div>

        );
    };
};

const mapStateToProps = state => {
    return {
        requestToken: state.auth.requestToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRequestToken: () => dispatch(fetchRequestToken())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);