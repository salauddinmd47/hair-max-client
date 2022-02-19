import React, { useEffect, useState } from 'react';  

import {Container, Grid, Typography} from '@mui/material'
import { Box } from '@mui/system';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(()=>{
        fetch('./testimonials.json')
        .then(res=> res.json())
        .then(data => setTestimonials(data.slice(0,3)))
    },[])
     
    return (
        <Container>
        <Box sx={{ textAlign:'center', my:5 }}>
            <Typography sx={{ mb:1 }} variant='subtitle1'>TESTIMONIAL </Typography>
            <Typography variant='h4'>What Our Clients Says</Typography>
        </Box>
         
        <Grid container spacing={3}>
        
          {
            testimonials.map(testimonial=> <SingleTestimonial 
                testimonial ={testimonial}
                key={testimonial.id}
            ></SingleTestimonial>)
          } 
        </Grid>
       
        
      </Container>
    );
};

export default Testimonial;