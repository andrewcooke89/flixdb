import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../Components/NavBar/NavBar';
import TypeSelector from '../Components/TypeSelector/TypeSelector';
import TrendingCarousel from './Carousels/TrendingCarousel/TrendingCarousel';
import './App.css';
import CarouselTemplate from '../Components/Carousels/CarouselTemplate/CarouselTemplate';
import { fetchTheatreMovies } from '../store/actions/fetchMovies';

class App extends Component {

  state = {
    theatrePage: 1,
    highestRatedPage: 1
  }

  componentDidMount () {
    this.props.onFetchTheatreMovies()
  }

  render() {

    // styles
    // placement for in theatres carousel
    const InTheatresHeadingStyle = {
      gridArea: "trendingCarousel-end / 2 / theatres-start / 5"
    }
    const InTheatresCarouselStyle = {
      gridArea: "theatres-start / 2 / theatres-end / 16"
    }
    // pagination placement for in theatres carousel
    const theatrePagBack = {
      gridArea: "theatres-start / 1 / theatres-end / 2"
    }
    const theatrePagForward = {
      gridArea: "theatres-start / 16 / theatres-end / -1"
    }
    // placement for highest rated carousel
    const highestRatedHeadingStyle = {
      gridArea: "theatres-end / 2 / highestRated-start / 5"
    }
    const highestRatedCarouselStyle = {
      gridArea: "highestRated-start / 2 / highestRated-end / 16"
    }
    // pagination placement for highest rated carousel
    const highestRatedPagForward = {
      gridArea: "highestRated-start / 16 / highestRated-end / -1"
    }
    const highestRatedPagBack = {
      gridArea: "highestRated-start / 1 / highestRated-end / 2"
    }
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
          pagBackStyleProp={theatrePagBack} 
          pagForwardStyleProp={theatrePagForward} 
          page={this.state.theatrePage} 
          CarouselStyle={InTheatresCarouselStyle} 
          headingText="IN THEATRES"
          headingStyleProp={InTheatresHeadingStyle} 
          itemList={this.props.inTheatreMovies}
        />
        <CarouselTemplate 
          headingText="HIGHEST RATED"
          headingStyleProp={highestRatedHeadingStyle}
          pagBackStyleProp={highestRatedPagBack}
          pagForwardStyleProp={highestRatedPagForward}
          CarouselStyle={highestRatedCarouselStyle}
          itemList={this.props.inTheatreMovies} //testing - change
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
      inTheatreMovies: state.theatreResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchTheatreMovies: () => dispatch(fetchTheatreMovies())
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
