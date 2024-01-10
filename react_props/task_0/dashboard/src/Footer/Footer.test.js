import React from 'react';
import { shallow } from 'enzyme'; // Si estás usando Enzyme
import Footer from './Footer'; // Asegúrate de que la ruta al componente es correcta

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
