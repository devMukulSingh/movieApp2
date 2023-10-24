import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Box, Typography, styled } from '@mui/material';
import { SingleCast } from './SingleCast';
//////////////////////////////////////////////////
const CastBox = styled(Box)({
    display:'flex',
    gap:10,
    overflowX:'scroll !important',
    position:'static'
})
const MainBox = styled(Box)({
    display:'flex',
    flexDirection:"column",
    gap:20,
    overflowX:'scroll',
    overflow:'auto'
})
const DetailsCast = ( {url} ) => {
    const { mediaType, id } = useParams();
    const { data,loading } = useFetch(`/${mediaType}/${id}/credits`);
    console.log(data);

  return (
    <>
    {
        !loading && data &&
            <MainBox >
                <Typography sx={{ fontSize:30, fontWeight:600}}>Top Billed Cast</Typography>

                <CastBox>
                    {
                        data?.cast?.map( (cast,index) => {
                            return(
                                <SingleCast cast={cast} loading={loading} key={index} url={url}/>
                                )
                            })
                        }
        
                </CastBox>
            </MainBox>
    }
    </>
  )
}

export default DetailsCast