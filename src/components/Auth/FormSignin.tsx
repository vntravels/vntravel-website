import React from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useGoogleLogin } from '@react-oauth/google';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Theme,
  Typography,
} from '@mui/material';

import VTFormInput from '../Form/FormInput';

const useStyles = makeStyles((theme: Theme) => ({
  AuthButton: {
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: theme.palette.grey[50],
    border: '1px solid',
    borderColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: '#ffffff',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },

  SignDivider: {
    flexGrow: 1,
  },

  SignText: {
    cursor: 'unset',
    margin: theme.spacing(2),
    padding: '5px 56px',
    borderColor: theme.palette.grey[100] + ' !important',
    color: theme.palette.grey[900] + '!important',
    fontWeight: 500,
  },

  LoginIcon: {
    marginRight: 16,
    [theme.breakpoints.down('sm')]: {
      marginRight: 8,
    },
  },

  LoginInput: {
    marginTop: 8,
    marginBottom: 8,

    '& .MuiOutlinedInput-root': {
      borderRadius: 12,
    },

    '& > label': {
      top: '16px',
      left: 0,
      color: theme.palette.grey,
      '&[data-shrink="false"]': {
        top: '5px',
      },
    },
    '& > div > input': {
      padding: '30px 14px 11px !important',
    },
    '& legend': {
      display: 'none',
    },
    '& fieldset': {
      top: 0,
    },
  },

  SubmitButton: {
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: '#438BF7',
    color: '#fdfdfd',
    borderColor: theme.palette.grey[100],
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
}));

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required!').email('Invalid email!'),
  password: Yup.string().required('Password is required!'),
});

const FormLogin = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);

  const googleHandler = async () => {
    login();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    },
  });

  return (
    <React.Fragment>
      <Box sx={{ mt: 2 }}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Box component="form">
              <VTFormInput
                id="outlined-adornment-email-login"
                isError={Boolean(touched.email && errors.email)}
                type="email"
                name="email"
                label="Email Address / Username"
                errorMessage={errors.email}
                value={values.email}
                onChange={handleChange}
              />

              <VTFormInput
                id="outlined-adornment-password-login"
                label="Password"
                name="password"
                isError={Boolean(touched.password && errors.password)}
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Link href={'/forgot-password'}>
                  <Typography
                    variant="subtitle2"
                    color="secondary"
                    sx={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    Forgot Password?
                  </Typography>
                </Link>
              </Stack>
              <Button
                fullWidth
                className={classes.SubmitButton}
                disabled={isSubmitting}
                onClick={() => handleSubmit()}
                variant="contained"
                sx={{ mt: 1, mb: 2, background: '#438BF7' }}
              >
                Sign In
              </Button>
            </Box>
          )}
        </Formik>
      </Box>

      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Divider className={classes.SignDivider} orientation="horizontal" />
            <Typography component="span" className={classes.SignText}>
              OR
            </Typography>
            <Divider className={classes.SignDivider} orientation="horizontal" />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button
            disableElevation
            fullWidth={true}
            className={classes.AuthButton}
            onClick={() => login()}
            size="large"
            variant="contained"
          >
            <Image
              src={'/icons/social-google.svg'}
              alt="google"
              width={20}
              height={20}
            />
            <Typography component="span" marginLeft={'16px'}>
              Sign in with Google
            </Typography>
          </Button>
        </Grid>
        {/* <Grid item xs={12}>
          <Button
            disableElevation
            fullWidth={true}
            className={classes.AuthButton}
            onClick={googleHandler}
            size="large"
            variant="contained"
          >
            <Image
              src={'/icons/iconFacebook.svg'}
              alt="google"
              width={20}
              height={20}
            />
            <Typography component="span" marginLeft={'16px'}>
              Sign in with Facebook
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            disableElevation
            fullWidth={true}
            className={classes.AuthButton}
            onClick={googleHandler}
            size="large"
            variant="contained"
          >
            <Image
              src={'/icons/iconTwitter.svg'}
              alt="google"
              width={20}
              height={20}
            />
            <Typography component="span" marginLeft={'16px'}>
              Sign in with Twitter
            </Typography>
          </Button>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default FormLogin;
