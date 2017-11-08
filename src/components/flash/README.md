# Flash messages + Redux

This module provides a redux setup (actions + reducer) to manage the state of showing an brief
floating acknowledgement message to the user, after some even has ocurred. Internally this uses the
material-ui [Snackbar component](https://material-ui-next.com/demos/snackbars/).

## Setup redux

Import the flash reducer and combine it into your app global reducer:

```javascript
import { combineReducers } from 'redux';
import { Flash } from 'org-ui';

export default combineReducers({
  [Flash.key]: Flash.reducer,
  // ... any other reducers
});
```

## Render the flash messages placeholder component

Render the placeholder for flash messages to appear within your app layout. The actual location does
not matter much, since flash messages appear floating over your UI. It can be before or after the
rest of your app layout jsx. It can usually go alongside the `Modal`'s module component.

```javascript
import { Flash, Modal } from 'org-ui';

const App = () => (
  <div className="App">
    {/* Whatever else you need to render in here */}
    <Flash.Component>
    <Modal.Component>
  </div>
)
```

## Dispatch actions to show flash messages from your components

```javascript
import { connect } from 'react-redux';
import { Flash } from 'org-ui';
import LoginPage from './MyFancyPage';

const { flash } = Flash.actions;

const mapDispatchToProps = dispatch => ({
  onSignInSuccess() {
    // showModal receives the flash message string, and any extra props to pass
    // to material-ui's Snackbar component (this second argument is optional).
    return dispatch(flash('You signed in successfully', { autoHideDuration: 3000 }));
  },
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
```

The flash message will auto hide after the configured amount of time given in milliseconds (with a
sane default of about 5 seconds, so you don't need to provide it all the time).

## Usage after confirm

The flash message module is usually used alongside confirmation dialogs, to inform the user that the
action they confirmed to perform was carried out successfully. Check the
['Modal'](https://github.com/ProjectVegas/org-ui/tree/master/src/components/modal) module README for
an example of how to use it this way.
