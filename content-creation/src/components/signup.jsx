import React from 'react';
import { Grid2, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const paperStyle = { padding: '20', width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginTop = { marginTop: 5 };
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault(); // Prevent form submission
    navigate('/register'); // Navigate to the register page
  };

  return (
    <Grid2>
      <Paper style={paperStyle}>
        <Grid2 align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
        </Grid2>
        <form onSubmit={handleSignup}>
          <TextField fullWidth label='Name' placeholder="Enter your name" />
          <TextField fullWidth label='Email' placeholder="Enter your email" />
          <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
          <TextField fullWidth label='Password' type="password" placeholder="Enter your password" />
          <TextField fullWidth label='Confirm Password' type="password" placeholder="Confirm your password" />
          <Button type='submit' variant='contained' color='primary'>Sign up</Button>
        </form>
      </Paper>
    </Grid2>
  );
}

export default Signup;
