//Login form of the page

import React from 'react'
import { Grid2,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Login=({handleChange})=>{

    const paperStyle={padding :10,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid2>
            <Paper style={paperStyle}>
                <Grid2 align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid2>
                <TextField label='Username' placeholder='Enter username' fullWidth required style={{ marginBottom: '1rem' }}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required style={{ marginBottom: '1rem' }}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button href="#" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="" >
                        Forgot password?
                    </Link>
                </Typography>
                <Typography > Do you have an account?
                     <Link href="#signup" onClick={()=>handleChange("event",1)}>
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid2>
    )
}

export default Login