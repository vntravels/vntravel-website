import React from 'react';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    background: '#F7F7F7',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    padding: '12px 17px',
    borderRadius: 10,

    [theme.breakpoints.down('md')]: {
      marginBottom: 8,
      padding: 12,
    },

    [theme.breakpoints.down('md')]: {
      '& .MuiTypography-root': {
        fontSize: 14,
      },
    },

    [theme.breakpoints.down('sm')]: {
      '& .MuiTypography-root': {
        fontSize: 12,
      },
    },
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

type VTDatePickerProps = ReactDatePickerProps & {
  value?: string;
};

const VTDatePicker = ({
  title,
  selected,
  onChange,
  startDate,
  endDate,
  minDate,
  value,
}: VTDatePickerProps) => {
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
      value={value}
    />
  );
};

export default VTDatePicker;
