import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import Head from 'next/head';
import { Box, Grid, Stack, Theme, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

import Logo from '@/components/Logo';
import FormSignin from '@/components/FormSignin';
import Footer from '@/layouts/Footer';
import { useAppSelector } from '@/common/redux/hooks';
import { selectIsLogin } from '@/common/redux/auth/auth.slice';
import useResponsive from '@/hooks/useResponsive';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    backgroundColor: 'rgb(227, 242, 253)',
    minHeight: '100vh',
  },

  Card: {
    maxWidth: '475px',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '20px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '400px',
    },
  },

  Content: {
    background: '#ffffff',
    borderRadius: 12,
    border: '1px solid #90caf975',
    padding: theme.spacing(6) + ' !important',
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(3) + ' !important',
    },
  },

  LinkSignup: {
    textAlign: 'center',

    '& a': {
      marginLeft: theme.spacing(1),
      fontWeight: 400,
      textDecoration: 'none',
      cursor: 'pointer',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 14,

      '& .MuiTypography-root': {
        fontSize: 12,
      },
    },
  },
}));

const Signin: NextPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const isLogin = useAppSelector(selectIsLogin);
  const matchDownSM = useResponsive({ query: 'down', key: 'sm' });

  useEffect(() => {
    if (isLogin) {
      router.replace('/');
    }
  }, [isLogin, router]);

  return (
    <>
      <Head>
        <title>VnTravel | Sign In</title>
      </Head>
      <Box className={classes.Root}>
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: 'calc(100vh - 68px)' }}
            >
              <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                <Box component={'div'} className={classes.Card}>
                  <Grid
                    className={classes.Content}
                    container
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item sx={{ mb: 3 }}>
                      <Link href="/">
                        <Logo />
                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction={'row'}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item>
                          <Stack
                            alignItems="center"
                            justifyContent="center"
                            spacing={1}
                          >
                            <Typography
                              color={theme.palette.secondary.main}
                              gutterBottom
                              variant={'h2'}
                              fontSize={matchDownSM ? 16 : 24}
                            >
                              Hi, Welcome To VnTravel
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid className={classes.LinkSignup} item xs={12}>
                          <Typography
                            component={matchDownSM ? 'div' : 'span'}
                            variant="subtitle1"
                            color="grey"
                          >
                            Don't have an account?
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="secondary"
                            component={Link}
                            href={'/signup'}
                          >
                            Click here.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <FormSignin />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  );
};

export default Signin;
