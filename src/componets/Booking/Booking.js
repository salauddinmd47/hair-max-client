import { TextField, Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { makeAnAppointment } from "../../redux/Slice/servicesSlice";
import { useHistory } from "react-router-dom";
import { useAddAppointmentMutation, useGetAllServicesQuery,useGetAllAppointmentsQuery } from "../../redux/Slice/serviceApi";
const Booking = () => {
  const { serviceId } = useParams();
  
  const [date, setDate] = React.useState(new Date()); 
  const { user } = useAuth();
  const initialState = {userName:user.displayName,email:user.email,phone:'', date:date}
  const [bookingInfo, setBookingInfo] = React.useState(initialState);
  
  const dispatch = useDispatch();
  const history = useHistory();
 
  const  [addAppointment,] = useAddAppointmentMutation();  
  const { data, isLoading } = useGetAllServicesQuery();
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  const selectedService = data?.find((service) => service.key == serviceId);
  const { name } = selectedService; 
  
  

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value; 
    let newBookingInfo = { ...bookingInfo };
    newBookingInfo[field] = value; 
    setBookingInfo(newBookingInfo);
    console.log(newBookingInfo)
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const booking ={
      ...bookingInfo,
      serviceName:name,
      date:date.toLocaleDateString()
    } 
    addAppointment(booking) 
    alert("Your Booking Is Successfully Completed");
    history.push("/appointments");
  };

  return (
    <div>
      <form onSubmit={handleBookingSubmit} >
        <h2>Please Booking Your Appointment</h2>
        <TextField
          label="Name"
          variant="standard"
          name="userName"
          defaultValue={user?.displayName}
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          label="email"
          variant="standard"
          type="email"
          name="email"
          defaultValue={user?.email}
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          label="Phone"
          variant="standard"
          onBlur={handleOnBlur}
          name="phone"
        />
        <br />
        <TextField
          label="Service name "
          variant="standard"
          name="name"
          defaultValue={name}
          onBlur={handleOnBlur}
        />
        <br />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Appointment date"
            name="date"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <br />
        <Button type="submit"  variant="contained">
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};

export default Booking;
