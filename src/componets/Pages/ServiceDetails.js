import React from 'react';
import { Grid, Typography,Box,Container } from '@mui/material';
import {Link, useParams} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import{ makeAnAppointment} from '../../redux/Slice/servicesSlice'
import { useGetAllServicesQuery } from '../../redux/Slice/serviceApi';
const ServiceDetails = () => {
    const {serviceId} =  useParams()
    const dispatch = useDispatch()

    // const services = useSelector((state)=> state.services.services)
    // const selectedService = services?.find(service=> service.key ==serviceId) 
    const {data, isLoading} = useGetAllServicesQuery()
    
    if(isLoading){
        return <h2>Loading....</h2>
    }
    const selectedService = data?.find(service=> service.key ==serviceId) 
    const {name, thumbNail, description, tag, price, timeZone, category, appointment} = selectedService;
    return (
        <Box>
            <Container sx={{ mt:10 }}>
            <Grid container>
                <Grid item md= {5}>
                    <img style={{ width:'90%' }} src={thumbNail} alt="" />
                </Grid>
                <Grid item md= {6}>
                     <Typography sx={{ mb:2, fontWeight:'bold',color:'#cca28d' }}   variant='h4'>{name}</Typography>
                     <Typography sx={{ mb:2,color:'#744730',fontWeight:'bold' }} variant='h6'>{tag}</Typography>
                     <Typography sx={{ mb:2,color:'#744730' }} variant='body1'>{description}</Typography>
                     <Typography sx={{ mb:2,color:'#744730' }} variant='body1'><span style={{ fontWeight:"700", color:"black" }}>Category:</span> {category}</Typography>
                     <Typography sx={{ mb:2,color:'#744730' }} variant='subtitle1'><span style={{ fontWeight:"700", color:"black" }}>Appointment:</span>{appointment}</Typography>
                     <Typography sx={{ mb:2,color:'#744730' }} variant='body1'><span style={{ fontWeight:"700", color:"black" }}>time:</span> {timeZone}</Typography>
                     <Typography sx={{ mb:2,color:'#744730' }} variant='h6'><span style={{ fontWeight:"700", color:"black" }}>Price:</span> $ {price}</Typography> 
                    <Link to ={`/booking/${serviceId}`}>
                    <button   className='explore-btn'>Book Appointment</button>
                    </Link>
                </Grid>
            </Grid>

            </Container>
        </Box>
    );
};

export default ServiceDetails;