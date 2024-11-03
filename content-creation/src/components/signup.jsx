//Signup form of the page

import React from 'react'
import { Grid2, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
const Signup = () => {
    const paperStyle = { padding: '20', width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid2>
            <Paper style={{...paperStyle, padding:'2rem'}}>
                <Grid2 align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid2>
                <form padding="2rem">
                    <TextField fullWidth label='Name' placeholder="Enter your name" style={{ marginBottom: '1rem' }}/>
                    <TextField fullWidth label='Email' placeholder="Enter your email" style={{ marginBottom: '1rem' }}/>
                    <FormControl component="fieldset" style={{ ...marginTop, marginBottom: '1rem' }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" style={{ marginBottom: '1rem' }}/>
                    <TextField fullWidth label='Password' type= "password" placeholder="Enter your password" style={{ marginBottom: '1rem' }}/>
                    <TextField fullWidth label='Confirm Password' type= "password" placeholder="Confirm your password" style={{ marginBottom: '1rem' }}/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                        style={{ marginBottom: '1rem' }}
                    />
                    <Button href="#" type='submit' variant='contained' color='primary' fullWidth style={{ padding: '0.8rem' }}>Sign up</Button>
                </form>
            </Paper>
        </Grid2>
    )
}

export default Signup;