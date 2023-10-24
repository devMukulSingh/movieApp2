import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import Img from '../components/Img';
import DetailsMovie from '../components/DetailsMovie';
import DetailsCast from '../components/DetailsCast';
/////////////////////////////////////////////////////
const BackdropImg = styled(Img)({
  opacity:'0.5 !important',
  width:'100vw',
  objectFit:'cover',
})

///////////////////////////////////////////////////////

const DetailsPage = () => {

  const { state : { movie , url} } = useLocation();
  console.log(movie);
  const backdropImg = url + 'original' + movie?.backdrop_path; 

  return (
    <Box >
      
      <Box sx={{ position:'relative'}}>
        <BackdropImg src={backdropImg} alt='backdropImg'/>
      </Box>

      <Box sx={{ position:'absolute',
              top:'70px',
              display:'flex',
              gap:5,
              padding:'1rem 5rem',
              flexDirection:'column'}}>

        <DetailsMovie movie={movie} url={url}/>
        <DetailsCast url={url} />
   
      </Box>


      
    </Box>
  )
}

export default DetailsPage