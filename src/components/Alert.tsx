import React from 'react';
import { Alert, Collapse } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppSelector } from 'src/common/redux/hooks';
import { selectAlertState } from 'src/common/redux/alert/alert.slice';

const useStyles = makeStyles(() => ({
  Alert: {
    position: 'absolute',
    right: 0,
  },
}));

const VTAlert = () => {
  const classes = useStyles();
  const alertState = useAppSelector(selectAlertState);
  const [open, setOpen] = React.useState<boolean>(alertState.open);

  React.useEffect(() => {
    setOpen(alertState.open);
  }, [alertState.open]);

  return (
    <Collapse
      className={classes.Alert}
      in={open}
      timeout={1000}
      addEndListener={() =>
        setTimeout(() => {
          setOpen(false);
        }, 4000)
      }
    >
      <Alert
        severity={alertState.severity}
        onClose={() => {
          setOpen(false);
        }}
      >
        {alertState.message}
      </Alert>
    </Collapse>
  );
};

export default VTAlert;
