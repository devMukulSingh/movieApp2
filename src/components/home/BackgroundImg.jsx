import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch';
import { styled,Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Img from '../Img';
import { useNavigate } from 'react-router-dom';
//////////////////////////////////////////////////

const MainBox = styled(Box)({
    position:"relative",
})
const MovieImg = styled(Img)({
    height:'35rem',
    width:'calc(100vw - 17px)',
    objectFit:'cover',
    objectPosition:'top'
})
const StyledInputBase = styled(InputBase)({
    width:'100%',

})
const SearchBox = styled(Box)({
    position:'absolute',
    zIndex:100,
    top:250,
    left:550, 
    background:'#fff',
    display:'flex',
    alignItems:'center',
    padding:'5px 10px',
    borderRadius:8,
    width:'20rem',

})

const BackgroundImg = () => {

    const navigate = useNavigate();
    const { url } = useSelector( state => state.homeSlice);
    const { data } = useFetch('/movie/upcoming');
    const[ query, setQuery ] = useState('');

    const randomNum = Math.floor(Math.random() * 20);
    const backdropPath = data?.results[randomNum]?.backdrop_path;

    const backgroundImgUrl = url + 'original' + backdropPath; 

    const onValueChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    }
    const handleSearch = (e) => {
        if(e.key=='Enter'){
            navigate(`/search/${query}`);
        }
    }

  return (
    <MainBox>
        <MovieImg src={backgroundImgUrl} alt="backgroundImgMovie" />
        <SearchBox>
            <StyledInputBase placeholder='Search...' onChange={ onValueChange } onKeyUp={ handleSearch }/>
            <SearchIcon color='action' sx={{ cursor:"pointer"}}/>
        </SearchBox>
    </MainBox>
  )
}

export default BackgroundImg