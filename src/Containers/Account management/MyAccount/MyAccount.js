import React, { Component} from 'react';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import classes from './MyAccount.module.css';
import { connect } from 'react-redux';
import { getSessionId } from '../../../store/actions/auth';

class MyAccount extends Component {

    componentDidMount(){
        console.log(this.parseToken(this.props.location.search))
        this.props.onGetSessionId(this.parseToken(this.props.location.search))
    }
    
   parseToken = token => token.split('?request_token=')[1].split('&')[0];
    render() {

        console.log(Response.header)
        return (
            <div>
                <NavBar />
                    <main style={{marginTop: "10rem"}}>
                        <div className={classes.myAccount__btn_container}>
                            <button className={classes.myAccount_list_links}>My Favourites</button>
                            <button className={classes.myAccount_list_links}>My Watch List</button>
                            <button className={classes.myAccount_list_links}>My Created Lists</button>
                        </div>
                        <hr className={classes.myAccount__hr}/>
                        <div>
                            <h1 className={classes.myAccount__heading}>
                                My Favourites
                            </h1>
                            
                        </div>
                    </main>
                <Footer />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        requestToken: state.auth.requestToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetSessionId: (token) => dispatch(getSessionId(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);