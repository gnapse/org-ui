import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import './styles.css';

const styles = {
  card: {
    marginBottom: 20,
  },
  cardContent: {
    padding: 30,
  },
};

class MaterialCard extends Component {
  static propTypes = {
    header: PropTypes.string,
    subheader: PropTypes.string,
  };

  render() {
    const { children, header, subheader, classes } = this.props;
    const cardHeader = header && <div className="Card__header">{header}</div>;
    const cardSubHeader = subheader && (
      <div className="Card__subheader">{subheader}</div>
    );

    return (
      <Card className={classes.card}>
        {cardHeader}
        {cardSubHeader}
        <CardContent className={classes.cardContent}>{children}</CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(MaterialCard);
