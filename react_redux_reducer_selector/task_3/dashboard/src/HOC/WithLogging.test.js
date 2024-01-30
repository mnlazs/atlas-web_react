import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  it('logs correctly with HTML element', () => {
    const ConsoleSpy = jest.spyOn(console, 'log');
    const WrappedComponent = WithLogging(() => <p />);

    const wrapper = mount(<WrappedComponent />);
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');

    ConsoleSpy.mockRestore();
  });

  //dos pruebas separadas por bloques 
  it('logs correctly with a React component', () => {
    const ConsoleSpy = jest.spyOn(console, 'log');
    const WrappedLogin = WithLogging(Login);

    const wrapper = mount(<WrappedLogin />);
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');

    ConsoleSpy.mockRestore();
  });
});
