 
import { Button } from '@mui/material';
import './App.css';
import Home from './componets/Home/Home';
import Header from './Header/Header';
import Navbar from './Header/Navbar';
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import AboutUs from './componets/Pages/AboutUs';
import Contact from './componets/Pages/Appointments';
import ServiceDetails from './componets/Pages/ServiceDetails';
import AllServices from './componets/Pages/AllServices'
import Appointments from './componets/Pages/Appointments';
import Footer from './componets/Footer/Footer';
import Login from './componets/Login/Login';
import AuthProvider from './componets/AuthProvider/AuthProvider';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';
import Booking from './componets/Booking/Booking';
function App() {
  return (
    <AuthProvider>
      <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path ="/about" component={AboutUs}/>
          <Route exact path ="/appointments" component={Appointments}/>
          <Route exact path ="/services" component={AllServices}/>
          <Route exact path ="/login" component={Login}/>
            <Route Route path="/service/:serviceId">
                <ServiceDetails></ServiceDetails>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
                <Booking></Booking>
            </PrivateRoute>
        </Switch>
        <Footer/>
      </BrowserRouter> 
    </div>
    </AuthProvider>
  );
}

export default App;
