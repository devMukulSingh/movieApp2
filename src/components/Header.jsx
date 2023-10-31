import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, styled } from "@mui/material";
import  logo  from "../assets/movix-logo.png";
import { useNavigate } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////
const StyledButton = styled(Button)({
    textTransform:'none',
    fontSize:16,
    color:'#fff',
    fontWeight:600,
    '&:hover':{
        color:'#485460'
    }
})

////////////////////////////////////////////////////////////////////////

const Header = () => {
    
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }
    const handleExploreBtn = (e) => {
        const media = e.target.innerText;
        let mediaType;
        if(media==='Movies'){
            mediaType='movie';
        }
        else{
            mediaType='tv';
        }
        navigate(`/explore/${mediaType}`);
    }

  return (
    <Box>
        <AppBar
            position='absolute'
            sx={{ background:'transparent'}}
        >   
            <Toolbar sx={{ display:'flex', justifyContent:'space-between'}}>
                <Box sx={{ display:'flex', gap:1, alignItems:'center',cursor:'pointer'}} onClick={ handleNavigate }>
                    <img src={logo} alt="movielogo" style={{ width:'3rem'}}/>
                    <Typography >Moviz</Typography>
                </Box>

                <Box >
                    <StyledButton onClick={ (e) => handleExploreBtn(e) }>Movies</StyledButton>
                    <StyledButton onClick={ (e) => handleExploreBtn(e) }>TV Shows</StyledButton>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header