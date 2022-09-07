import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme: Theme) => ({
  Root: {
    backgroundColor: (props: any) => props.backgroundColor,
  },
  Content: {
    margin: '0 auto',
    padding: '50px 0',
    maxWidth: 1240,
  },
}));

const SectionContainer = ({ children, ...props }: any) => {
  const classes = useStyles(props);

  return (
    <Box className={classes.Root}>
      <Box className={classes.Content}>{children}</Box>;
    </Box>
  );
};

export default SectionContainer;
