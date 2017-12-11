import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MenuItem as Item } from 'material-ui/Menu';
import './styles.css';

export default class MenuItem extends Component {
  static propTypes = {
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    separator: PropTypes.bool,
  };

  renderIcon() {
    const { icon } = this.props;
    if (icon == null) {
      return null;
    }
    if (typeof icon === 'string') {
      return <i className="material-icons">{icon}</i>;
    }
    return icon;
  }

  render() {
    const { href, icon, label, separator, ...other } = this.props;
    const component = href ? Link : null;
    const classes = separator ? 'MenuItem__separator' : 'MenuItem';
    return (
      <Item
        className={classes}
        component={component}
        to={href || null}
        {...other}
      >
        {this.renderIcon()}
        {label}
      </Item>
    );
  }
}
