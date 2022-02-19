import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import ReservationImg from '../../images/reservation-chair.jpg'
const Reservation = () => {
    const reservationBg={
        backgroundImage:`url(${ReservationImg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
        backgroundBlendMode: 'darken, luminosity',
        width:'100%',
        backgroundAttachment:'fixed'
    }
    return (
        <div>
            <Box sx={{ textAlign:'center',py:15,color:'white' }} style={reservationBg}>
                <Typography variant='h2'>
                    Make a Reservation
                </Typography>
                <Typography variant='body2'>
                We create styles for the way you look and the way you live!
                </Typography>
                <Link to="/services"><button className='explore-btn'>Click Here Now</button></Link>
            </Box>
        </div>
    );
};

export default Reservation;