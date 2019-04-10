import React, { PureComponent } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

class NoMatch extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      time: 3
    };
    this.timeout = null;
    this.renderTimeout = null;

    const { history } = this.props;
    for (let i = 1; i < 4; i += 1) {
      this.renderTimeout = setTimeout(() => {
        const { time } = this.state;
        this.setState({ time: time - 1 });
      }, i * 1000);
    }
    this.timeout = setTimeout(() => {
      history.replace('/');
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.renderTimeout);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        {'404'}
        <br />
        {`${time}s later will go back`}
      </div>
    );
  }
}

export default NoMatch;
