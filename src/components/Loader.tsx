import * as React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  Root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
}));

const VTLoader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.Root}>
      <CircularProgress />
    </Box>
  );
};

export default VTLoader;
