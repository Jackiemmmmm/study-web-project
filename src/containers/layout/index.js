import React, { PureComponent } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

export default class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;
    return <div style={{ width: '100%', height: '100%' }}>{children}</div>;
  }
}
