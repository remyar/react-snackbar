import React, { useState } from 'react';
import withSnackBar from './withSnackBar';
import ReactSnackBarContext from './context';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function SnackbarProvider(props) {
    const [snackbar, setSnackbar] = useState({ open: false });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({ ...snackbar, open: false });
    };

    function _setMessage(message, severity) {
        setSnackbar({
            open: true,
            message: message,
            severity: severity
        })
    }
    function _error(messageKey) {
        _setMessage(messageKey, "error");
    }

    function _warning(messageKey) {
        _setMessage(messageKey, "warning");
    }

    function _success(messageKey) {
        _setMessage(messageKey, "success");
    }

    function _info(messageKey) {
        _setMessage(messageKey, "info");
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
            autoHideDuration={5000}
            onClose={handleClose}
        >
            <Alert
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
