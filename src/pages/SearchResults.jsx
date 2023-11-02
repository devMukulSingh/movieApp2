import { Box, Grid, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataFromApi } from '../service/api';
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from '../components/home/MovieCard';
import Select from "react-select";

const MainBox = styled(Box)({
  marginTop:"4rem",
  padding:'2rem 4rem',
  display:'flex',
  gap:'1rem',
  flexDirection:"column"

})
const SearchMovieCard = styled(Box)({
  marginBottom:'2rem',
  display:'flex',
  justifyContent:"center",

})

const SearchResults = () => {

    const[pageNum, setPageNum] = useState(1);
    const[ apiResult, setApiResult ] = useState(null);
    const[loading, setLoading ] = useState(null);
    const{ query } = useParams();

    useEffect( () => {
      fetchInitialData();
    },[query]);

    const fetchInitialData = async() => {
      setLoading(true);
      const res = await getDataFromApi(`/search/movie?query=${query}`);
      setApiResult(res);
      setPageNum( prev => prev+1);
      setLoading(false);
    }
    const fetchNextPage = async() => {
      const res = await getDataFromApi(`/search/movie?query=${query}&page=${pageNum}`);
      setApiResult({
        ...apiResult , results: [ ...apiResult?.results , ...res?.results ]
      })
      setPageNum( prev => prev+1);

    }
    const options = [

    ]


  return (
    <MainBox>
       <Typography variant='h4'> Search Result for {query.toUpperCase()} </Typography>

        {/* <Select 
         value={}
         onChange = {handleSelect}
          options={options}
          /> */}

        <Grid container>
          
          {
            !loading && apiResult &&
              apiResult?.results?.map( (movie,index) => {
                return(
                  <Grid item lg={3} md={4} sm={6} key={index}>
                    <InfiniteScroll
                      dataLength={ apiResult?.total_pages}
                      next={fetchNextPage}
                      hasMore={true}
                    > 
                      <SearchMovieCard >
                        <MovieCard movie={movie} />
                      </SearchMovieCard>
                    </InfiniteScroll>
                  </Grid>

                )
              })
          }

      </Grid>
    </MainBox>
  )
}

export default SearchResults