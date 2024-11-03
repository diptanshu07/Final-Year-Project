import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const plans = [
  {
    title: 'Basic Plan',
    price: 'Free',
    features: ['Basic outputs', 'Daily 10 generation', 'Email support'],
  },
  {
    title: 'Standard Plan',
    price: '$10',
    features: ['All Basic Plan features', 'Advanced analytics', '50 generation daily', 'Custom dashboards'],
  },
  {
    title: 'Premium Plan',
    price: '$19',
    features: ['All Standard Plan features','Access to exclusive AI models', 'Generate images with prompt', 'Transform raw interviews instantly', 'Personalised Content', ],
  },
];

const Pricing = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h2" textAlign="center" gutterBottom>
        Choose the Plan That Perfectly Match Yours
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  {plan.price}
                </Typography>
                <List>
                  {plan.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} disablePadding>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <Box sx={{ px: 2, pb: 2 }}>
                <Button variant="contained" color="primary" fullWidth>
                  Choose Plan
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;