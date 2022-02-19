 import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
 
 const Service = ({service}) => {
     const {name, thumbNail, tag,key} = service
     return (
         <Grid md={4} xs={12}  item>
             <Box >
             <img style={{width:'360px' }} src={thumbNail} alt="" />
             <Typography sx={{ color:"#744730" }} variant="h4">
                 {name}
             </Typography>
             <Typography sx={{ my:2,color:'#744730' }} variant="subtitle1">
                 {tag}
             </Typography>
             <Box sx={{ textAlign:'center' }}>
             <Link to={`/service/${key}`}>
             <button style={{ width:'50%',margin:'auto' }} className='explore-btn'>View Details</button>
             </Link>
             </Box>
             </Box>
         </Grid>
     );
 };
 
 export default Service;