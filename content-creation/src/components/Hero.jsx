import React from 'react';
import { Box, Typography, Button, Grid2 } from '@mui/material';
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
      <Grid2 
          container spacing={4} 
          alignItems="center"
          justifyContent="center"
          sx={{ maxWidth: '1200px', margin: '0 auto', paddingX: 2 }}
        >

        <Grid2 item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography variant="h1" gutterBottom>
            AI-Powered Assistant
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Clever is dedicated to transforming era of content creation with cutting-edge artificial intelligence.<br></br> Power your content creation engine with Clever.
          </Typography>
          <Button variant="contained" color="primary" size="large" margin="10">
            Start Creating now!
          </Button>
        </Grid2>
        <Grid2 item xs={12} md={6}>
        <img
          src={Heropng}
          alt="Description of the photo"
          style={{ width: '100%', height: 'auto',
            background: 'linear-gradient(45deg, #fff8f6 30%, #ffe5e0 90%)'
           }}
        />
        </Grid2>
      </Grid2>
    </HeroSection>
  );
};

export default Hero;