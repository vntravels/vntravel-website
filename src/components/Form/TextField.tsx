import React from 'react';
import { InputAdornment, TextField, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme: Theme) => ({
  TextInput: {
    background: '#F7F7F7',
    width: '100%',

    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
      border: 0,
      display: 'block',
      padding: '12px 17px',

      '& .MuiOutlinedInput-input': {
        width: '100%',
        padding: 0,
        fontWeight: 600,
        fontSize: 14,
        color: '#9d9d9d',
      },

      '& .MuiInputAdornment-root': {
        height: 'auto',
      },

      '& .MuiTypography-root': {
        fontWeight: 700,
        fontSize: 16,
        color: '#5C5B5B',
      },
    },
  },
}));

type VTTextFieldProps = {
  title: string;
  placeholder?: string;
  type: string;
};

const VTTextField = ({ title, placeholder, type }: VTTextFieldProps) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.TextInput}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{title}</InputAdornment>
        ),
        placeholder,
        type,
      }}
    />
  );
};

export default VTTextField;
