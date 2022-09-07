import React from 'react';
import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme: Theme) => ({
  Root: {
    paddingTop: 30,
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
