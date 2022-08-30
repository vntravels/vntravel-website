import React, { useState } from 'react';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import {
  Theme,
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

import Logo from 'src/components/Logo';
import { useAppSelector } from 'src/common/redux/hooks';
import { selectIsLogin } from 'src/common/redux/auth/auth.slice';
import HeaderDropdown from 'src/components/Header/Dropdown';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    position: 'fixed',
    width: '100%',
    background: '#ffffff',
  },

  Header: {
    maxWidth: 1300,
    display: 'flex',
    padding: '22px 20px',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  RightNav: {
    display: 'flex',
    alignItems: 'center',
  },

  ButtonLocation: {
    color: '#132150',
    paddingRight: 0,

    '& span': {
      marginRight: 10,
      verticalAlign: 'bottom',
    },
  },

  MenuLocation: {
    '& .MuiPaper-root': {
      borderRadius: 10,
      minWidth: 180,
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: 0,
      },
      '& .MuiMenuItem-root': {
        padding: 10,
        '& .MuiListItemText-root': {
          marginLeft: 8,
          '& .MuiTypography-root': {
            fontSize: 12,
          },
        },
      },
    },
  },

  ButtonSignUp: {
    marginLeft: 20,
    color: '#132150',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,
  },

  ButtonSignIn: {
    marginLeft: 12,
    width: 140,
    background: '#438BF7',
    borderRadius: 10,
    color: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,
  },
}));

const Header = () => {
  const classes = useStyles();
  const router = useRouter();
  const isLogin = useAppSelector(selectIsLogin);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.Root}>
      <Box className={classes.Header}>
        <Logo />
        <Box className={classes.RightNav}>
          <Box>
            <Button
              className={classes.ButtonLocation}
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              endIcon={
                <Image
                  width={32}
                  height={22}
                  src={'/icons/VietNam.png'}
                  alt=""
                />
              }
            >
              <Typography fontSize={12} variant="body2" component="span">
                VND
              </Typography>
            </Button>
            <Menu
              className={classes.MenuLocation}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
              disableScrollLock
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Image width={32} height={22} src={'/icons/US.png'} alt="" />
                </ListItemIcon>
                <ListItemText>United State (USD)</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Image width={32} height={22} src={'/icons/UK.png'} alt="" />
                </ListItemIcon>
                <ListItemText>United Kingdom (EUR)</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Image width={32} height={22} src={'/icons/SG.png'} alt="" />
                </ListItemIcon>
                <ListItemText>Singapore (SGD)</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Image
                    width={32}
                    height={22}
                    src={'/icons/Australia.png'}
                    alt=""
                  />
                </ListItemIcon>
                <ListItemText>Australia (AUD)</ListItemText>
              </MenuItem>
            </Menu>
          </Box>

          <Box>
            {isLogin ? (
              <HeaderDropdown />
            ) : (
              <>
                <Button
                  className={classes.ButtonSignUp}
                  onClick={() => router.push('/signup')}
                >
                  Sign up
                </Button>
                <Button
                  variant="contained"
                  className={classes.ButtonSignIn}
                  onClick={() => router.push('/signin')}
                >
                  Sign in
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
