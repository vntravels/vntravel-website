import React from 'react';
import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme: Theme) => ({
  Root: {
    margin: '0 auto',
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabBooking = ({ children, value, index }: TabPanelProps) => {
  const classes = useStyles();

  return (
    <>{value === index && <Box className={classes.Root}>{children}</Box>}</>
  );
};

export default TabBooking;
