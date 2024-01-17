import React from 'react';
import  { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Header Component Test',() => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  afterEach(() => {
    // Reanuda la inyección de estilos después de cada prueba
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  it('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
});

  it('should render an image and a h1 tag', () => {
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
