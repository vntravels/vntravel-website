import React, { useEffect } from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useGoogleLogin } from '@react-oauth/google';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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

import VTFormInput from '../Form/FormInput';
import { useAppDispatch, useAppSelector } from 'src/common/redux/hooks';
import { selectIsLogin, setSigninData } from 'src/common/redux/auth/auth.slice';
import { useRouter } from 'next/router';
import VTSubmitButton from '../Form/SubmitButton';
import VTSocialButton from '../Form/SocialButton';
import config from 'src/utils/config';
import AxiosInstance from 'src/common/axiosInstance';

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
}));

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required!').email('Invalid email!'),
  password: Yup.string().required('Password is required!'),
});

const FormLogin = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isLogin = useAppSelector(selectIsLogin);

  useEffect(() => {
    if (isLogin) {
      router.push('/');
    }
  }, [isLogin, router]);

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
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(setSigninData(values));
            setTimeout(() => {
              setSubmitting(false);
            }, 1000);
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

export default FormLogin;
