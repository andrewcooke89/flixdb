import React, { Component} from 'react';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import classes from './MyAccount.module.css';
import { connect } from 'react-redux';
import { getSessionId } from '../../../store/actions/auth';
import MyLists from '../MyLists/MyLists';

class MyAccount extends Component {

    state = {
        list: null
    }

    

    componentDidMount(){
        this.props.onGetSessionId(this.parseToken(this.props.location.search))
    };

    
  
    
   parseToken = token => token.split('?request_token=')[1].split('&')[0];

   changeList = (list) => {
        let newState = {...this.state};
        newState.list = list;
        this.setState({ list : newState.list});
   }

   
   
    render() {
        
        let list;
        if(this.state.list === null) {
            list = 
            <div>
                <h1 className={classes.myAccount__heading}>
                    Select a list!
                </h1>
                <p className={classes.myAccount__noListText}>Select a list from above.  These lists help you keep track of your entertainement.   </p>
            </div>
        } else if(this.state.list === "favouriteMovies"){
            list = 
            <div>
                <h1 className={classes.myAccount__heading}>
                    Favourite Movies
                </h1>
                <MyLists />
            </div>
        } else if(this.state.list === "favouriteTv"){
            list = 
            <div>
                <h1 className={classes.myAccount__heading}>
                    Favourite TV Shows
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
                <NavBar />
                    <main style={{marginTop: "10rem"}}>
                        <div className={classes.myAccount__btn_container}>
                            <button 
                                onClick={() => this.changeList("favouriteMovies")} 
                                className={classes.myAccount_list_links}>
                                Favourite Movies
                            </button>

                            <button  
                                onClick={() => this.changeList("favouriteTv")}
                                className={classes.myAccount_list_links}>
                                Favourite Shows
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
                <Footer  />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        requestToken: state.auth.requestToken,
        sessionID: state.auth.sessionID
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetSessionId: (token) => dispatch(getSessionId(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);