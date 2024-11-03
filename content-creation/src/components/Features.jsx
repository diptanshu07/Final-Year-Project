import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';

const Features = () => {
  const features = [
    {
      icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
      title: 'Risk Free',
      description: "Our customers consistently see a sustainable increase in content creation at a fraction of the price of external resources.", 
    },
    {
      icon: <InsightsIcon sx={{ fontSize: 40 }} />,
      title: 'Innovative AI Solutions',
      description: 'Secure, vertical AI-native platform for business-critical operations, AI writes the first draft, humans apply the last mile polish. ',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: 'Everything at once',
      description: 'Perfect for teams looking to establish thought leadership, improve search rankings, and fuel inbound lead generation.',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h2" textAlign="center" gutterBottom>
        Trusted by Thousands
      </Typography>
      <Typography variant="h6" textAlign="center" color="text.secondary" paragraph>
      By seamlessly blending human strategy with AI-driven drafting, <br></br>Clever empowers teams to produce high-quality content at unprecedented speed and scale.<br></br> Experience a paradigm shift in content production that removes bottlenecks, codifies best practices, and gets you up and running.<br></br> By leveraging AI-driven workflows, marketing teams can streamline the entire content creation process from ideation to publication.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={0} sx={{ height: '100%', backgroundColor: 'transparent' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;