import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    margin: '0 auto',
    padding: '50px 0',
    maxWidth: 1240,

    [theme.breakpoints.down(1300)]: {
      marginLeft: 20,
      marginRight: 20,
      padding: '30px 0',
    },
  },
}));

const SectionContainer = ({ children, ...props }: any) => {
  const classes = useStyles(props);

  return (
    <Box sx={{ backgroundColor: props.backgroundColor }}>
      <Box className={classes.Root}>{children}</Box>
    </Box>
  );
};

export default SectionContainer;
