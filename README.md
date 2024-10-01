# react-snackbar
Snackbar provider for react

## Installation
This library was built with React >=18 in mind. It *might* work on lower versions
as well, but the lib is developed for and tested on those versions.
```
npm install @remyar/react-snackbar --save
```

## Usage
The lib exposes the following methods:

### SnackbarProvider
```javascript
import { StoreProvider } from '@remyar/react-snackbar';
...

 root.render(
        <React.Fragment>
            <SnackbarProvider>
                 <App /> --> Your Application
            </SnackbarProvider>
        </React.Fragment>
    );
``` 

### withSnackBar
``` javascript
import { withSnackBar } from '@remyar/react-snackbar';
...

function YourReactComponent(props) {
    
    return <div>
        <MenuItem onClick={() => {
                props.snackbar.error("error text");
            }}>
        </MenuItem>
        <MenuItem onClick={() => {
                props.warning.warning("warning text");
            }}>
        </MenuItem>
        <MenuItem onClick={() => {
                props.warning.success("success text");
            }}>
        </MenuItem>
        <MenuItem onClick={() => {
                props.info.error("info text");
            }}>
        </MenuItem>
        </div>
}

export default withStoreProvider(YourReactComponent);
``` 