import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

export default class ConfirmationDialog extends Component {
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    okButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string,
    open: PropTypes.bool,
    destructive: PropTypes.bool,
    confirm: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
  };

  static defaultProps = {
    destructive: false,
    open: true,
    okButtonLabel: 'Ok',
    cancelButtonLabel: 'Cancel',
    message: 'Are you sure?',
  };

  render() {
    const { okButtonLabel, cancelButtonLabel } = this.props;
    const { open, title, message, destructive, confirm, cancel } = this.props;
    return (
      <Dialog open={open} onRequestClose={cancel}>
        {title ? <DialogTitle>{title}</DialogTitle> : null}
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <Button onClick={cancel} color="primary">
            {cancelButtonLabel}
          </Button>
          <Button onClick={confirm} className={destructive ? 'red' : null}>
            {okButtonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
