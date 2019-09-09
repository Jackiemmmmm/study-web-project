import React from 'react';
import Form, { FormInput } from './form';

const Login = () => {
  const checkCallbackValue = (type, value) => {
    let returnValue = false;
    switch (type) {
      case 'username':
        if (value !== 'test') {
          returnValue = '请输入正确的内容';
        }
        break;
      case 'other':
        break;
      default:
        break;
    }
    return returnValue;
  };
  const onSubmit = (list, valid) => {
    console.log(list, valid);
  };
  return (
    <div>
      <p>Login</p>
      <Form onSubmit={onSubmit}>
        <>
          <FormInput
            name="username"
            checkError={e => checkCallbackValue('username', e)}
            isRequired
          />
          <FormInput name="pwd" checkError={e => checkCallbackValue('pwd', e)} isRequired />
          <FormInput name="other" checkError={e => checkCallbackValue('other', e)} />
          <button type="submit">submit</button>
        </>
      </Form>
      {/* <form>
        <Input name="username" checkError={e => checkCallbackValue('username', e)} isRequired />
        <Input name="other" checkError={e => checkCallbackValue('other', e)} />
        <div>{Object.keys(getForm).map(item => `${item}: ${getForm[item]} \n`)}</div>
        <button type="button">submit</button>
      </form> */}
    </div>
  );
};

export default Login;
