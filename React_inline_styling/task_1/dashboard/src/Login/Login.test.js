import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe ('Login Component Test', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Login />);
  });

  afterEach(() => {
    // Reanuda la inyección de estilos después de cada prueba
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  it ('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render 2 input tags and 2 label tags', () => {
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('label').length).toBe(2);
  });
});
