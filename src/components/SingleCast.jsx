import { Box, styled } from '@mui/material'
import React from 'react'
import Img from './Img';

const CastImg = styled(Img)({
    width:'10rem',
    borderRadius:10,
})

export const SingleCast = ( {cast,url} ) => {

    const castImg = url + 'original' + cast?.profile_path;

  return (

    <Box sx={{ display:'flex'}}>
        <CastImg src={castImg} alt="castImg" />
    </Box>

  )
}
