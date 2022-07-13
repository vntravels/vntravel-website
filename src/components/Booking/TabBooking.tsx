import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Grid,
  InputAdornment,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DatePicker } from '@mui/x-date-pickers';

const useStyles = makeStyles((theme: Theme) => ({
  Autocomplete: {
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
      },
    },
  },

  TextInput: {
    background: '#F7F7F7',

    '& .MuiInputAdornment-root': {
      height: 'auto',
    },

    '& .MuiTypography-root': {
      fontWeight: 700,
      fontSize: 16,
      color: '#5C5B5B',
    },
  },

  DateInput: {
    '& .MuiOutlinedInput-root': {
      border: 0,
      padding: '12px 17px',
      borderRadius: 10,
    },

    '& .MuiOutlinedInput-input .MuiInputAdornment-positionEnd': {
      display: 'flex',
      width: '100%',
      padding: 0,
      fontWeight: 600,
      fontSize: 14,
    },
  },

  DateInputContent: {
    border: 'none',
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabBooking = (props: TabPanelProps) => {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  const [valueDate, setValueDate] = useState<Date | null>(null);

  return (
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ paddingTop: '26px' }}>
          {index == 0 && <></>}
          {index == 1 && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Autocomplete
                      className={classes.Autocomplete}
                      freeSolo
                      disableClearable
                      options={top100Films.map((option: any) => option.title)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={classes.TextInput}
                          InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                              <InputAdornment position="start">
                                Leaving From
                              </InputAdornment>
                            ),
                            placeholder: 'Where are you from?',
                            type: 'search',
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      className={classes.Autocomplete}
                      freeSolo
                      disableClearable
                      options={top100Films.map((option: any) => option.title)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={classes.TextInput}
                          InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                              <InputAdornment position="start">
                                Going To
                              </InputAdornment>
                            ),
                            placeholder: 'Going To?',
                            type: 'search',
                          }}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <DatePicker
                      value={valueDate}
                      onChange={(newValue) => {
                        setValueDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={`${classes.DateInput}`}
                          InputProps={{
                            ...params.InputProps,
                            startAdornment: <Typography>Going To</Typography>,
                            placeholder: 'Going To?',
                            type: 'search',
                          }}
                        />
                      )}
                      // renderInput={({ inputRef, inputProps, InputProps }) => (
                      //   <Box className={classes.DateInput}>
                      //     <Typography>Hello</Typography>
                      //     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      //       <TextField
                      //         className={classes.DateInputContent}
                      //         ref={inputRef}
                      //         placeholder="dd/mm/yyyy"
                      //         type="date"
                      //         {...inputProps}
                      //       />
                      //       {InputProps?.endAdornment}
                      //     </Box>
                      //   </Box>
                      // )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DatePicker
                      value={valueDate}
                      onChange={(newValue) => {
                        setValueDate(newValue);
                      }}
                      // renderInput={(params) => (
                      //   <TextField
                      //     {...params}
                      //     className={`${classes.Autocomplete} ${classes.DateInput}`}
                      //     InputProps={{
                      //       ...params.InputProps,
                      //       startAdornment: (
                      //         <Typography>
                      //           Going To
                      //         </Typography>
                      //       ),
                      //       placeholder: 'Going To?',
                      //       type: 'search',
                      //     }}
                      //   />
                      // )}
                      renderInput={({ inputRef, inputProps, InputProps }) => (
                        <Box sx={{ display: 'block', alignItems: 'center' }}>
                          <Typography>Hello</Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <input
                              className={`${classes.Autocomplete} ${classes.DateInput}`}
                              ref={inputRef}
                              placeholder="dd/mm/yyyy"
                              {...inputProps}
                            />
                            {InputProps?.endAdornment}
                          </Box>
                        </Box>
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </div>
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
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
];

export default TabBooking;
