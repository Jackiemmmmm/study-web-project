import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import ExchangeRatesHooks from './exchange-rates';
import ExchangeRatesComponent from './exchange-rates-use-hooks';
import small from './imgs/small.jpg';
import big from './imgs/big.jpg';
import smallest from './imgs/smallest.png';
import './styles.scss';

@connect(state => ({
  counter: state.counter,
}))
class Votes extends PureComponent {
  static propTypes = {
    counter: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      test: 1,
    };
  }

  render() {
    const { test } = this.state;
    const { counter } = this.props;
    return (
      <div>
        Home123456,
        {test}
        {counter}
        <ExchangeRatesHooks />
        <ExchangeRatesComponent />
        <div>
          <h5>url-loader use image url</h5>
          <img style={{ width: '300px' }} src={small} alt="small" />
          <img style={{ width: '300px' }} src={big} alt="big" />
        </div>
        <div>
          <h6>url-loader use base64</h6>
          <img style={{ width: '100px', height: '100px' }} src={smallest} alt="smallest" />
        </div>
      </div>
    );
  }
}

export default Votes;
