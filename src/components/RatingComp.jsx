import { Box } from '@mui/material';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RatingComp = ({rating}) => {

  return (
    <Box sx={{ width:'4rem',background:'#fff',borderRadius:'50%'}}>
        <CircularProgressbar
            value={rating}
            text={rating}
            maxValue={10}
            styles={
                buildStyles({
                     pathColor : 
                       rating <= 5 ? 'red' : rating >= 7 ? 'green' : 'orange',
                       textColor:'#000',
                       textSize:'28px'
                    })
                } 
        />
    </Box>
  )
}

export default RatingComp