import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  Root: {
    padding: 24,
    border: '1px solid #D6D2D2',
    boxShadow: 'none',
    borderRadius: 10,
  },

  CardMedia: {
    borderRadius: 10,
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
