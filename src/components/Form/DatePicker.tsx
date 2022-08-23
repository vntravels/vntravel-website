import React, { useState } from 'react';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const useStyles = makeStyles((_theme: Theme) => ({
  Root: {
    background: '#F7F7F7',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    padding: '12px 17px',
    borderRadius: 10,
  },
  DateInput: {
    '& .MuiOutlinedInput-input .MuiInputAdornment-positionEnd': {
      display: 'flex',
      padding: 0,
      fontWeight: 600,
      fontSize: 14,
    },
  },

  DateInputContent: {
    border: 'none',
  },
}));

const VTDatePicker = ({
  title,
  selected,
  onChange,
  startDate,
  endDate,
  minDate,
}: ReactDatePickerProps) => {
  const classes = useStyles();

  const CustomInput = selected ? (
    <div>
      <Typography fontWeight={700} fontSize={16} color="#5C5B5B">
        {title}
      </Typography>
      <Typography height={'1.4375em'} fontSize={14} fontWeight={600}>
        {moment(selected).format('MM / DD / YYYY')}
      </Typography>
    </div>
  ) : (
    <></>
  );

  return (
    <DatePicker
      className={classes.Root}
      customInput={CustomInput}
      onChange={onChange}
      selectsStart
      startDate={startDate}
      endDate={endDate}
      minDate={minDate}
    />
  );
};

export default VTDatePicker;
