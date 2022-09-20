import { Grid } from '@mui/material';
import React from 'react';

import { VTCardImage } from '../Card';

const FeaturedDestination = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <VTCardImage
              width={484}
              height={427}
              image="images/nhatrang2.png"
            />
          </Grid>
          <Grid item xs={6}>
            <VTCardImage width={484} height={427} image="images/phuquoc.png" />
          </Grid>
          <Grid item xs={12}>
            <VTCardImage
              width={1012}
              height={424}
              image="images/nhatrang.png"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <VTCardImage width={291} height={275} image="images/hanoi.png" />
          </Grid>
          <Grid item xs={12}>
            <VTCardImage width={291} height={275} image="images/hanoi.png" />
          </Grid>
          <Grid item xs={12}>
            <VTCardImage width={291} height={275} image="images/hanoi.png" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeaturedDestination;
