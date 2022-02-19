import { Container, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div style={{ marginTop:"50px",backgroundColor:'#C4BAB5' }} >
             <Container>
                 <Grid container >
                    <Grid md={3} xs={12} item>
                       <h4> About us </h4>
                          <p>we provide amazing service for our client. We always ensure quality service and willing to here your feed back so that we can improve ourself</p>
                    </Grid>
                    <Grid md={3} xs={12} item>
                       <h4> Services </h4>
                         <p>Face shave</p> 
                         <p>Hair cut</p> 
                         <p>Spa and massage</p> 
                         <p>Damage repair</p> 
                    </Grid>
                    <Grid md={3} xs={12} item>
                       <h4>Social Links </h4>
                       <p>Facebook</p> 
                         <p>Instagram</p> 
                         <p>Tweeter</p> 
                         <p>Pinterest</p> 
                    </Grid>
                    <Grid md={3} xs={12} item>
                       <h4> Address </h4>
                          <p>450 main street, new york,us </p>
                          <p>phone: +1-0101010110</p>
                          <p>email: support@barber.com</p>
                          <p>Saturday and sunday closed</p>
                    </Grid>
                    
                 </Grid>
                 
             </Container>
             <p style={{ textAlign:"center",marginBottom:"0", paddingBottom:"10px" }}>©2022 HairMaxSalon || All rights Reserved</p>
        </div>
    );
};

export default Footer;