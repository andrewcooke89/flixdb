import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../Containers/Home/Home';
import MoreInfo from '../Containers/MoreInfo/MoreInfo';
import SearchResults from './SearchResults/SearchResults';
import Discover from '../Containers/Discover/Discover';
import SignIn from './Account management/SignIn/SignIn';
import MyAccount from './Account management/MyAccount/MyAccount';



class App extends Component {

  render() {

    // auth routes
    let notLoggedIn;
    if(this.props.loginStatus === "loggedOut"){
      notLoggedIn = <Redirect  from="/account" to="/account/signIn" />
    } 
    return (

      <div className="container">
        <Switch>
          <Route path="/details/:type/:id" component={MoreInfo} />
          <Route path="/search/:query" component={SearchResults} />
          <Route path="/discover" component={Discover} />
          <Route exact path="/account/signIn" component={SignIn} />
          <Route  path="/account/myAccount/:status" component={MyAccount} />
          <Route path="/" exact component={Home} />
          {notLoggedIn}
          
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.auth.loginStatus
     
  }
}

const mapDispatchToProps = dispatch => {
  return {
      
  }  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
