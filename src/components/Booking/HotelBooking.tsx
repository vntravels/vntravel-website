import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { LocationOnOutlined } from '@mui/icons-material';

import 'react-datepicker/dist/react-datepicker.css';

import { VTAutocomplete, VTDatePicker } from '@/components/Form';
import { useBookingStyles } from '@/styles/components/booking';

type ContentSearch = {
  location: string;
  checkin: string;
  checkout: string;
};

type HotelBookingProps = {
  values: ContentSearch;
  setValues: React.Dispatch<React.SetStateAction<any>>;
};

const HotelBooking = ({ values, setValues }: HotelBookingProps) => {
  const classes = useBookingStyles();

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  useEffect(() => {
    setValues({ type: 'hotel', checkin: startDate, checkout: endDate });
  }, [endDate, setValues, startDate]);

  return (
    <Grid className={classes.Root} container>
      <Grid className={classes.GridContainer} item xs={12} md={4}>
        <VTAutocomplete
          IconComponent={<LocationOnOutlined />}
          title="Location"
          placeholder="Where are you from?"
          data={top100Films}
          type="search"
          onChange={(_event: any, value: any) => {
            setValues({ ...values, location: value._id });
          }}
        />
      </Grid>

      <Grid item xs={12} md={1} />

      <Grid item xs={12} md={7}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} sm={5.5}>
            <VTDatePicker
              title="Check in"
              selected={startDate}
              onChange={(date: Date) => {
                setStartDate(date);
                setValues({ ...values, checkin: date });
              }}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              value={values.checkin}
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
              onChange={(date: Date) => {
                setEndDate(date);
                setValues({ ...values, checkout: date });
              }}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              value={values.checkout}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const top100Films = [
  { title: 'Da Nang', _id: 1994 },
  { title: 'Ha Noi', _id: 1972 },
  { title: 'Sai Gon', _id: 1974 },
  { title: 'Khanh Hoa', _id: 2008 },
  { title: 'Quang Ninh', _id: 1957 },
];

export default HotelBooking;
