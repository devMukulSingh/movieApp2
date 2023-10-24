import React from 'react';
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch';
import { styled,Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Img from './Img';
//////////////////////////////////////////////////

const MainBox = styled(Box)({
    position:"relative",
})
const MovieImg = styled(Img)({
    height:'35rem',
    width:'calc(100vw)',
    objectFit:'cover',
    objectPosition:'top'
})

const BackgroundImg = () => {

    const { url } = useSelector( state => state.homeSlice);
    const { data } = useFetch('/movie/upcoming');

    const randomNum = Math.floor(Math.random() * 20);
    const backdropPath = data?.results[randomNum]?.backdrop_path;

    const backgroundImgUrl = url + 'original' + backdropPath; 

  return (
    <MainBox>
        <MovieImg src={backgroundImgUrl} alt="backgroundImgMovie" />
        <Box sx={{ position:'absolute',zIndex:100,top:'4rem',left:'5em'}}>
            <InputBase/>
            <SearchIcon color='action'/>
        </Box>
    </MainBox>
  )
}

export default BackgroundImg