import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

export default class AlertDialog extends Component {
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string,
    open: PropTypes.bool,
    close: PropTypes.func.isRequired,
  };

  static defaultProps = {
    open: true,
    buttonLabel: 'Ok',
  };

  render() {
    const { open, title, message, close, buttonLabel } = this.props;
    return (
      <Dialog open={open} onRequestClose={close}>
        {title ? <DialogTitle>{title}</DialogTitle> : null}
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            {buttonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
