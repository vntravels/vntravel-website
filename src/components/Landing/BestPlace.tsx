import { Grid } from '@mui/material';
import React from 'react';

import { VTCard } from '../Card';

const BestPlace = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={4}>
        <VTCard title="Lizard" description="Test" image="images/hanoi.png" />
      </Grid>
      <Grid item xs={6} sm={4}>
        <VTCard title="Lizard" description="Test" image="images/hanoi.png" />
      </Grid>
      <Grid item xs={6} sm={4}>
        <VTCard title="Lizard" description="Test" image="images/hanoi.png" />
      </Grid>
    </Grid>
  );
};

export default BestPlace;
