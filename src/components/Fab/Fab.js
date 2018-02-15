import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = {
  fab: {
    position: 'fixed',
    bottom: 36,
    right: 36,
    color: 'white',
    zIndex: 1000,
  },
};

class Fab extends Component {
  static propTypes = {
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    const { classes, onClick, icon } = this.props;
    const isLink = typeof onClick !== 'function';
    const buttonProps = isLink ? { component: Link, to: onClick } : { onClick };
    return (
      <Button
        variant="fab"
        color="secondary"
        className={classes.fab}
        {...buttonProps}
      >
        <i className="material-icons">{icon}</i>
      </Button>
    );
  }
}

export default withStyles(styles)(Fab);
