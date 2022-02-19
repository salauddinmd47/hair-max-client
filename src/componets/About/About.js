import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import aboutImg from "../../images/about.png";
import "./About.css";
import Button from '@mui/material/Button';
const About = () => {
  return (
    <Box className="about-container">
      <Grid container>
        <Grid md={6} item>
          <img className="about-thumb" src={aboutImg} alt="" />
        </Grid>
        <Grid className="about-details" md={6} item> 
          <Box>
          <Typography variant="h3" gutterBottom component="div">
            About us
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <button className="explore-btn">Learn more</button>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default About;
