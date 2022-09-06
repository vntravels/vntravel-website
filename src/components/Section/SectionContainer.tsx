import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme: Theme) => ({
  Root: {
    margin: '0 auto',
    padding: '50px 0',
    maxWidth: 1240,
  },
}));

const SectionContainer = ({ children }: any) => {
  const classes = useStyles();

  return <Box className={classes.Root}>{children}</Box>;
};

export default SectionContainer;
