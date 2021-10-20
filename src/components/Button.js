/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { value, classes } = this.props;
    // const strClasses = classes.join(' ');
    return (
      <button type="button" className={classes}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};
