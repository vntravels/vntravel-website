import { Typography, Box, List, ListItem, Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import React from 'react';

import Logo from '../Logo';

const useStyles = makeStyles(() => ({
  PaymentPartner: {
    '& .MuiTypography-h3': {
      marginTop: 24,
      marginBottom: 10,
    },
  },

  ListItem: {
    fontWeight: 500,
    color: '#5C5B5B',
  },

  PaymentType: {
    marginRight: 10,
    cursor: 'pointer',
  },
}));

const listExtensions = [
  {
    name: 'Services',
    children: [
      {
        link: '/',
        name: 'Travel Booking',
      },
      {
        link: '/',
        name: 'Flight Booking',
      },
      {
        link: '/',
        name: 'Car Booking',
      },
      {
        link: '/',
        name: 'Traveling',
      },
    ],
  },
  {
    name: 'Support',
    children: [
      {
        link: '/',
        name: 'Account',
      },
      {
        link: '/',
        name: 'Legal',
      },
      {
        link: '/',
        name: 'Contact',
      },
      {
        link: '/',
        name: 'Privacy Policy',
      },
    ],
  },
  {
    name: 'Business',
    children: [
      {
        link: '/',
        name: 'Blog',
      },
      {
        link: '/',
        name: 'Information',
      },
    ],
  },
];

const Extensions = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6}>
      <Grid item xs={4}>
        <Typography variant="subtitle1" component="div">
          <Logo />
          <Typography
            color="#5C5B5B"
            variant="subtitle2"
            lineHeight={2}
            component="div"
          >
            This is the team that specializes in making sure in the find it a
            your interior looks cool
          </Typography>
        </Typography>

        <Box className={classes.PaymentPartner} component="div">
          <Typography
            variant="h3"
            fontSize={20}
            color="#132150"
            component="div"
          >
            Payment Partner
          </Typography>
          <Typography
            className={classes.PaymentType}
            variant="subtitle2"
            component="span"
          >
            <Image
              src={'/icons/iconMasterCard.svg'}
              width={42}
              height={42}
              alt=""
            />
          </Typography>
          <Typography
            className={classes.PaymentType}
            variant="subtitle2"
            component="span"
          >
            <Image src={'/icons/iconVisa.svg'} width={42} height={42} alt="" />
          </Typography>
          <Typography
            className={classes.PaymentType}
            variant="subtitle2"
            component="span"
          >
            <Image
              src={'/icons/iconPaypal.svg'}
              width={42}
              height={42}
              alt=""
            />
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          {listExtensions.map((item, index) => (
            <Grid key={index} item xs={4}>
              <Typography
                variant="h3"
                fontSize={20}
                color="#132150"
                component="div"
              >
                {item.name}
              </Typography>
              <List>
                {item.children.map((ele, key) => (
                  <ListItem key={key} sx={{ paddingLeft: 0 }}>
                    <Typography
                      className={classes.ListItem}
                      variant="subtitle2"
                      component={Link}
                      href={ele.link}
                      target="_blank"
                      underline="hover"
                    >
                      {ele.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Extensions;
