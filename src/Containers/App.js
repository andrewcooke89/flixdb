import React, { Component } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import TypeSelector from '../Components/TypeSelector/TypeSelector';
import TrendingCarousel from '../Components/Carousels/TrendingCarousel/TrendingCarousel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <TypeSelector type="Movies" />
        <TypeSelector type="TV-Series" />
        <TrendingCarousel />
      </div>
    );
  }
}

export default App;
