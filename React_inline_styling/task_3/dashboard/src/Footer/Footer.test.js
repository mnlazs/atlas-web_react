import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; 

describe('Footer Component Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render the text "Copyright"', () => {
    expect(wrapper.text()).toContain('Copyright');
  });
});
