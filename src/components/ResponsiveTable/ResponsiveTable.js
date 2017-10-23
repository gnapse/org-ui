import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const GHOST_DATA = Array(5).fill(null);

export default class ResponsiveTable extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array,
    stickyHeader: PropTypes.bool,
    noPaper: PropTypes.bool,
  };

  static defaultProps = {
    stickyHeader: false,
  };

  getCellContent = (row, column) => {
    if (!row) {
      return <div>&nbsp;</div>;
    }
    return column.render ? column.render(row) : row[column.key];
  };

  renderHeader = ({ header, key }) => <th key={key}>{header}</th>;

  renderRow = (row, index) => (
    <tr key={row ? row.id : index}>
      {this.props.columns.map(this.renderCell(row))}
    </tr>
  );

  renderCell = row => column => {
    const content = this.getCellContent(row, column);
    const showResponsiveHeader =
      !column.hideResponsiveHeader && !!column.header;
    const dataHeader = showResponsiveHeader
      ? { 'data-header': column.header }
      : {};
    const className = column.className ? { className: column.className } : {};
    return (
      <td key={column.key} {...dataHeader} {...className}>
        {content}
      </td>
    );
  };

  render() {
    const { columns, data, stickyHeader, noPaper } = this.props;
    const className = classNames('ResponsiveTable', {
      'ResponsiveTable--sticky': stickyHeader,
      'ResponsiveTable--loading': !data,
      'ResponsiveTable--no-paper': noPaper,
    });
    return (
      <table className={className}>
        <thead>
          <tr>{columns.map(this.renderHeader)}</tr>
        </thead>
        <tbody>{(data || GHOST_DATA).map(this.renderRow)}</tbody>
      </table>
    );
  }
}
