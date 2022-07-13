import { useState } from 'react';
import { Box, Tab, Tabs, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TabBooking from './TabBooking';
import { Hotel, FlightTakeoff, DirectionsCar } from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    margin: '0 auto',
    padding: '0 20px',
    marginTop: -95,
    maxWidth: 1300,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',
  },

  BookingContainer: {
    padding: '24px 70px',
    background: '#FFFFFF',
    height: 190,
    borderRadius: 24,
  },

  TabItem: {
    '& .MuiTypography-root': {
      display: 'flex',
      gap: 10,
      textTransform: 'none',
      fontWeight: 600,
      fontSize: 14,

      '& span': {
        justifyContent: 'center',
        alignItems: 'center',
      },

      '& .MuiSvgIcon-root': {
        fontSize: 30,
      },
    },
  },
}));

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const Booking = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.Root}>
      <Box className={classes.BookingContainer}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              className={classes.TabItem}
              label={
                <Typography color='#706868'>
                  <Hotel />
                  <Typography fontSize={14} component='span'>
                    Hotel
                  </Typography>
                </Typography>
              }
            />
            <Tab
              className={classes.TabItem}
              label={
                <Typography color='#706868'>
                  <FlightTakeoff />
                  <Typography component='span'>Flight</Typography>
                </Typography>
              }
            />
            <Tab
              className={classes.TabItem}
              label={
                <Typography color='#706868'>
                  <DirectionsCar />
                  <Typography component='span'>Car Rental</Typography>
                </Typography>
              }
            />
          </Tabs>
        </Box>
        <TabBooking value={value} index={0} />
        <TabBooking value={value} index={1} />
        <TabBooking value={value} index={2} />
      </Box>
    </Box>
  );
};

export default Booking;
