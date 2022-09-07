import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  Root: {
    padding: 24,
    border: '1px solid #D6D2D2',
    boxShadow: 'none',
    borderRadius: 24,

    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
  },

  CardMedia: {
    borderRadius: 24,
  },

  CardContent: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: '0 !important',
  },

  CardTitle: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '36px',
    color: '#132150',
  },

  CardDescription: {
    fontSize: 16,
    color: '#5C5B5B',
  },
}));

type VTCardProps = {
  title?: string;
  description?: string;
  image?: string;
};

const VTCard = ({ title, description, image }: VTCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.Root}>
      {image && (
        <CardMedia
          className={classes.CardMedia}
          component="img"
          width={384}
          height={324}
          image={image}
          alt={title}
        />
      )}

      <CardContent className={classes.CardContent}>
        {title && (
          <Typography
            className={classes.CardTitle}
            gutterBottom
            variant="subtitle1"
            component="div"
          >
            {title}
          </Typography>
        )}

        {description && (
          <Typography
            className={classes.CardDescription}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default VTCard;
