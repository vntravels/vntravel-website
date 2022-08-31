import React, { useState } from 'react';
import { Grid, Theme } from '@mui/material';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import { LocationOnOutlined } from '@mui/icons-material';

import VTAutocomplete from '../Form/Autocomplete';
import VTDatePicker from '../Form/DatePicker';

import 'react-datepicker/dist/react-datepicker.css';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    alignItems: 'flex-end',
    margin: 0,
    paddingTop: theme.spacing(2),
  },

  IconTransfer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

interface TabPanelProps {}

const FlightBooking = ({}: TabPanelProps) => {
  const classes = useStyles();

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <Grid className={classes.Root} container>
      <Grid item xs={5.5}>
        <Grid container>
          <Grid item xs={5.5}>
            <VTAutocomplete
              IconComponent={<LocationOnOutlined />}
              title="Leaving From"
              placeholder="Where are you from?"
              data={top100Films}
              type="search"
            />
          </Grid>
          <Grid className={classes.IconTransfer} item xs={1}>
            <Image
              width={20}
              height={20}
              src="/icons/iconTransfer.svg"
              alt="iconTransfer"
            />
          </Grid>
          <Grid item xs={5.5}>
            <VTAutocomplete
              IconComponent={<LocationOnOutlined />}
              title="Going To"
              placeholder="Going To?"
              data={top100Films}
              type="search"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={0.5} />

      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={5.5}>
            <VTDatePicker
              title="Check in"
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </Grid>
          <Grid className={classes.IconTransfer} item xs={1}>
            <Image
              width={20}
              height={20}
              src="/icons/iconTransfer.svg"
              alt="iconTransfer"
            />
          </Grid>
          <Grid item xs={5.5}>
            <VTDatePicker
              title="Check out"
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
];

export default FlightBooking;
