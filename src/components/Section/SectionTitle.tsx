import React from 'react';
import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme: Theme) => ({
  Root: {
    textAlign: 'center',
    index: -1,
  },

  SectionTitle: {
    fontWeight: 700,
    fontSize: 32,
    color: '#132150',
  },

  SectionDescription: {
    fontSize: 18,
    color: '#5C5B5B',
    marginTop: 20,
  },
}));

type SectionTitleProps = {
  title: string;
  description: string;
};

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  const classes = useStyles();

  const desArr = description.split('.');

  return (
    <Box className={classes.Root}>
      <Typography className={classes.SectionTitle} variant="body1">
        {title}
      </Typography>
      <Typography className={classes.SectionDescription} variant="subtitle2">
        {desArr.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item}. <br />
            </React.Fragment>
          );
        })}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
