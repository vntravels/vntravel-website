import React from 'react';
import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

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

  BoxOptions: {
    borderRadius: 16,
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
}));

type VTAutocompleteProps = {
  title: string;
  placeholder?: string;
  type: string;
  data: any[];
  IconComponent?: React.ReactNode;
};

const VTAutocomplete = ({
  IconComponent,
  title,
  placeholder,
  type,
  data,
}: VTAutocompleteProps) => {
  const classes = useStyles();

  return (
    <Autocomplete
      className={classes.Autocomplete}
      freeSolo
      disableClearable
      options={data}
      // ListboxComponent={() => (
      //   <div className={classes.BoxOptions}>
      //     <List
      //       sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      //       component="nav"
      //     >
      //       {data.map((e, index) => (
      //         <ListItemButton key={index}>
      //           <ListItemText primary={e.title} />
      //         </ListItemButton>
      //       ))}
      //     </List>
      //   </div>
      // )}
      renderOption={(params: object, option: any) => (
        <Box className={classes.BoxOptions} {...params}>
          <Box sx={{ marginRight: 2 }}>{IconComponent}</Box>
          {option.title}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          className={classes.TextInput}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">{title}</InputAdornment>
            ),
            placeholder,
            type,
          }}
        />
      )}
    />
  );
};

export default VTAutocomplete;
