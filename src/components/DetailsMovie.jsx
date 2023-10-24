import React from 'react';
import dayjs from 'dayjs';
import RatingComp from '../components/RatingComp';
import { Box, Button, Typography, styled } from '@mui/material';
import Img from '../components/Img';

/////////////////////////////////////////////////////

const PosterImg = styled(Img)({
    width:'15rem',
    borderRadius:10,
  
})

/////////////////////////////////////////////////////
  
const DetailsMovie = ( {url,movie }) => {

  const posterImg = url + 'original' + movie?.poster_path;

  return (

    <Box sx={{ display:'flex',gap:5}}>
            <PosterImg src={posterImg} alt="posterImg"/>

            <Box sx={{ display:'flex',flexDirection:'column',gap:1}}>

                <Typography sx={{ fontSize:30,fontWeight:600}}>
                    {movie?.title || movie?.name} ({dayjs(movie?.release_date).format('YYYY')})
                </Typography>
                <Typography>{dayjs(movie?.release_date).format('DD/MM/YYYY') }</Typography>

                <Box sx={{ display:'flex', alignItems:"center",gap:2}}>
                    <Box>
                        <RatingComp rating={movie?.vote_average.toFixed(1)}/>
                    </Box>
                        <Box sx={{ display:'flex'}}>
                        <Typography>User </Typography>&nbsp;
                        <Typography>Score</Typography>
                        <Button>Play Trailer</Button>
                    </Box>
                </Box>

                <Box>
                    <Typography sx={{ fontSize:22,fontWeight:600}}>Overview</Typography>
                    <Typography>{movie?.overview}</Typography>
                </Box>
        </Box> 
</Box>
  )
}

export default DetailsMovie