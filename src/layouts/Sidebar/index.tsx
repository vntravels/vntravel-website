import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Theme,
  Typography,
} from '@mui/material';
import {
  AccountBoxOutlined,
  PersonAddAltOutlined,
  StarBorder,
} from '@mui/icons-material';
import { useRouter } from 'next/router';

import { items } from './items';

import useResponsive from '@/hooks/useResponsive';
import { useAppDispatch, useAppSelector } from '@/common/redux/hooks';
import { logout, selectIsLogin } from '@/common/redux/auth/auth.slice';
import { selectUserProfile } from '@/common/redux/user/user.slice';

const useStyles = makeStyles((theme: Theme) => ({
  Drawer: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
    },
  },

  DrawerPaper: {
    width: '240px',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '240px',
      boxSizing: 'border-box',
    },
  },

  AccountStyle: {
    alignItems: 'center',
    padding: theme.spacing(1, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    overflow: 'hidden',
    // backgroundColor: theme.palette.grey[500],
  },

  Button: {
    marginLeft: 12,
    color: '#132150',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Sidebar = ({ displaySidebar, drawerOpen, drawerToggle, window }: any) => {
  const classes = useStyles();
  const router = useRouter();
  const matchUpSm = useResponsive({ query: 'up', key: 'sm' });
  const isLogin = useAppSelector(selectIsLogin);
  const userProfile = useAppSelector(selectUserProfile);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);

  const onLogout = () => {
    dispatch(logout());
  };

  const drawer = (
    <React.Fragment>
      <Box>
        {isLogin ? (
          <>
            <Box
              component={'div'}
              className={classes.AccountStyle}
              onClick={() => setOpen(!open)}
            >
              <Box component="div" sx={{ display: 'flex' }}>
                <Avatar src={userProfile.avatarUrl} alt="avatar" />
                <Box sx={{ ml: 1 }}>
                  <Typography component={'div'}>
                    Hi, {userProfile.lastName || 'null'}
                  </Typography>
                  <Typography component={'div'} variant="subtitle2">
                    {userProfile.userName || 'null'}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ paddingLeft: 1 }}>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </>
        ) : (
          <List component="div" disablePadding sx={{ paddingLeft: 1 }}>
            <ListItemButton onClick={() => router.push('/signin')}>
              <ListItemIcon>
                <AccountBoxOutlined />
              </ListItemIcon>
              <ListItemText primary="Sign in" />
            </ListItemButton>
            <ListItemButton onClick={() => router.push('/signup')}>
              <ListItemIcon>
                <PersonAddAltOutlined />
              </ListItemIcon>
              <ListItemText primary="Sign up" />
            </ListItemButton>
          </List>
        )}
      </Box>

      <Box>
        <List disablePadding sx={{ p: 1 }}>
          <Divider />
          {items.map((item: any, index: number) =>
            item.label !== 'Logout' ? (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ) : isLogin ? (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={onLogout}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ) : (
              <div key={index}></div>
            ),
          )}
        </List>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: 'relative' }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Get more?
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              From only $69
            </Typography>
          </Box>

          <Button
            href="https://material-ui.com/store/items/minimal-dashboard/"
            target="_blank"
            variant="contained"
          >
            Upgrade to Pro
          </Button>
        </Stack>
      </Box>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    displaySidebar && (
      <Box
        component={'nav'}
        className={classes.Drawer}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant={matchUpSm ? 'persistent' : 'temporary'}
          anchor="right"
          open={drawerOpen}
          onClose={drawerToggle}
          className={classes.DrawerPaper}
          ModalProps={{ keepMounted: true }}
          color="inherit"
        >
          {drawer}
        </Drawer>
      </Box>
    )
  );
};

export default Sidebar;
