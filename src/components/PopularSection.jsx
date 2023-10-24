import React, { useState } from 'react'
import { styled,Box, Typography, ButtonGroup, Button } from '@mui/material';
import CarouselComp from './CarouselComp';
import useFetch from '../hooks/useFetch';

///////////////////////////////////////////////////////////////////
const MainBox = styled(Box)({
  padding:'1rem 2rem',
  marginTop:"1rem"

})

const StyledBtn = styled(Button)({
  textTransform:'none',
})
///////////////////////////////////////////////////////////////////


const PopularSection = () => { 

  const[category,setCategory] = useState('movie');

  const response = useFetch(`/${category}/popular`);


  const toggleTimeBtn = (e) => {
    if(e.target.innerText==="TV Shows"){
      setCategory('tv');
    }
    else{
      setCategory('movie');
    }
  }

  return (
    <MainBox>
      <Box sx={{ display:'flex',justifyContent:'space-between',}}>

        <Typography>Whats Popular</Typography>
        <ButtonGroup>
          <StyledBtn onClick={ (e) => toggleTimeBtn(e) } >Movies</StyledBtn>
          <StyledBtn onClick={ (e) => toggleTimeBtn(e) } >TV Shows</StyledBtn>
        </ButtonGroup>

      </Box>

      <CarouselComp data={response?.data} loading = {response?.loading} />
      
    </MainBox>
  )
}

export default PopularSection