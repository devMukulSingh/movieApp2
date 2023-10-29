import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Box, Typography, styled } from '@mui/material';
import { SingleCast } from './DetailsSingleCast';
//////////////////////////////////////////////////
const MainBox = styled(Box)({
    display:'flex',
    flexDirection:"column",
    gap:20,
})
const CastBox = styled(Box)({
    display:'flex',
    gap:10,
    overflow:'auto',
    width:'calc(100vw - 10rem)',
})
const DetailsCast = ( {url} ) => {

    const { mediaType, id } = useParams();
    const { data,loading } = useFetch(`/${mediaType}/${id}/credits`);

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