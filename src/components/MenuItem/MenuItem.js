import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MenuItem as Item } from 'material-ui/Menu';
import './styles.css';

export default class MenuItem extends Component {
  static propTypes = {
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    separator: PropTypes.bool,
  };

  render() {
    const { href, icon, label, separator, ...other } = this.props;
    const renderIcon = icon ? <i className="material-icons">{icon}</i> : null;
    const component = href ? Link : null;
    const classes = separator ? 'MenuItem__separator' : 'MenuItem';

    return (
      <Item
        className={classes}
        component={component}
        to={href || null}
        {...other}
      >
        {renderIcon}
        {label}
      </Item>
    );
  }
}
