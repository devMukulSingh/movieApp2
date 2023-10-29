import React, { useState } from 'react';
import dayjs from 'dayjs';
import RatingComp from '../RatingComp';
import { Box, Button, Typography, styled } from '@mui/material';
import Img from '../Img';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DetailsVideoPlayer from './DetailsVideoPlayer';

/////////////////////////////////////////////////////

const PosterImg = styled(Img)({
    width:'15rem',
    borderRadius:10,
  
})

/////////////////////////////////////////////////////
  
const DetailsMovie = ( {url,movie }) => {

    const[ open,setOpen ] = useState(false);
    const[ trailerId,setTrailerId] = useState(null);
    const posterImg = url + 'original' + movie?.poster_path;
    const { id,mediaType } = useParams();
    const { data,loading } = useFetch(`/${mediaType}/${id}/videos`);

    const handleTrailerPlay = () => {
        const trailerData = data?.results?.filter(result => result.name.includes('Official Trailer'));
        setTrailerId(trailerData[0]?.key);
        setOpen(true);
    }

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
                        <Button onClick={ handleTrailerPlay }>Play Trailer</Button>
                        { !loading && data && 
                            <DetailsVideoPlayer open={open} setOpen={setOpen} id={trailerId}/>}
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