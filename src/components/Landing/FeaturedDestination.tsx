import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import { VTCardImage } from '../Card';

const useStyles = makeStyles(() => ({
  CardImageContainer: {
    display: 'flex',
  },

  CardImage: {
    justifyContent: 'space-between',
  },
}));

const FeaturedDestination = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid className={classes.CardImageContainer} item xs={12} md={9}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <VTCardImage image="images/nhatrang2.png" />
          </Grid>
          <Grid item xs={6}>
            <VTCardImage image="images/phuquoc.png" />
          </Grid>
          <Grid item xs={12}>
            <VTCardImage image="images/nhatrang.png" />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.CardImageContainer} item xs={12} md={3}>
        <Grid className={classes.CardImage} container spacing={2}>
          <Grid item xs={4} md={12}>
            <VTCardImage image="images/hanoi.png" />
          </Grid>
          <Grid item xs={4} md={12}>
            <VTCardImage image="images/hanoi.png" />
          </Grid>
          <Grid item xs={4} md={12}>
            <VTCardImage image="images/hanoi.png" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeaturedDestination;
