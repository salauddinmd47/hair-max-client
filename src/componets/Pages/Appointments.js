import {
  Typography,
  Container,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react"; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import { useDeleteAppointmentMutation, useGetAllAppointmentsQuery } from "../../redux/Slice/serviceApi";
import {useHistory} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
const Appointments = () => { 
    const history = useHistory()
    const {user} = useAuth()
    console.log(user.email)

    const {data, isLoading,refetch} = useGetAllAppointmentsQuery(user?.email)
   
  const  [deleteAppointment] = useDeleteAppointmentMutation()
    const handleRemoveAppointment = (id)=>{
       const proceed =  window.confirm("do you want to delete you appointment")
        if(proceed){
            deleteAppointment(id)
            refetch()
           
        }
        
    }
    if(isLoading){
      return <h2>Loading .....</h2> 
    }
  return (
    <div style={{ minHeight: "80VH" }}>
      {
          data.length? <Box sx={{ textAlign: "center", my: 6, color: "#CAB4A9" }}>
          <Typography variant="h6">APPOINTMENTS</Typography>
          <Typography variant="h4">
            Mange Your All Appointment From Here
          </Typography>
        </Box>:<div>
              <h2 style={{ textAlign:'center' }}>You Don't hve any appointment</h2>
              </div>
      }
      <Container>
        {
          data.length ? <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor:'black',}}>
                  <TableCell sx={{ color:'white',fontWeight:"bold"  }}>Client Name</TableCell>
                  <TableCell sx={{ color:'white',fontWeight:"bold"  }} align="right">Service Name</TableCell>
                  <TableCell sx={{ color:'white',fontWeight:"bold"  }} align="right">Date</TableCell>
                  <TableCell sx={{ color:'white',fontWeight:"bold"  }} align="right">Email</TableCell>
                  <TableCell sx={{ color:'white',fontWeight:"bold"  }} align="right">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { data.map((appointment,index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {appointment.userName}
                    </TableCell>
                    <TableCell sx={{ textAlign:"right" }} component="th" scope="row">
                      {appointment.serviceName}
                    </TableCell>
                    <TableCell align="right">{appointment.date}</TableCell>
                    <TableCell align="right">{appointment.email}</TableCell>
                    <TableCell align="right">
                     <IconButton onClick={()=> handleRemoveAppointment(appointment._id)} aria-label="delete">
                      <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>: <div style={{ textAlign:"center" }}>
          <button onClick={()=> history.push('/services')} className="explore-btn"> Let's Book an Appointment </button> 
          </div>
         
        }
      </Container>
    </div>
  );
};

export default Appointments;
