import React from 'react';
import withSnackBar from './withSnackBar';
import ReactSnackBarContext from './context';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function SnackbarProvider(props) {
    const [snackbar, setSnackbar] = React.useState({ open: false });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({ ...snackbar, open: false });
    };

    function _setMessage(message, severity, autoHideDuration) {
        if (autoHideDuration === undefined) {
            autoHideDuration = 5000;
        }
        setSnackbar({
            open: true,
            message: message,
            severity: severity,
            autoHideDuration: autoHideDuration
        })
    }
    function _error(messageKey, autoHideDuration) {
        _setMessage(messageKey, "error", autoHideDuration);
    }

    function _warning(messageKey, autoHideDuration) {
        _setMessage(messageKey, "warning", autoHideDuration);
    }

    function _success(messageKey, autoHideDuration) {
        _setMessage(messageKey, "success", autoHideDuration);
    }

    function _info(messageKey, autoHideDuration) {
        _setMessage(messageKey, "info", autoHideDuration);
    }

    return <ReactSnackBarContext.Provider value={{
        snackbar: {
            error: _error.bind(this),
            warning: _warning.bind(this),
            success: _success.bind(this),
            info: _info.bind(this),
        }
    }}>
        <Snackbar
            open={snackbar.open}
            autoHideDuration={snackbar.autoHideDuration}
            onClose={handleClose}
        >
            <Alert
                onClose={snackbar.autoHideDuration === null ? handleClose : undefined}
                severity={snackbar.severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {snackbar.message}
            </Alert>
        </Snackbar>
        {props.children}
    </ReactSnackBarContext.Provider>;
}

export { SnackbarProvider, withSnackBar };
