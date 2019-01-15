import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../Containers/Home/Home';
import MoreInfo from '../Containers/MoreInfo/MoreInfo';
import SearchResults from './SearchResults/SearchResults';


class App extends Component {

  render() {

    return (
      <div className="container">
        <Switch>
          <Route path="/details/:type/:id" component={MoreInfo} />
          <Route path="/search" component={SearchResults} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
     
  }
}

const mapDispatchToProps = dispatch => {
  return {
      
  }  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
