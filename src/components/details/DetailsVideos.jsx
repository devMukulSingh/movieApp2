import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import SingleVideo from './DetailsSingleVideo';

const VideosBox = styled(Box)({
  display:"flex",
  gap:10,
  overflow:"auto",
  width:'calc(100vw - 10rem)',
  paddingBottom:"1rem",
  marginTop:'1rem'
})
const DetailsVideos = () => {

  const { id, mediaType } = useParams();
  const { data,loading } = useFetch(`/${mediaType}/${id}/videos`);
  console.log(data);

  return (
    <>
      {
        !loading && data &&
          <Box>
            <Typography sx={{ fontSize:30,fontWeight:600}}>Official Videos</Typography>

            <VideosBox>
              { 
                  data?.results?.map( (video,index) => {
                    return (
                      <SingleVideo video={video} key={index}/>
                    )
                  })
              }
            </VideosBox>

          </Box>
      }
    </>
  )
}

export default DetailsVideos