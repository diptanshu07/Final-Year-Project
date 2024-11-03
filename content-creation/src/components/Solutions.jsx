import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Solutions = () => {
  const capabilities = [
    'Over 20+ AI models for personalised generation',
    'Produce high-quality content at unprecedented speed and scale.',
    'Effortlessly produce high-quality, SEO-optimized content at scale, driving organic traffic and engagement',
    'Applies your unique brand voice, value props, and best practices',
    'Automatically generate data-driven content ideas and briefs',
    'Real-time model memorisation for future reference',
    'Turn Transcripts into Top Tier Content',
    'Intelligently expand concepts into rich narratives',
    'Remove the bottlenecks for content creation',
  ];

  return (
    <Box sx={{ py: 8 }} background='black'>
      <Typography variant="h2" gutterBottom >
        Comprehensive and Highly Advanced Tools and Capabilities
      </Typography>
      <List>
        {capabilities.map((capability, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={capability} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Solutions;