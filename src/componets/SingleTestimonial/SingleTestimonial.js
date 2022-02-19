import { Grid } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SingleTestimonial = ({testimonial}) => {
    const {name, commnents, img} = testimonial;

     
    return ( 
           <Grid item md={4} xs={12} sm={12}>
                 
            <img style={{ width:"75%" }} src={img} alt="" />

            <h4>{name}</h4>
            <p>{commnents}</p> 
        </Grid>
       
        
    );
};

export default SingleTestimonial;