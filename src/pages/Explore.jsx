import { Box, Grid, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import InfinteScroll from "react-infinite-scroll-component";
import MovieCard from '../components/home/MovieCard';
import { getDataFromApi } from '../service/api';
/////////////////////////////////////////
const MainBox = styled(Box)({
  marginTop:'4rem',
  padding:'1rem 5rem',
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  gap:'1rem'
})
const MovieCardBox = styled(Box)({
  marginBottom:'2rem',
   display:'flex',
    justifyContent:"center"
})
/////////////////////////////////////////////////////////
const Explore = () => {

    const[apiResult, setApiResult ] = useState(null);
    const[loading,setLoading] = useState(null);
    const { id,mediaType } = useParams();
    const[pageNum, setPageNum ] = useState(1);

    useEffect( () => {
        fetchInitialData();
    },[])

    const fetchInitialData = async() => {
      setLoading(true);
      const res = await getDataFromApi(`/discover/${mediaType}`);
      setApiResult(res);
      console.log(res);
      setPageNum(prev => prev+1);
      setLoading(false);
    } 

    const fetchNextPage = async() => {
    
      const res = await getDataFromApi(`/discover/${mediaType}?page=${pageNum}`);
      setApiResult( {
        ...apiResult , results:[ ...apiResult.results , ...res.results]
      });
      setPageNum(prev => prev+1);
    }

  return (
    <MainBox>
      <Typography variant='h4'>Explore { mediaType==='movie' ? 'Movies' : 'Tv Shows' } </Typography>
        <Grid container
          justifyContent='center'
        >
        { 
          !loading && apiResult && 
          apiResult?.results?.map( (movie,index) => {
            return(
                <Grid items lg={3} md={4} sm={6} key={index}>
                  <InfinteScroll
                    dataLength={ apiResult?.results?.length || 0}
                    next={ fetchNextPage }  
                    hasMore={ pageNum <= apiResult?.total_pages }
                    >
                      <MovieCardBox>
                        <MovieCard movie={movie} mediaTypeExplore={mediaType} />
                      </MovieCardBox>
                  </InfinteScroll>

                </Grid>
              )
            })
          }
        </Grid>
    </MainBox>
  )
}

export default Explore;