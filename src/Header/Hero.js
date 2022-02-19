import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Hero = () => {
    return (
        <Box className='hero-container'>
            <Box className="hero-heading">
            <Typography variant='h3'>MAINTAIN CONSTANCY OF YOUR STYLE</Typography>
            <Typography variant='h4'>Elegant Beauty and Hair Salon</Typography>
            <Typography sx={{ my:2 }} variant='body2'>Beautiful hair is never never ending quest.maintain  
                your <br /> beauty and your hair style   with our great services</Typography>
           <Link to='/services'>
           <button className='explore-btn'>EXPLORE OUR SERVICES</button>
           </Link>
            </Box>
        </Box>
    );
};

export default Hero;