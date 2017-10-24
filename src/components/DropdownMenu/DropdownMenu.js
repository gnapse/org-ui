import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';

export default class DropdownMenu extends Component {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    buttonProps: PropTypes.object,
    keepOnItemClick: PropTypes.bool,
  };

  static defaultProps = {
    icon: 'more_vert',
    buttonProps: {},
    keepOnItemClick: false,
  };

  state = {
    anchorEl: undefined,
    open: false,
  };

  constructor(props) {
    super(props);
    this.menuId = 'id' + new Date().getTime();
  }

  onButtonClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  getButtonProps() {
    return {
      'aria-owns': this.menuId,
      'aria-haspopup': 'true',
      ...this.props.buttonProps,
      onClick: this.onButtonClick,
    };
  }

  renderLabelButton() {
    return <Button {...this.getButtonProps()}>{this.props.label}</Button>;
  }

  renderIconButton() {
    return (
      <IconButton {...this.getButtonProps()}>
        <i className="material-icons">{this.props.icon}</i>
      </IconButton>
    );
  }

  render() {
    const { children, label, keepOnItemClick } = this.props;
    const menuProps = {
      id: this.menuId,
      ...this.state,
      onRequestClose: this.onClose,
      onClick: keepOnItemClick ? null : this.onClose,
    };
    return (
      <div>
        {label ? this.renderLabelButton() : this.renderIconButton()}
        <Menu {...menuProps}>{children}</Menu>
      </div>
    );
  }
}
