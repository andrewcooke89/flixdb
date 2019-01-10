import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../Components/NavBar/NavBar';
import TypeSelector from '../Components/TypeSelector/TypeSelector';
import TrendingCarousel from './Carousels/TrendingCarousel/TrendingCarousel';
import './App.css';
import CarouselTemplate from '../Components/Carousels/CarouselTemplate/CarouselTemplate';
import Footer from '../.../../Components/Footer/Footer';

import { fetchTheatreMovies, fetchHighestRatedMovies, fetchUpcommingMovies, fetchPopulargMovies } from '../store/actions/fetchMovies';

// inline styles for carousel, pagination and heading placements
import styles from '../assets/inlineStyles';

class App extends Component {

  state = {
    theatrePage: 1,
    highestRatedPage: 1,
    upcommingPage: 1,
    popularPage: 1
  }

  componentDidMount () {
    this.props.onFetchTheatreMovies()
    this.props.onFetchHighestRatedMovies()
    this.props.onFetchUpcommingMovies()
    this.props.onFetchPopularMovies()
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
        case "upcomming":
          if(curState.upcommingPage === 1){
            newPage = 2;
          } else if (curState.upcommingPage === 2){
              newPage = 1;
          }
          this.setState({upcommingPage:newPage})
          break;
        case "popular":
          if(curState.popularPage === 1){
            newPage = 2;
          } else if (curState.popularPage === 2){
              newPage = 1;
          }
          this.setState({popularPage:newPage})
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
          case "upcomming":
            if(curState.upcommingPage === 1){
              newPage = 2;
            } else if (curState.upcommingPage === 2){
                newPage = 1;
            }
            this.setState({upcommingPage:newPage})
          break;
          case "popular":
            if(curState.popularPage === 1){
              newPage = 2;
            } else if (curState.popularPage === 2){
                newPage = 1;
            }
            this.setState({popularPage:newPage})
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
        {/* highest rated movie carousel */}
        <CarouselTemplate 
          headingText="HIGHEST RATED"
          headingStyleProp={styles.headingPlacement.highestRatedHeadingStyle}
          pagBackStyleProp={styles.paginationPlacement.highestRatedPagBack}
          pagForwardStyleProp={styles.paginationPlacement.highestRatedPagForward}
          CarouselStyle={styles.carouselPlacement.highestRatedCarouselStyle}
          itemList={this.props.highestRatedMovies} 
          page={this.state.highestRatedPage}
          pagForwardClickMethod={() => PageForward("highestRated")}
          pagBackClickMethod={() => PageBack("highestRated")}
        />
        {/* upcomming carousel */}
        <CarouselTemplate 
          headingText="UPCOMMING"
          headingStyleProp={styles.headingPlacement.upcommingHeadingStyle}
          pagBackStyleProp={styles.paginationPlacement.upcommingPagBack}
          pagForwardStyleProp={styles.paginationPlacement.upcommingPagForward}
          CarouselStyle={styles.carouselPlacement.upcommingCarouselStyle}
          itemList={this.props.upcommingMovies} 
          page={this.state.upcommingPage}
          pagForwardClickMethod={() => PageForward("upcomming")}
          pagBackClickMethod={() => PageBack("upcomming")}
        />
        {/* popular carousel */}
        <CarouselTemplate 
          headingText="POPULAR"
          headingStyleProp={styles.headingPlacement.popularHeadingStyle}
          pagBackStyleProp={styles.paginationPlacement.popularPagBack}
          pagForwardStyleProp={styles.paginationPlacement.popularPagForward}
          CarouselStyle={styles.carouselPlacement.popularCarouselStyle}
          itemList={this.props.popularMovies} 
          page={this.state.popularPage}
          pagForwardClickMethod={() => PageForward("popular")}
          pagBackClickMethod={() => PageBack("popular")}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      inTheatreMovies: state.theatreResults,
      highestRatedMovies: state.highestRatedResults,
      upcommingMovies: state.upcommingResults,
      popularMovies: state.popularResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchTheatreMovies: () => dispatch(fetchTheatreMovies()),
      onFetchHighestRatedMovies: () => dispatch(fetchHighestRatedMovies()),
      onFetchUpcommingMovies: () => dispatch(fetchUpcommingMovies()),
      onFetchPopularMovies: () => dispatch(fetchPopulargMovies())
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
