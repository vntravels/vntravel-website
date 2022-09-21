import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Drawer, Theme } from '@mui/material';

import useResponsive from '@/hooks/useResponsive';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
    },
  },
  drawerPaper: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRight: 'none',
    [theme.breakpoints.up('md')]: {
      top: '88px',
    },
  },
  ScrollHeight: {
    height: 'calc(100vh - 88px)',
    paddingLeft: '16px',
    paddingRight: '16px',
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 56px)',
    },
  },
  boxContainer: {
    display: 'flex',
    padding: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Sidebar = ({ drawerOpen, drawerToggle, window }: any) => {
  const classes = useStyles();
  const matchUpSm = useResponsive({ query: 'up', key: 'sm' });

  const drawer = (
    <React.Fragment>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <div className={classes.boxContainer}></div>
      </Box>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant={matchUpSm ? 'persistent' : 'temporary'}
        anchor="right"
        open={drawerOpen}
        onClose={drawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default Sidebar;
