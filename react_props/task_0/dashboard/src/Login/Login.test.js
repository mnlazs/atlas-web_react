import React from 'react';
import Adapter from 'enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import Login from './Login';

describe ('Login Component Test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });


  it ('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render 2 input tags and 2 label tags', () => {
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('label').length).toBe(2);
  });
});
