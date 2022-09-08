import React from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
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
  Theme,
  Typography,
} from '@mui/material';

import VTFormInput from '@/components/Form/FormInput';
import VTSubmitButton from '@/components/Form/SubmitButton';
import VTSocialButton from '@/components/Form/SocialButton';
import { useAppDispatch, useAppSelector } from '@/common/redux/hooks';
import { setSignupData } from '@/common/redux/auth/auth.slice';
import config from '@/utils/config';
import AxiosInstance from '@/common/axiosInstance';
import {
  selectErrorMessage,
  setErrorMessage,
} from '@/common/redux/common/common.slice';

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

  TermCondition: {
    '& a': {
      fontWeight: 400,
      cursor: 'pointer',
    },
  },

  ShowPasswordButton: {
    position: 'absolute',
    right: 4,
  },
}));

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required!').email('Invalid email!'),
  password: Yup.string().required('Password is required!'),
});

const FormSignup = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector(selectErrorMessage);

  const [checked, setChecked] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      const { access_token } = credentialResponse;
      const { data } = await AxiosInstance.get(
        `${config.GOOGLE_AUTH_URL}?access_token=${access_token}`,
      );
      const dataUser = {
        firstName: data.family_name,
        lastName: data.given_name,
        userName: `${data.family_name} ${data.given_name}`,
        email: data.email,
        avatarUrl: data.picture,
      };
      dispatch(setSignupData(dataUser));
    },
  });

  return (
    <React.Fragment>
      <Box sx={{ mt: 2 }}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            firstName: '',
            lastName: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(setSignupData(values));
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <VTFormInput
                    id="outlined-adornment-first-name"
                    isError={Boolean(touched.firstName && errors.firstName)}
                    type="text"
                    name="firstName"
                    label="First Name"
                    errorMessage={errors.firstName}
                    value={values.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <VTFormInput
                    id="outlined-adornment-last-name"
                    isError={Boolean(touched.lastName && errors.lastName)}
                    type="text"
                    name="lastName"
                    label="Last Name"
                    errorMessage={errors.lastName}
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <VTFormInput
                id="outlined-adornment-email-login"
                isError={Boolean(touched.email && errors.email)}
                type="email"
                name="email"
                label="Email Address / Username"
                errorMessage={errors.email}
                value={values.email}
                onChange={(event) => {
                  handleChange(event);
                  dispatch(setErrorMessage({ message: '' }));
                }}
              />

              <VTFormInput
                id="outlined-adornment-password-login"
                label="Password"
                name="password"
                isError={Boolean(touched.password && errors.password)}
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={(event) => {
                  handleChange(event);
                  dispatch(setErrorMessage({ message: '' }));
                }}
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

              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                      />
                    }
                    label={
                      <Typography
                        className={classes.TermCondition}
                        variant="subtitle1"
                      >
                        Agree with&nbsp;
                        <Typography
                          variant="subtitle1"
                          component={Link}
                          href="#"
                        >
                          Terms & Condition.
                        </Typography>
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
              {errorMessage.message && (
                <Typography variant="subtitle2" color="red">
                  {errorMessage.message}!
                </Typography>
              )}

              <VTSubmitButton
                isSubmitting={isSubmitting}
                onClick={() => handleSubmit()}
                variant="contained"
                title="Sign Up"
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
            title="Sign up with Google"
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

export default FormSignup;