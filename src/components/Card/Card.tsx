import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BedOutlined } from '@mui/icons-material';

const useStyles = makeStyles(() => ({
  Root: {
    border: '1px solid #D6D2D2',
    boxShadow: 'none',
    borderRadius: 24,

    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
  },

  CardTitle: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '36px',
    color: '#132150',
  },

  CardDescription: {
    fontWeight: 600,
    fontSize: 16,
    color: '#5C5B5B',
  },

  RoomAvailable: {
    fontSize: 16,
    color: '#5C5B5B',
    marginTop: 10,
  },
}));

type VTCardProps = {
  title?: string;
  description?: string;
  image?: string;
  style?: any;
  roomAvailable?: number;
};

const VTCard = ({
  title,
  description,
  image,
  style,
  roomAvailable,
}: VTCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.Root} sx={{ padding: style.padding }}>
      {image && (
        <CardMedia
          sx={{ borderRadius: style.borderRadius }}
          component="img"
          width={384}
          image={image}
          alt={title}
        />
      )}

      <CardContent
        sx={{
          paddingLeft: style.paddingLeft,
          paddingRight: style.paddingRight,
          paddingBottom: style.paddingBottom,
        }}
      >
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

        {roomAvailable && (
          <>
            <Typography
              className={classes.RoomAvailable}
              variant="body2"
              color="text.secondary"
              component="div"
            >
              <BedOutlined
                sx={{ verticalAlign: 'bottom', marginRight: '10px' }}
              />
              Room Available: {roomAvailable}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default VTCard;
