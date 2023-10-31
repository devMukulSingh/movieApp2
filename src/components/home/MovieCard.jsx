import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import Img from '../Img'
import { useSelector } from 'react-redux';
import dayjs from "dayjs";
import RatingComp from '../RatingComp';
import { useNavigate } from "react-router-dom";
///////////////////////////////////////////////////


const MovieImg = styled(Img)({
    // height:'30rem',
    width:'17rem',
    objectFit:'contain',
    borderRadius:10,
})
const MainBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    // gap:3, 
    position:'relative', 
    cursor:'pointer',
    height:"32rem",

})
const MovieCard = ( { movie,mediaTypeExplore } ) => {

    const navigate = useNavigate();
    const { url } = useSelector( state => state.homeSlice);
    const movieUrl = url + 'original' + movie?.poster_path;
    let mediaType;
    if(mediaTypeExplore){
        mediaType=mediaTypeExplore;
    }
    else if(!movie?.media_type){
        mediaType='tv';
    }
    else{
        mediaType='movie';
    }
    const handleNavigate = () => {
        navigate(`/details/${mediaType}/${movie?.id}`, { state: { movie,url  } } )
    }

  return (

    <MainBox  
        onClick = { handleNavigate } >

        <MovieImg src={movieUrl} alt='movieImg'/>
        
        <Box sx={{ position:'absolute',bottom:90,left:120}}>
            <RatingComp rating={movie?.vote_average.toFixed(1)}/>
        </Box>

        <Box sx={{ display:'flex',flexDirection:'column',gap:1, marginTop:'auto'}}>
            <Typography>{movie?.title || movie?.name}</Typography>
            <Typography>{ dayjs(movie?.release_date)?.format('MMM DD YYYY') }</Typography>
        </Box>


    </MainBox>
  )
}

export default MovieCard