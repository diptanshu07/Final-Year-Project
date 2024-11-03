import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', py: 6 }}>
      <Container maxWidth="lg" max-h-100 >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Clever  
            </Typography>
            
            <Typography variant="body2">
              Gol Building, Newtown<br />
              South Kolkata, 700231<br />
              +91 9000000001
            </Typography>
            
          </Grid>
          <Grid item xs={20} md={60}>
            
          </Grid>
          <Grid container spacing={20} justifyContent="right">
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="body2">
                  <Link href="#" color="inherit" underline="hover">
                    Terms and Conditions
                  </Link>
                </Typography>
                <Typography variant="body2" mt={1}>
                  <Link href="#" color="inherit" underline="hover">
                    Help
                  </Link>
                </Typography>
                <Typography variant="body2" mt={1}>
                  <Link href="#" color="inherit" underline="hover">
                    Privacy Policies
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;