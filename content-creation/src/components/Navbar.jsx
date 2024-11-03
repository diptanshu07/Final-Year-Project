import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  // position: 'fixed',
  top: '0',
});

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <StyledToolbar>
        <Typography variant="h1" component="div" fontWeight="bold">
          Clever
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button href="#hero" color="inherit">Home</Button>
          <Button href="#about" color="inherit">About Us</Button>
          <Button href="#features" color="inherit">Features</Button>
          <Button href="#solutions" color="inherit">Solutions</Button>
          <Button href="#pricing" color="inherit">Pricing</Button>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;