import { Box, Typography, styled, Dialog,} from '@mui/material'
import React, { useState } from 'react';
import Img from '../Img';
import DetailsVideoPlayer from './DetailsVideoPlayer';
////////////////////////////////////////////////////////
const MainBox = styled(Box)({
    display:'flex',
    flexDirection:"column",
    gap:10,

})
const DetailsSingleVideo = ( {video} ) => {

    const[open,setOpen] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`;

    const handleOpenVideo = () => {
        setOpen(true);
    }
  return (

    <MainBox>

        <Box onClick = { handleOpenVideo }>
            <Img src={thumbnailUrl} alt="thumbnailImg" style={{ borderRadius:10}} />
            <Typography>{ video?.name }</Typography>
        </Box>

        <DetailsVideoPlayer id={video?.key} open={open} setOpen={setOpen}/>
      
    </MainBox>
  )
}

export default DetailsSingleVideo;