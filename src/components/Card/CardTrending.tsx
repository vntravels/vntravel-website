import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  Button,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Star } from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    padding: 24,
    border: '1px solid #D6D2D2',
    boxShadow: 'none',
    borderRadius: 24,
    display: 'flex',

    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
  },

  CardMedia: {
    borderRadius: 24,
    maxWidth: 183,
    maxHeight: 194,
  },

  CardContent: {
    position: 'relative',
    paddingLeft: 30,
    flex: '1 0 auto',
  },

  ButtonBook: {
    position: 'absolute',
    bottom: 20,
    width: 140,
    background: '#438BF7',
    borderRadius: 10,
    color: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,
  },

  TextPrice: {
    color: '#132150',
    marginRight: theme.spacing(1),
  },
}));

type VTCardProps = {
  title?: string;
  price?: string;
  currency?: string;
  rating?: number;
  image?: string;
};

const VTCardTrending = ({
  title,
  price,
  currency,
  rating,
  image,
}: VTCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.Root}>
      <CardMedia
        className={classes.CardMedia}
        component="img"
        height={194}
        image={image}
        alt={title}
      />
      <CardContent className={classes.CardContent}>
        <Typography component="div" variant="h3" color="#132150">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', marginTop: '4px' }}>
          <Rating
            name="hover-feedback"
            value={rating}
            precision={0.5}
            readOnly
            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
        </Box>

        <Typography
          marginTop={'10px'}
          variant="body1"
          color="text.secondary"
          component="div"
        >
          <Typography
            className={classes.TextPrice}
            variant="body1"
            color="secondary"
            component="span"
          >
            {price}
          </Typography>
          {currency}/night
        </Typography>

        <Button
          className={classes.ButtonBook}
          onClick={() => {}}
          variant="contained"
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default VTCardTrending;
