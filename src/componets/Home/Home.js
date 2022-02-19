import { Box } from '@mui/material';
import React from 'react';
import Header from '../../Header/Header';
import About from '../About/About';
import Barbers from '../Barbers/Barbers';
import Reservation from '../Reservation/Reservation';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import WorkingDays from '../WorkingDays/WorkingDays';
import './Home.css'
 

const Home = () => { 
    return (
        <div>
            
            <Header></Header>
            <Box  > 
            <About/>
            <Services></Services>
            </Box >
            <Reservation></Reservation>
            <Testimonial></Testimonial>
            <WorkingDays/>
            <Barbers></Barbers>
        </div>
    );
};

export default Home;