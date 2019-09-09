import React, { useState, useContext, useEffect } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import Input from './input';
import { formContext } from './contexts';

export const FormInput = props => {
  const { name, checkError } = props;
  const getContext = useContext(formContext);
  const onChange = value => {
    getContext.valueToContext({ [name]: value });
    getContext.validateToContext({ [name]: checkError(value) });
  };
  useEffect(() => {});
  return <Input {...props} getInputValue={onChange} useSubmit={getContext.useSubmit} />;
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  checkError: PropTypes.func.isRequired
};

const Form = ({ children, onSubmit }) => {
  const [formValue, setFormContext] = useState({
    valueList: {},
    valueToContext: name =>
      setFormContext(s => ({
        ...s,
        valueList: { ...s.valueList, ...name }
      })),
    validateList: [],
    validateToContext: list =>
      setFormContext(s => ({
        ...s,
        validateList: { ...s.validateList, ...list }
      })),
    useSubmit: false
  });
  const formSubmit = e => {
    const { valueList, validateList } = formValue;
    setFormContext(v => ({ ...v, useSubmit: true }));
    onSubmit(valueList, validateList);
    return e.preventDefault();
  };
  return (
    <form onSubmit={formSubmit}>
      <formContext.Provider value={formValue}>{children}</formContext.Provider>
    </form>
  );
};

Form.defaultProps = {
  onSubmit: () => {}
};

Form.propTypes = {
  children: PropTypes.element.isRequired,
  onSubmit: PropTypes.func
};

export default Form;
