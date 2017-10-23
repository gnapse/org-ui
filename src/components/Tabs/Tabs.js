import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MuiTabs, { Tab as MuiTab } from 'material-ui/Tabs';
import MuiAppBar from 'material-ui/AppBar';
import './styles.css';

const DEFAULT_APPBAR_PROPS = {
  position: 'static',
  color: 'primary',
};

export default class Tabs extends Component {
  static propTypes = {
    initialTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    appBar: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  static defaultProps = {
    appBar: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.initialTab || props.children[0].props.value || 0,
    };
  }

  onChange = (_, activeTab) => {
    this.setState({ activeTab });
  };

  renderTab = ({ props: { value, label, icon } }, index) => {
    const iconElement =
      typeof icon === 'string' ? (
        <i className="material-icons">{icon}</i>
      ) : (
        icon
      );
    return (
      <MuiTab
        key={value || label}
        value={value || index}
        label={label}
        icon={iconElement}
      />
    );
  };

  renderContent = (tab, index) => {
    const { props: { value, label } } = tab;
    const className = classNames('TabContent', {
      'TabContent--active': (value || index) === this.state.activeTab,
    });
    return (
      <div key={value || label} className={className}>
        {tab}
      </div>
    );
  };

  render() {
    const {
      initialTab, // eslint-disable-line no-unused-vars
      children: tabs,
      appBar,
      ...props
    } = this.props;

    let tabButtons = (
      <MuiTabs value={this.state.activeTab} onChange={this.onChange} {...props}>
        {tabs.map(this.renderTab)}
      </MuiTabs>
    );

    if (appBar) {
      const appBarProps =
        typeof appBar === 'object' ? appBar : DEFAULT_APPBAR_PROPS;
      tabButtons = <MuiAppBar {...appBarProps}>{tabButtons}</MuiAppBar>;
    }

    return (
      <div className="Tabs">
        {tabButtons}
        {tabs.map(this.renderContent)}
      </div>
    );
  }
}
