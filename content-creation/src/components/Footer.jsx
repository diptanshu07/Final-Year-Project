import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'rgb(237,152,78)', color: 'black', py: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Company Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Clever
            </Typography>
            <Typography variant="body2">
              Gol Building, Newtown<br />
              South Kolkata, 700231<br />
              +91 9000000001
            </Typography>
          </Grid>
          
          {/* Contact Us Section */}
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', lg: 'right' } }}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', lg: 'flex-end' }} mb={1}>
              <Email fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">contact@clever.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', lg: 'flex-end' }}>
              <Phone fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">+91 9000000001</Typography>
            </Box>
          </Grid>

          {/* Links and Policies */}
          <Grid item xs={12} md={4}>
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
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="center">
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>

        {/* Footer Bottom Text */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; 2024 Clever. Designed by You.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
