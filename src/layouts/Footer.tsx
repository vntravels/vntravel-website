import { Link, Stack, Typography } from '@mui/material';
import React from 'react';

// material-ui

//-----------------------|| FOOTER - AUTHENTICATION 2 & 3 ||-----------------------//

const Footer = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography
        variant="subtitle2"
        component={Link}
        href="https://berrydashboard.io"
        target="_blank"
        underline="hover"
      >
        berrydashboard.io
      </Typography>
      <Typography
        variant="subtitle2"
        component={Link}
        href="https://codedthemes.com"
        target="_blank"
        underline="hover"
      >
        &copy; codedthemes.com
      </Typography>
    </Stack>
  );
};

export default Footer;
