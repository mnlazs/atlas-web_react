import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login Component Test', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Login />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  // ... Tus pruebas existentes

  it('submit button should be disabled by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBeTruthy();
  });

  it('button should be enabled after changing the value of the two inputs', () => {
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    emailInput.simulate('change', { target: { value: 'user@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password' } });

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBeFalsy();
  });
});
