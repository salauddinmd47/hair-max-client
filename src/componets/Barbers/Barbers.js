import { Chip, Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import barber1 from "../../images/barber-team-1.jpg";
import barber2 from "../../images/barber-team-2.jpg";
import barber3 from "../../images/barber-team-3.jpg";
import barber4 from "../../images/barber-team-4.jpg";
const Barbers = () => {
  return (
    <div>
        <Box sx={{ textAlign:'center', mb:8, mt:2 }}>
            <Typography sx={{ fontWeight:'bold', color:'#4B4B50',mb:2 }} variant="subtitle1">
            MEET OUR TEAM OF BEARD PROFESSIONALS
            </Typography>
            <Typography variant="h4">
            OUR BARBERS AND STYLISTS
            </Typography>
        </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid md={3} sm={6} xs={12} item>
            <Box sx={{ textAlign: "center",border: 4,py:5,borderColor: 'grey'  }}>
              <img
                style={{ borderRadius: "50%", width: "150px" }}
                src={barber1}
                alt=""
              />
              <Typography sx={{ fontWeight:"bold" }} variant="h6">JAMES BARBER</Typography>
              <Divider sx={{ width:'30%', mx:'auto' }}>
                <Chip label="" />
              </Divider>
              <Typography sx={{ fontWeight:"bold",color:"#4B4B50" }} variant="subtitle1">Beard Trimmer</Typography>
              <Typography sx={{ my: 3,color:"#4B4B50" }} variant="body1">
              10 years of experience in bearding. You will be in trusted hands.
              </Typography>
              <Typography sx={{color:"#4B4B50" }} variant="body2">Email: james@barber.com</Typography>
            </Box>
          </Grid>
          <Grid md={3} sm={6} xs={12} item>
            <Box sx={{ textAlign: "center",border: 4,py:5,borderColor: 'grey'  }}>
              <img
                style={{ borderRadius: "50%", width: "150px" }}
                src={barber2}
                alt=""
              />
              <Typography sx={{ fontWeight:"bold" }} variant="h6">DEEN MUSTACHIO</Typography>
              <Divider sx={{ width:'30%', mx:'auto' }}>
                <Chip label="" />
              </Divider>
              <Typography sx={{ fontWeight:"bold",color:"#4B4B50" }} variant="subtitle1">Mustache Expert</Typography>
              <Typography sx={{ my: 3,color:"#4B4B50" }} variant="body1">
              5 years of experience in bearding. You will be in trusted hands.
              </Typography>
              <Typography sx={{color:"#4B4B50" }} variant="body2">
Email: deen@barber.com</Typography>
            </Box>
          </Grid>
          <Grid md={3} sm={6} xs={12} item>
            <Box sx={{ textAlign: "center",border: 4,py:5,borderColor: 'grey'  }}>
              <img
                style={{ borderRadius: "50%", width: "150px" }}
                src={barber3}
                alt=""
              />
              <Typography sx={{ fontWeight:"bold" }} variant="h6">JOSEPHINE COLORISTA</Typography>
              <Divider sx={{ width:'30%', mx:'auto' }}>
                <Chip label="" />
              </Divider>
              <Typography sx={{ fontWeight:"bold",color:"#4B4B50" }} variant="subtitle1">Color Expert</Typography>
              <Typography sx={{ my: 3,color:"#4B4B50" }} variant="body1">
              7 years of experience in coloring. You will be in trusted hands.
              </Typography>
              <Typography sx={{color:"#4B4B50" }} variant="body2">Email: josephine@barber.com</Typography>
            </Box>
          </Grid>
          <Grid md={3} sm={6} xs={12} item>
            <Box sx={{ textAlign: "center",border: 4,py:5,borderColor: 'grey'  }}>
              <img
                style={{ borderRadius: "50%", width: "150px" }}
                src={barber4}
                alt=""
              />
              <Typography sx={{ fontWeight:"bold" }} variant="h6">CLINT HAIRISTA</Typography>
              <Divider sx={{ width:'30%', mx:'auto' }}>
                <Chip label="" />
              </Divider>
              <Typography sx={{ fontWeight:"bold",color:"#4B4B50" }} variant="subtitle1">Hair Specialist</Typography>
              <Typography sx={{ my: 3,color:"#4B4B50" }} variant="body1">
              12 years of experience in styling. You will be in trusted hands.
              </Typography>
              <Typography sx={{color:"#4B4B50" }} variant="body2">Email: clint@barber.com</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Barbers;
