import React, { PureComponent } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import Debounce from './debounce';
import LazyLoad from './lazy-load';

export default class Effect extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const component = {
      debounce: <Debounce />,
      'lazy-load': <LazyLoad />,
    };
    return component[id];
  }
}
