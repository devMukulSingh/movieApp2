import React, { useState } from 'react'
import { styled,Box, Typography, ButtonGroup, Button } from '@mui/material';
import CarouselComp from '../CarouselComp';
import useFetch from '../../hooks/useFetch';

///////////////////////////////////////////////////////////////////
const MainBox = styled(Box)({
  padding:'1rem 2rem',
  marginTop:"1rem"

})

const StyledBtn = styled(Button)({
  textTransform:'none',
})
///////////////////////////////////////////////////////////////////


const TrendingSection = () => { 

  const[time,setTime] = useState('day');

  const { data,loading } = useFetch(`/trending/movie/${time}`);


  const toggleTimeBtn = (e) => {
    if(e.target.innerText==="This Week"){
      setTime('week');
    }
    else{
      setTime('day');
    }
  }

  return (
    <MainBox>
      <Box sx={{ display:'flex',justifyContent:'space-between',}}>

        <Typography>Trending</Typography>
        <ButtonGroup>
          <StyledBtn onClick={ (e) => toggleTimeBtn(e) }>Today</StyledBtn>
          <StyledBtn onClick={ (e) => toggleTimeBtn(e) } >This Week</StyledBtn>
        </ButtonGroup>

      </Box>

      <CarouselComp data={data} loading = {loading} />
      
    </MainBox>
  )
}

export default TrendingSection