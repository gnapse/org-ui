import ConfirmationDialog from './ConfirmationDialog';
import AlertDialog from './AlertDialog';
import * as actionTypes from './actionTypes';

export const showModal = (component, props) => ({
  type: actionTypes.SHOW_MODAL,
  component,
  props,
});

export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL,
});

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
