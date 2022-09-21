import { Grid } from '@mui/material';
import React from 'react';

import { VTCardTrending } from '../Card';

const TrendingDestination = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <VTCardTrending
          title="Flight to Nha Trang"
          price="250.000"
          rating={2}
          currency="VND"
          image="images/hanoi.png"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <VTCardTrending
          title="Flight to Nha Trang"
          price="250.000"
          rating={2}
          currency="VND"
          image="images/hanoi.png"
        />
      </Grid>
    </Grid>
  );
};

export default TrendingDestination;
