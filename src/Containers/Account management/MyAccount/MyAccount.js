import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import classes from './MyAccount.module.css';
import { connect } from 'react-redux';
import { getSessionId, changeLoginStatus, logOut } from '../../../store/actions/auth';
import { changeList } from '../../../store/actions/changeList';
import MyLists from '../MyLists/MyLists';

class MyAccount extends Component {

    state = {
        list: null
    };

    // if logged out, fetches sessionId and logs in
    componentDidMount(){
        if(this.props.match.params.status === "approved" && this.props.loginStatus === "loggedOut") {
            this.props.onGetSessionId(this.parseToken(this.props.location.search));
            this.props.onChangeLoginStatus("loggedIn")
        }
        
    };

    // parses into usable request token
    parseToken = token => token.split('?request_token=')[1].split('&')[0];

    // handles changin between lists, tells redux what list is required and renders
    changeList = (type) => {
        let newState = {...this.state};
        newState.list = type;
        this.setState({list : newState.list});
        this.props.onChangeList(type)
    }

   
   
    render() {
        
        let list;
       
        // displays correct list heading on list selection
            if(this.state.list === null) {
                list = 
                <div>
                    <h1 className={classes.myAccount__heading}>
                        Select a list!
                    </h1>
                    <p className={classes.myAccount__noListText}>Select a list from above.  These lists help you keep track of your entertainement.   </p>
                </div>
            } else if(this.state.list === "favoriteMovies"){
                list = 
                <div>
                    <h1 className={classes.myAccount__heading}>
                        favorite Movies
                    </h1>
                    <MyLists />
                </div>
            } else if(this.state.list === "favoriteTv"){
                list = 
                <div>
                    <h1 className={classes.myAccount__heading}>
                        Favorite TV Shows
                    </h1>
                    <MyLists />
                </div>
            } else if(this.state.list === "watchListTv"){
                list = 
                <div>
                    <h1 className={classes.myAccount__heading}>
                        TV series watch list
                    </h1>
                    <MyLists />
                </div>
            }else if(this.state.list === "watchListMovies"){
                list = 
                <div>
                    <h1 className={classes.myAccount__heading}>
                        Movies watch list
                    </h1>
                    <MyLists />
                </div>
            }
        
        
        
        
        return (
            <div>
                <NavBar loginStatus={this.props.loginStatus} />
                    <main style={{marginTop: "10rem"}}>
                        <div className={classes.myAccount__logOut_container}>
                            <Link 
                                to="/"  
                                className={classes.myAccount__logOut}
                                onClick={this.props.onLogOut}
                                >
                                Log Out

                            </Link>
                        </div>
                        <div className={classes.myAccount__btn_container}>
                            <button 
                                onClick={() => this.changeList("favoriteMovies")} 
                                className={classes.myAccount_list_links}>
                                Favorite Movies
                            </button>

                            <button  
                                onClick={() => this.changeList("favoriteTv")}
                                className={classes.myAccount_list_links}>
                                Favorite Shows
                            </button>

                            <button 
                                onClick={() => this.changeList("watchListMovies")}
                                className={classes.myAccount_list_links}>
                                Movies Watch List
                            </button>

                            <button 
                                onClick={() => this.changeList("watchListTv")}
                                className={classes.myAccount_list_links}>
                                TV Shows Watch List
                            </button>
                        </div>
                        <hr className={classes.myAccount__hr}/>
                        <div className={classes.myAccount__mainContainer}>
                            {list}
                        </div>
                    </main>
                <Footer loginStatus={this.props.loginStatus}  />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        requestToken: state.auth.requestToken,
        sessionID: state.auth.sessionID,
        loginStatus: state.auth.loginStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetSessionId: (token) => dispatch(getSessionId(token)),
        onChangeList: (type) => dispatch(changeList(type)),
        onChangeLoginStatus: (status) => dispatch(changeLoginStatus(status)),
        onLogOut: () => dispatch(logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);