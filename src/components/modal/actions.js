import ConfirmationDialog from './ConfirmationDialog';
import AlertDialog from './AlertDialog';
import {
  CREATE_MODAL,
  SHOW_MODAL,
  HIDE_MODAL,
  DESTROY_MODAL,
} from './actionTypes';

export const showModal = (component, props) => dispatch => {
  dispatch({ type: CREATE_MODAL, component, props });
  setTimeout(() => {
    dispatch({ type: SHOW_MODAL });
  }, 500);
};

export const hideModal = () => dispatch => {
  dispatch({ type: HIDE_MODAL });
  setTimeout(() => {
    dispatch({ type: DESTROY_MODAL });
  }, 500);
};

export const confirm = (
  { component = ConfirmationDialog, ...props } = {}
) => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(
      showModal(component, {
        ...props,
        confirm: (...args) => {
          dispatch(hideModal());
          resolve(...args);
        },
        cancel: () => {
          dispatch(hideModal());
          reject();
        },
      })
    );
  });

export const alert = (
  message,
  { component = AlertDialog, ...props } = {}
) => dispatch =>
  new Promise(resolve => {
    dispatch(
      showModal(component, {
        message,
        ...props,
        close: () => {
          dispatch(hideModal());
          resolve();
        },
      })
    );
  });
