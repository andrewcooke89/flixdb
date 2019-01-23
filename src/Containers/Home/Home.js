import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import TypeSelector from '../../Components/TypeSelector/TypeSelector';
import TrendingCarousel from '.././Carousels/TrendingCarousel/TrendingCarousel';
import classes from './Home.module.css';
import CarouselTemplate from '../../Components/Carousels/CarouselTemplate/CarouselTemplate';
import Footer from '../../.../../Components/Footer/Footer';

import { fetchTheatreMovies, fetchHighestRatedMovies, fetchUpcommingMovies, fetchPopulargMovies, fetchTrendingMovies } from '../../store/actions/fetchMovies';
import { changeToMovies, changeToTv } from '../../store/actions/typeSelector';
import { fetchHighestRatedTv, fetchPopularTv, fetchAiringTodayTv, fetchOnAirTv, fetchTrendingTv }from '../../store/actions/fetchTv';

// inline styles for carousel, pagination and heading placements
import styles from '../../assets/inlineStyles';

class Home extends Component {

  state = {
    theatrePage: 1,
    highestRatedPage: 1,
    upcommingPage: 1,
    popularPage: 1,
  }

  componentDidMount () {
    this.props.onFetchTheatreMovies()
    this.props.onFetchHighestRatedMovies()
    this.props.onFetchUpcommingMovies()
    this.props.onFetchPopularMovies()
  }

  render() {

    // Changing list data for each carousel based on selection type
    let currentPopularTypeData;
    let currentHighestRatedTypeData;
    let currentTheatreAiringTypeData;
    let currentUpcommingOnAirTypeData;
        if (this.props.selectorType === "movies"){
            currentPopularTypeData = [...this.props.popularMovies];
            currentHighestRatedTypeData = [...this.props.highestRatedMovies];
            currentTheatreAiringTypeData = [...this.props.inTheatreMovies];
            currentUpcommingOnAirTypeData = [...this.props.upcommingMovies];
        } else {
            currentPopularTypeData = [...this.props.popularTv];
            currentHighestRatedTypeData = [...this.props.highestRatedTv];
            currentTheatreAiringTypeData = [...this.props.airingTodayTv];
            currentUpcommingOnAirTypeData = [...this.props.onAirTv];
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

    // call the fetch data actions and change selector type action based on 
    // which type selector is pressed
    const changeSelectionType = (fetch1, fetch2,fetch3,fetch4,fetch5,changeType) => {
      fetch1();
      fetch2();
      fetch3();
      fetch4();
      fetch5();
      changeType();
    }

    let carouselOneHeading;
    let carouselThreeHeading;
    if (this.props.selectorType === "movies"){
      carouselOneHeading = "IN THEATRES";
      carouselThreeHeading = "UPCOMMING"
    } else {
      carouselOneHeading = "AIRING TODAY";
      carouselThreeHeading = "ON AIR";
    }

    return (
      <div className={classes.home__container}>
        <NavBar loginStatus={this.props.loginStatus} />
        <TypeSelector changeTo={() => changeSelectionType(this.props.onFetchHighestRatedMovies, this.props.onFetchPopularMovies, this.props.onFetchTheatreMovies, this.props.onFetchUpcommingMovies, this.props.onFetchTrendingMovies, this.props.onChangeToMovies)} type="Movies" />
        <TypeSelector changeTo={() => changeSelectionType(this.props.onFetchAiringTodayTv, this.props.onFetchHighestRatedTv, this.props.onFetchOnAirTv, this.props.onFetchPopularTv, this.props.onFetchTrendingTv, this.props.onChangeToTv)} type="TV-Series" />
        <TrendingCarousel />
        {/* in theatre carousel */}
        <CarouselTemplate 
          pagForwardClickMethod={() => PageForward("theatre")}
          pagBackClickMethod={() => PageBack("theatre")}
          pagBackStyleProp={styles.paginationPlacement.theatrePagBack} 
          pagForwardStyleProp={styles.paginationPlacement.theatrePagForward} 
          page={this.state.theatrePage} 
          CarouselStyle={styles.carouselPlacement.InTheatresCarouselStyle} 
          headingText={carouselOneHeading}
          headingStyleProp={styles.headingPlacement.InTheatresHeadingStyle} 
          itemList={currentTheatreAiringTypeData}
          type={this.props.selectorType}
        />
        {/* highest rated movie carousel */}
        <CarouselTemplate 
          headingText="HIGHEST RATED"
          headingStyleProp={styles.headingPlacement.highestRatedHeadingStyle}
          pagBackStyleProp={styles.paginationPlacement.highestRatedPagBack}
          pagForwardStyleProp={styles.paginationPlacement.highestRatedPagForward}
          CarouselStyle={styles.carouselPlacement.highestRatedCarouselStyle}
          itemList={currentHighestRatedTypeData} 
          page={this.state.highestRatedPage}
          pagForwardClickMethod={() => PageForward("highestRated")}
          pagBackClickMethod={() => PageBack("highestRated")}
          type={this.props.selectorType}
        />
        {/* upcomming carousel */}
        <CarouselTemplate 
          headingText={carouselThreeHeading}
          headingStyleProp={styles.headingPlacement.upcommingHeadingStyle}
          pagBackStyleProp={styles.paginationPlacement.upcommingPagBack}
          pagForwardStyleProp={styles.paginationPlacement.upcommingPagForward}
          CarouselStyle={styles.carouselPlacement.upcommingCarouselStyle}
          itemList={currentUpcommingOnAirTypeData} 
          page={this.state.upcommingPage}
          pagForwardClickMethod={() => PageForward("upcomming")}
          pagBackClickMethod={() => PageBack("upcomming")}
          type={this.props.selectorType}
        />
        {/* popular carousel */}
        <CarouselTemplate 
          headingText="POPULAR"
          headingStyleProp={styles.headingPlacement.popularHeadingStyle}
          pagBackStyleProp={styles.paginationPlacement.popularPagBack}
          pagForwardStyleProp={styles.paginationPlacement.popularPagForward}
          CarouselStyle={styles.carouselPlacement.popularCarouselStyle}
          itemList={currentPopularTypeData} 
          page={this.state.popularPage}
          pagForwardClickMethod={() => PageForward("popular")}
          pagBackClickMethod={() => PageBack("popular")}
          type={this.props.selectorType}
        />
        <Footer loginStatus={this.props.loginStatus}  />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      inTheatreMovies: state.movies.theatreResults,
      highestRatedMovies: state.movies.highestRatedResults,
      upcommingMovies: state.movies.upcommingResults,
      popularMovies: state.movies.popularResults,
      selectorType: state.typeSelector.entertainmentType,
      popularTv: state.tv.popularResults,
      highestRatedTv: state.tv.highestRatedResults,
      onAirTv: state.tv.onAirResults,
      airingTodayTv: state.tv.airingTodayResults,
      loginStatus: state.auth.loginStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchTheatreMovies: () => dispatch(fetchTheatreMovies()),
      onFetchHighestRatedMovies: () => dispatch(fetchHighestRatedMovies()),
      onFetchUpcommingMovies: () => dispatch(fetchUpcommingMovies()),
      onFetchPopularMovies: () => dispatch(fetchPopulargMovies()),
      onFetchTrendingMovies: () => dispatch(fetchTrendingMovies()),
      onChangeToMovies: () => dispatch(changeToMovies()),
      onChangeToTv: () => dispatch(changeToTv()),
      onFetchHighestRatedTv: () => dispatch(fetchHighestRatedTv()),
      onFetchPopularTv: () => dispatch(fetchPopularTv()),
      onFetchAiringTodayTv: () => dispatch(fetchAiringTodayTv()),
      onFetchOnAirTv: () => dispatch(fetchOnAirTv()),
      onFetchTrendingTv: () => dispatch(fetchTrendingTv())
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);