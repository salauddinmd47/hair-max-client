import { Button } from '@mui/material';
import React from 'react'; 
import loginImg from '../../images/password.png'
import googleIcon from '../../images/google.png'
import { textAlign } from '@mui/system';
import useAuth from '../../hooks/useAuth';
import { useLocation,useHistory } from 'react-router-dom';
 
const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const {googleSignIn} = useAuth() 
    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }
    const loginContainer = {
        height:"80Vh",
        textAlign:'center'
    }
    const login = {
        height: '400px',
        width:'400px',
        backgroundColor:'grey',
        display:"flex", 
        justifyContent:'center',
        margin:'auto',
        alignItems:'center'
    }
    return (
        <div style={loginContainer} >
            <h2>Please Login</h2>
            <div style={login}>
                <div>
                <img style={{ width:'150px',margin:"auto" }} src={loginImg} alt="" />
                <br />
             <Button sx={{ backgroundColor:"#0FB7AA" }} variant='contained' onClick={handleGoogleSignIn}> <img style={{ width:"20px",marginRight:"5px" }} src={googleIcon} alt="" />  Google Sign In</Button> 
                </div>
            </div>
        </div>
    );
};

export default Login;