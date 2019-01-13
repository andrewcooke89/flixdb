import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from '../Containers/Home/Home';
import MoreInfo from '../Containers/MoreInfo/MoreInfo';



// inline styles for carousel, pagination and heading placements


class App extends Component {

  render() {

    return (
      <div className="container">
        <Switch>
          <Route path="/moreInfo" component={MoreInfo} />
          <Route path="/" component={Home} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
