const styles = {
    carouselPlacement: {
        InTheatresCarouselStyle: {
            gridArea: "theatres-start / 2 / theatres-end / 16"
          },
        highestRatedCarouselStyle: {
            gridArea: "highestRated-start / 2 / highestRated-end / 16"
        },
        upcommingCarouselStyle: {
            gridArea: "upcomming-start / 2 / upcomming-end / 16"
        }        
    },
    headingPlacement: {
        InTheatresHeadingStyle: {
            gridArea: "trendingCarousel-end / 2 / theatres-start / 5"
          },
          highestRatedHeadingStyle: {
            gridArea: "theatres-end / 2 / highestRated-start / 5"
          },
          upcommingHeadingStyle: {
              gridArea: "highestRated-end / 2 / upcomming-start / 5"
          }
    },
    paginationPlacement: {
        theatrePagBack: {
            gridArea: "theatres-start / 1 / theatres-end / 2"
          },
        theatrePagForward: {
            gridArea: "theatres-start / 16 / theatres-end / -1"
        },
        highestRatedPagForward: {
            gridArea: "highestRated-start / 16 / highestRated-end / -1"
        },
        highestRatedPagBack: {
            gridArea: "highestRated-start / 1 / highestRated-end / 2"
        },
        upcommingPagBack: {
            gridArea: "upcomming-start / 1 / upcomming-end / 2"
        },
        upcommingPagForward: {
            gridArea: "upcomming-start / 16 / upcomming-end / -1"
        }
    }
}

export default styles;