import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Image from 'next/image';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    margin: '0 auto',
    padding: '50px 0 20px 0',
    maxWidth: 1240,
    alignItems: 'center',

    '& .MuiIconButton-root': {
      padding: 0,
      margin: 7,
    },
  },

  MenuLink: {
    padding: '0 10px',
    fontWeight: 500,
    color: '#132150',
  },

  LinkRoot: {
    paddingRight: 10,
    color: '#132150',
  },
}));

const socials = [
  { link: '/', src: '/icons/iconFacebook2.svg' },
  { link: '/', src: '/icons/iconTwitter2.svg' },
  { link: '/', src: '/icons/iconGithub.svg' },
  { link: '/', src: '/icons/iconLinkedin.svg' },
];

const menuLink = [
  { link: '/', name: 'Terms of Service' },
  { link: '/', name: 'Privacy Policy' },
  { link: '/', name: 'Cookie Settings' },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.Root}
      direction="row"
      justifyContent="space-between"
    >
      <Stack direction="row">
        <Typography
          className={classes.LinkRoot}
          variant="subtitle2"
          component={Link}
          href="/"
          target="_blank"
          underline="hover"
        >
          &copy; 2022 VnTravel
        </Typography>

        <Divider orientation="vertical" flexItem />

        {menuLink.map((item, index) => (
          <Typography
            key={index}
            className={classes.MenuLink}
            variant="subtitle2"
            component={Link}
            href={item.link}
            target="_blank"
            underline="hover"
          >
            {item.name}
          </Typography>
        ))}
      </Stack>

      <Box component={'div'}>
        {socials.map((item, index) => (
          <Typography
            key={index}
            variant="subtitle2"
            component={Link}
            href={item.link}
            target="_blank"
            underline="hover"
          >
            <IconButton>
              <Image src={item.src} width={36} height={36} alt="" />
            </IconButton>
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};

export default Footer;
