import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import './styles.css';

export default class IconMenu extends Component {
  static propTypes = {
    icon: PropTypes.string,
    keepOnItemClick: PropTypes.bool,
    buttonProps: PropTypes.object,
  };

  static defaultProps = {
    icon: 'more_vert',
    keepOnItemClick: false,
    buttonProps: {},
  };

  state = {
    anchorEl: undefined,
    open: false,
  };

  onButtonClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { children, keepOnItemClick, icon } = this.props;
    const buttonProps = {
      ...this.props.buttonProps,
      onClick: this.onButtonClick,
    };
    const menuProps = {
      ...this.state,
      onRequestClose: this.onClose,
      onClick: keepOnItemClick ? null : this.onClose,
    };

    return (
      <div className="IconMenu">
        <IconButton {...buttonProps}>
          <i className="material-icons">{icon}</i>
        </IconButton>
        <Menu className="IconMenu__menu" {...menuProps}>
          {children}
        </Menu>
      </div>
    );
  }
}
