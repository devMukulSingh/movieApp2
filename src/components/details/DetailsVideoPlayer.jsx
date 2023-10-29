import { Box, Dialog, styled } from '@mui/material'
import React from 'react';
import ReactPlayer from 'react-player';
import CloseIcon from '@mui/icons-material/Close';
////////////////////////////////////////////////////////

const StyledDialog = {
    width:'40rem',
    height:'20rem',
    padding:1,
    background:'#1E272E',
}

/////////////////////////////////////////////////
const DetailsVideoPlayer = ( {id,setOpen,open} ) => {

    const handleCloseVideo = () => {
        setOpen(false);
    }

  return (
    <Box>
          <Dialog 
            PaperProps={ { sx:StyledDialog}}
            open={open} 
            onClose={handleCloseVideo} 
            >
                <CloseIcon sx={{ cursor:'pointer',color:'#fff',}} onClick={handleCloseVideo} fontSize='large'/>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                    width='100%' 
                    height='100%'
                    controls
                    playing={true}
                />
        </Dialog>
    </Box>
  )
}

export default DetailsVideoPlayer