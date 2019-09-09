import React, { useEffect, useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useDebounce } from '~utils/use-effect';

const Input = ({ name, checkError, isRequired, getInputValue, useSubmit }) => {
  const [getValue, setValue] = useState('');
  const useDebounceValue = useDebounce(getValue, 300);
  const [error, setError] = useState(false);
  const [init, setInit] = useState(true);
  const isError = checkError(getValue);
  useEffect(() => {
    if (isRequired && getValue === '') {
      setError('必填');
    } else {
      setError(isError);
    }
    if (!init && (!isError || isRequired)) {
      getInputValue(getValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useDebounceValue, init]);
  useEffect(() => {
    if (useSubmit) {
      setInit(false);
      if (isRequired && getValue === '') {
        setError('必填');
      } else {
        setError(isError);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useSubmit]);
  const onChange = e => {
    if (init) setInit(false);
    setValue(e.target.value);
  };
  const onBlur = () => {
    if (init) {
      setInit(false);
    }
  };
  return (
    <label htmlFor={name}>
      {isRequired && '*'}
      <input
        id={name}
        placeholder={name}
        value={getValue}
        onBlur={onBlur}
        onChange={e => onChange(e)}
      />
      {error && !init && error}
    </label>
  );
};

Input.defaultProps = {
  isRequired: false,
  getInputValue: () => {},
  useSubmit: false
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  checkError: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  getInputValue: PropTypes.func,
  useSubmit: PropTypes.bool
};

export default Input;
