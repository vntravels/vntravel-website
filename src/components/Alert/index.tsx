import React from 'react';
import { Alert, Collapse } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppDispatch, useAppSelector } from '@/common/redux/hooks';
import {
  selectAlertState,
  setAlertState,
} from '@/common/redux/alert/alert.slice';

const useStyles = makeStyles(() => ({
  Alert: {
    position: 'absolute',
    right: 0,
  },
}));

const VTAlert = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const alertState = useAppSelector(selectAlertState);

  return (
    <Collapse
      className={classes.Alert}
      in={alertState.open}
      timeout={1000}
      addEndListener={() =>
        setTimeout(() => {
          dispatch(
            setAlertState({
              open: false,
              message: alertState.message,
              severity: alertState.severity,
            }),
          );
        }, 4000)
      }
    >
      <Alert
        severity={alertState.severity}
        onClose={() => {
          dispatch(
            setAlertState({
              open: false,
              message: alertState.message,
              severity: alertState.severity,
            }),
          );
        }}
      >
        {alertState.message}
      </Alert>
    </Collapse>
  );
};

export default VTAlert;
