import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import { useGoogleLogin } from '@react-oauth/google';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import {
  Box,
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

import VTFormInput from '@/components/Form/FormInput';
import VTSubmitButton from '@/components/Form/SubmitButton';
import VTSocialButton from '@/components/Form/SocialButton';
import { useAppDispatch } from '@/common/redux/hooks';
import { setSigninData } from '@/common/redux/auth/auth.slice';

const useStyles = makeStyles((theme: Theme) => ({
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

  Stack: {
    alignItems: 'center',
    justifyContent: 'space-between',

    '& a': {
      fontWeight: 400,
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },

  ShowPasswordButton: {
    position: 'absolute',
    right: 4,
  },
}));

const FormSignin = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [checked, setChecked] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      const { access_token } = credentialResponse;
      dispatch(setSigninData({ access_token }));
    },
  });

  return (
    <React.Fragment>
      <Box sx={{ mt: 2 }}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(setSigninData(values));
            setTimeout(() => {
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Box component="form">
              <VTFormInput
                id="outlined-adornment-email-login"
                type="email"
                name="email"
                label="Email Address / Username"
                value={values.email}
                onChange={handleChange}
              />

              <VTFormInput
                id="outlined-adornment-password-login"
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                endAdornment={
                  values.password ? (
                    <InputAdornment
                      className={classes.ShowPasswordButton}
                      position="end"
                    >
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        disableTouchRipple
                      >
                        {showPassword ? (
                          <VisibilityOutlined />
                        ) : (
                          <VisibilityOffOutlined />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ) : (
                    <></>
                  )
                }
              />

              <Stack direction="row" spacing={1} className={classes.Stack}>
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
                <Typography
                  variant="subtitle2"
                  color="secondary"
                  component={Link}
                  href={'/forgot-password'}
                >
                  Forgot Password?
                </Typography>
              </Stack>
              <VTSubmitButton
                isSubmitting={isSubmitting}
                onClick={() => handleSubmit()}
                variant="contained"
                title="Sign In"
              />
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
          <VTSocialButton
            onClick={() => login()}
            size="large"
            variant="contained"
            title="Sign in with Google"
            srcImage={'/icons/social-google.svg'}
          />
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

export default FormSignin;
