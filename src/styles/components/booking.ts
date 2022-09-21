import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useBookingStyles = makeStyles((theme: Theme) => ({
  Root: {
    alignItems: 'flex-end',
    margin: 0,
    paddingTop: theme.spacing(2),
  },

  GridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: 24,
    },
  },

  IconTransfer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      margin: '8px 0',
      transform: 'rotate(-0.25turn)',
    },
  },
}));
