import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
// import styles from './styles.css';

const Loading = ({ error, errorCallBack }) =>
  error ? (
    <div>
      <button type="button" onClick={errorCallBack}>
        {error}
      </button>
    </div>
  ) : (
    '初始化...'
  );

Loading.defaultProps = {
  error: false,
  errorCallBack: () => {},
};

Loading.propTypes = {
  error: PropTypes.bool,
  errorCallBack: PropTypes.func,
};

export default Loading;
