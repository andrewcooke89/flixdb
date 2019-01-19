import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import classes from './SignIn.module.css';
import { fetchRequestToken } from '../../../store/actions/auth';

class SignIn extends Component {

    componentDidMount() {
        this.props.onFetchRequestToken();
    }
    render() {
        return (
            <body >
                <NavBar />
                    <main className={classes.signIn__content_container}>
                        <div className={classes.signIn__btn_choice_container}>
                            <a  className={classes.signIn__btn_container}
                                href={`https://www.themoviedb.org/authenticate/${this.props.requestToken}`} >
                                <button 
                                    className={classes.signIn__btn}>Sign in or Register
                                </button>
                            </a>
                            
                            <p className={classes.signIn__text}>Signing in and registering offers a range of features linked to 'The Movie DB', these include rating movies and Tv shows as well as creating custom lists and adding items to favourites/watch lists</p>
                        </div>
                        <div className={classes.signIn__btn_choice_container}>
                            <button className={classes.signIn__btn}>Sign in as Guest</button>
                            <p className={classes.signIn__text}>Signing in as Guest offers access to a limited range of features such as rating movies, TV shows and episodes</p>
                        </div>  
                    </main>
                <Footer />
            </body>

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