import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import Head from 'next/head';
import {
  Box,
  Grid,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import Logo from '@/components/Logo';
import Footer from '@/layouts/Footer';
import FormSignup from '@/components/FormSignup';
import VTLoader from '@/components/Loader';

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

  LinkSignin: {
    textAlign: 'center',

    '& a': {
      marginLeft: theme.spacing(1),
      fontWeight: 400,
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
}));

const Signup: NextPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>VnTravel | Sign Up</title>
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
                        direction={matchDownSM ? 'column-reverse' : 'row'}
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
                            >
                              Sign Up
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid className={classes.LinkSignin} item xs={12}>
                          <Typography
                            component={'span'}
                            variant="subtitle1"
                            color="grey"
                          >
                            Have an account?
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="secondary"
                            component={Link}
                            href={'/signin'}
                          >
                            Click here.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Suspense fallback={<VTLoader />}>
                        <FormSignup />
                      </Suspense>
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

export default Signup;
