import { Grid } from '@mui/material';
import React from 'react';

import { VTCard } from '../Card';

const BestPlace = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <VTCard
          title="Lizard"
          description="Test"
          image="images/hanoi.png"
          style={{
            padding: '24px',
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 'o !important',
            borderRadius: '24px',
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <VTCard
          title="Lizard"
          description="Test"
          image="images/hanoi.png"
          style={{
            padding: '24px',
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 'o !important',
            borderRadius: '24px',
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <VTCard
          title="Lizard"
          description="Test"
          image="images/hanoi.png"
          style={{
            padding: '24px',
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 'o !important',
            borderRadius: '24px',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default BestPlace;
