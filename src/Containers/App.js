import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../Components/NavBar/NavBar';
import TypeSelector from '../Components/TypeSelector/TypeSelector';
import TrendingCarousel from './Carousels/TrendingCarousel/TrendingCarousel';
import './App.css';
import CarouselTemplate from '../Components/Carousels/CarouselTemplate/CarouselTemplate';
import { fetchTheatreMovies, fetchHighestRatedMovies, fetchUpcommingMovies } from '../store/actions/fetchMovies';
// inline styles for carousel, pagination and heading placements
import styles from '../assets/inlineStyles';

class App extends Component {

  state = {
    theatrePage: 1,
    highestRatedPage: 1,
    upcommingPage: 1,
  }

  componentDidMount () {
    this.props.onFetchTheatreMovies()
    this.props.onFetchHighestRatedMovies()
    this.props.onFetchUpcommingMovies()
  }

  render() {

    //page change click methods
    const PageForward = (carouselType) => {
      const curState = {...this.state};
      let newPage;
      switch (carouselType) {
        case "theatre":
          if(curState.theatrePage === 1){
            newPage = 2;
          } else if (curState.theatrePage === 2){
            newPage = 1;
          }
          this.setState({theatrePage:newPage})
          break;
        case "highestRated":
          if(curState.highestRatedPage === 1){
            newPage = 2;
          } else if (curState.highestRatedPage === 2){
              newPage = 1;
          }
          this.setState({highestRatedPage:newPage})
          break;
        default: return newPage 
      }
      
  }
    const PageBack = (carouselType) => {
        const curState = {...this.state}
        let newPage;
        switch (carouselType){
          case "theatre":
            if(curState.theatrePage === 1){
              newPage =  2;
            } else if (curState.theatrePage === 2){
                newPage = 1;
            }
            this.setState({theatrePage:newPage})
          break;
          case "highestRated":
            if(curState.highestRatedPage === 1){
              newPage = 2;
            } else if (curState.highestRatedPage === 2){
                newPage = 1;
            }
            this.setState({highestRatedPage:newPage})
          break;
          default: return newPage 
        }
  }

    return (
      <div className="container">
        <NavBar />
        <TypeSelector type="Movies" />
        <TypeSelector type="TV-Series" />
        <TrendingCarousel />
        {/* in theatre carousel */}
        <CarouselTemplate 
          pagForwardClickMethod={() => PageForward("theatre")}
          pagBackClickMethod={() => PageBack("theatre")}
          pagBackStyleProp={styles.paginationPlacement.theatrePagBack} 
          pagForwardStyleProp={styles.paginationPlacement.theatrePagForward} 
          page={this.state.theatrePage} 
          CarouselStyle={styles.carouselPlacement.InTheatresCarouselStyle} 
          headingText="IN THEATRES"
          headingStyleProp={styles.headingPlacement.InTheatresHeadingStyle} 
          itemList={this.props.inTheatreMovies}
        />
        <CarouselTemplate 
          headingText="HIGHEST RATED"
          headingStyleProp={styles.headingPlacement.highestRatedHeadingStyle}
          pagBackStyleProp={styles.paginationPlacement.highestRatedPagBack}
          pagForwardStyleProp={styles.paginationPlacement.highestRatedPagForward}
          CarouselStyle={styles.carouselPlacement.highestRatedCarouselStyle}
          itemList={this.props.highestRatedMovies} //testing - change
          page={this.state.highestRatedPage}
          pagForwardClickMethod={() => PageForward("highestRated")}
          pagBackClickMethod={() => PageBack("highestRated")}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      inTheatreMovies: state.theatreResults,
      highestRatedMovies: state.highestRatedResults,
      upcommingMovies: state.upcommingResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchTheatreMovies: () => dispatch(fetchTheatreMovies()),
      onFetchHighestRatedMovies: () => dispatch(fetchHighestRatedMovies()),
      onFetchUpcommingMovies: () => dispatch(fetchUpcommingMovies())
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
