# Modals + Confirmation + Alert + Redux

This module provides a redux setup (actions + reducer) to manage the state of showing modal
components and the dispatch the necessary actions. It also provides a couple of special built-in
modals to ask the user for a yes-or-no/ok-cancel kind of confirmation, or to show the user an
important modal alert.

## Setup redux

Import the modals reducer and combine it into your app global reducer:

```javascript
import { combineReducers } from 'redux';
import { Modal } from 'org-ui';

export default combineReducers({
  [Modal.key]: Modal.reducer,
  // ... any other reducers
});
```

## Render the modal placeholder component

Render the placeholder for modals to appear within your app layout. The actual location does not
matter much, since modals appear floating over your UI. It can be before or after the rest of your
app layout jsx.

```javascript
import { Modal } from 'org-ui';

const App = () => (
  <div className="App">
    {/* Whatever else you need to render in here */}
    <Modal.Component>
  </div>
)
```

## Dispatch actions to show modals from your components

```javascript
import { connect } from 'react-redux';
import { Modal } from 'org-ui';
import MyFancyPage from './MyFancyPage';
import MyFancyModal from './MyFancyModal';

const { showModal } = Modal.actions;

const mapDispatchToProps = dispatch => ({
  showFancyModal({ id }) {
    // showModal receives the modal component to show,
    // and whatever props should be passed to it
    return dispatch(showModal(MyFancyModal, { itemId: id }));
  },
});

export default connect(undefined, mapDispatchToProps)(MyFancyPage);
```

The modal component will receive these props in relation to this module:

- `hide: PropTypes.func.isRequired`: a callback that, when invoked, will dismiss
  the modal off the screen. It is your responsibility to call this callback from
  within your modal accordingly.
- `open: PropTypes.bool.isRequired`: a boolean that indicates wether the modal
  is considered to be open, and therefore being showed on the screen. For
  instance, you could use id to pass id on to the material-ui `Dialog` component
  to indicate that is open or not.

## Confirm and alert modals

This module offers two special types of modals, one to allow the user to confirm or cancel an
action, and another to show the user important alerts.

```javascript
import { connect } from 'react-redux';
import { Modal, Flash } from 'org-ui';

const mapDispatchToProps = dispatch => ({
  alert: (...args) => dispatch(Modal.actions.alert(...args)),
  confirm: (...args) => dispatch(Modal.actions.confirm(...args)),
  flash: (...args) => dispatch(Flash.actions.flash(...args)),
  // Any other actions you need to pass to your component
});

// Then in your component you have access to the `alert` and `confirm` callbacks in the props, with
// which you can fire up confirmation dialogs and alerts:

class MyFancyPage extends React.Component {
  // ...

  onDelete = () => {
    const { performDelete, confirm, alert, flash } = this.props;
    confirm({
      destructive: true,
      title: 'Confirm action',
      message: 'Are you sure you want to delete this item?',
      okButtonLabel: 'Yes, delete it',
      cancelButtonLabel: "No, please, don't do it",
    }).then(() =>
      performDelete().then(
        () => flash('The item was deleted successfully!'),
        () => alert('An error occured while trying to delete this item. Please try again.'),
      )
    );
  };

  // ...
}

export default connect(undefined, mapDispatchToProps)(MyFancyPage);
```

In the above example you can see how you can pass in the confirm action some props to customize the
`ConfirmationDialog` component. Most of these props are optional and sane defaults will be provided.

Also note how the `confirm` action returns a promise, that resolves only if the user confirmed the
action. This allows you to provide the code to perform the confirmed action in the promise `.then`
callback.
