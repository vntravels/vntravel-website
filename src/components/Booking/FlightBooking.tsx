import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { LocationOnOutlined } from '@mui/icons-material';

import 'react-datepicker/dist/react-datepicker.css';

import { VTAutocomplete, VTDatePicker } from '@/components/Form';
import { useBookingStyles } from '@/styles/components/booking';

type TabPanelProps = {};

const FlightBooking = ({}: TabPanelProps) => {
  const classes = useBookingStyles();

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <Grid className={classes.Root} container>
      <Grid item xs={12} md={5.5}>
        <Grid className={classes.GridContainer} container>
          <Grid item xs={12} sm={5.5}>
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
          <Grid item xs={12} sm={5.5}>
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

      <Grid item xs={12} md={6}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} sm={5.5}>
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
          <Grid item xs={12} sm={5.5}>
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
