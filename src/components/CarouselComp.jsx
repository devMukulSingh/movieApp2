import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';
import { Box, styled } from '@mui/material';
////////////////////////////////////////////////
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide : 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide : 2,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const MainBox = styled(Box)({
    '.react-multi-carousel-item ':{
        // marginLeft: '1rem',
        overflow: 'hidden',
    },
    marginTop:'1rem'
  })
  ////////////////////////////////////////
const CarouselComp = ( {data,loading} ) => {

  return (
    <MainBox>
      {  
        !loading && data &&
        <Carousel responsive={responsive}>
            {
                data?.results?.map( (movie,index) => {
                    return(
                        <>
                            <MovieCard movie={movie} key={index}/>
                        </>
                    )
                })
            }

        </Carousel>}
    </MainBox>

  )     
}

export default CarouselComp