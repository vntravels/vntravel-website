import React from 'react';
import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    paddingTop: 40,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
    },
  },
}));

const SectionContent = ({ children }: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.Root} component="div">
      {children}
    </Box>
  );
};

export default SectionContent;
