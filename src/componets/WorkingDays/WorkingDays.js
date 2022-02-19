import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import workingBg from '../../images/workingbg.jpg'

const workingStyle = {
    background:`url(${workingBg})`,
    backgroundPosition:"bottom",
    backgroundSize:'cover',
    width:'100%',
    height:'100%',
    backgroundAttachment :'fixed' 
}

const WorkingDays = () => {
  return (
    <div style={workingStyle}>
      <Container sx={{ display: "flex", justifyContent: "center", mx: "auto", my:10, py:20 }}>
        <Grid container>
          <Grid
            sx={{
              backgroundColor: "#837C2B",
              height: "120px",
              p: 3,
                 mr: 3,
               ml:3,
              borderRadius: "50%",
            }}
            md={1.3}
            sm={2}
            xs={3}
            item
          >
            <Box
              sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}
            >
              <Typography variant="h4">MON</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                o8.00-15.00
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#837C2B",
              height: "120px", 
              p: 3,
                 mr: 3,
              borderRadius: "50%",
            }}
            md={1.3}
            sm={2}
            xs={3}
            item
          >
            <Box
              sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}
            >
              <Typography variant="h4">TUE</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                o8.00-15.00
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#837C2B",
              height: "120px", 
              p: 3,
                 mr: 3,
              borderRadius: "50%",
            }}
            md={1.3}
            sm={2}
            xs={3}
            item
          >
            <Box
              sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}
            >
              <Typography variant="h4">WED</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                o8.00-15.00
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#837C2B",
              height: "120px", 
              p: 3,
                 mr: 3,
              borderRadius: "50%",
            }}
            md={1.3}
            sm={2}
            xs={3}
            item
          >
            <Box
              sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}
            >
              <Typography variant="h4">THU</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                o8.00-15.00
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#837C2B",
              height: "120px", 
              p: 3,
                 mr: 3,
              borderRadius: "50%",
            }}
            md={1.3}
            sm={2}
            xs={3}
            item
          >
            <Box
              sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}
            >
              <Typography variant="h4"> FRI</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                o8.00-15.00
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#4D5454",
              height: "120px", 
              p: 3,
                 mr: 3,
              borderRadius: "50%",
            }}
            md={1.3}
            sm={2}
            xs={3}
            item
          >
            <Box
              sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}
            >
              <Typography variant="h4">SAT</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                CLOSED
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#4D5454",
              height: "120px", 
              p: 3,
                 mr: 3,
              borderRadius: "50%",
            }}
            md={1.3}
            sm={2}
            xs={3}
            item
          >
            <Box
              sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}
            >
              <Typography variant="h4">SUN</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                CLOSED
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WorkingDays;
