import React from 'react';
import { CardMedia, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    boxShadow: 'none',
    borderRadius: 24,
    height: '100%',

    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        '0px 2px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 2px 0px rgb(0 0 0 / 12%)',
    },

    [theme.breakpoints.down('sm')]: {
      borderRadius: 14,
    },
  },
}));

type VTCardImageProps = {
  width?: string | number;
  height?: string | number;
  image: string;
};

const VTCardImage = ({ width, height, image }: VTCardImageProps) => {
  const classes = useStyles();

  return image ? (
    <CardMedia
      className={classes.Root}
      component="img"
      width={width}
      height={height}
      image={image}
      alt={image}
    />
  ) : (
    <></>
  );
};

export default VTCardImage;
