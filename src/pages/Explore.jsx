import { Box, Grid, Typography, styled } from '@mui/material';
import Select from "react-select";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfinteScroll from "react-infinite-scroll-component";
import MovieCard from '../components/home/MovieCard';
import { getDataFromApi } from '../service/api';
import useFetch from '../hooks/useFetch';
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
const StyledSelect = styled(Select)({
  color:"#000",
  width:'15rem'
})
let filters = {};
/////////////////////////////////////////////////////////
const Explore = () => {

    const[apiResult, setApiResult ] = useState(null);
    const[loading,setLoading] = useState(null);
    const { id,mediaType } = useParams();
    const[pageNum, setPageNum ] = useState(1);
    const[ genres, setGenres ] = useState(null);
    const [sortByFilter, setsortByFilter] = useState(null);

    const options1 = [
      { value:'popularity.desc', label:'Popularity Descending' },
      { value:'popularity.asc', label:'Popularity  Ascending' },
      { value:'vote_average.desc', label:'Ratings Descending' },
      { value:'vote_average.asc', label:'Ratings Ascending' },
      { value:'primary_realease_date.desc', label:'Release Date Descending' },
      { value:'primary_realease_date.asc', label:'Release Date Ascending' },
    ]


    useEffect( () => {
      filters = {};
      setApiResult(null);
      setGenres(null);
      setPageNum(1);
      setsortByFilter(null);
      fetchInitialData();
      
    },[mediaType])
    
    const { data : genresData  } = useFetch(`/genre/${mediaType}/list`);
    const options2 = genresData?.genres?.map( genre => {

      return(
          { value:genre?.id , label:genre?.name?.toUpperCase() }
      )
    })

    const fetchInitialData = async() => {
      setLoading(true);
      const res = await getDataFromApi(`/discover/${mediaType}`,filters);
      setApiResult(res);
      setPageNum(prev => prev+1);
      setLoading(false);
    } 

    const fetchNextPage = async() => {
    
      const res = await getDataFromApi(`/discover/${mediaType}?page=${pageNum}`,filters);
      setApiResult( {
        ...apiResult , results:[ ...apiResult.results , ...res.results]
      });
      setPageNum(prev => prev+1);
    }

    const handleFilters = (selectedItems, action) => {
      if(action.name==='sortByData'){
        setsortByFilter(selectedItems);
        if(action.action !== 'clear' ){
          filters.sort_by = selectedItems.value;

            }
            else{
              delete filters.sort_by;
            }
        }
        else if(action.name==='genres'){
            setGenres(selectedItems);
            console.log(selectedItems);
            if(action.action !== 'clear' ){
               let genre = selectedItems.map( g => g?.value);
               genre = JSON.stringify(genre).slice(1,-1);
                filters.with_genres = genre;
            }
            else{
              delete filters.with_genres;
            }
        }
        setPageNum(1);
        fetchInitialData();
    }


  return (
    <MainBox>
  
      <Typography variant='h4'>Explore { mediaType==='movie' ? 'Movies' : 'Tv Shows' } </Typography>
      <StyledSelect
        isMulti
        name='genres'
        options={options2}
        onChange={ handleFilters }
        value={genres}
      />
      <StyledSelect 
        options={options1}
        onChange={ handleFilters }
        name='sortByData'
        value={sortByFilter}

      />

        <Grid container
          justifyContent='center'
        >
        { 
          !loading && apiResult && 
          apiResult?.results?.map( (movie,index) => {
            return(
                <Grid items lg={3} md={4} sm={6} key={index}>
                  <InfinteScroll
                    dataLength={ apiResult?.results?.length || 0 }
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