import React from 'react';
import { Box, Typography, Button, Grid, Grid2 } from '@mui/material';
import { styled } from '@mui/material/styles';
import Heropng from "../assets/chat.png"

const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  
  background: 'linear-gradient(45deg, #fff8f6 50%, #ffe5e0 90%)',
  borderRadius: '20px',
  marginTop: theme.spacing(7),
  
}));

const Hero = () => {
  return (
    <HeroSection>
      <Grid 
          container spacing={4} 
          alignItems="center"
          justifyContent="center"
          sx={{ maxWidth: '1200px', margin: '0 auto',padding: 4}}
        >

        <Grid item xs={12} md={6}>
          <Typography variant="h1" gutterBottom>
            AI-Powered Assistant
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Clever is dedicated to transforming era of content creation with cutting-edge artificial intelligence.<br></br> Power your content creation engine with Clever.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Start Creating now!
          </Button>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
          <img
            src={Heropng}
            alt="Description of the photo"
            style={{ width: '150%', height: 'auto', maxWidth: '500px' }}
          />
        </Grid>
      </Grid>
    </HeroSection>
  );
};

export default Hero;