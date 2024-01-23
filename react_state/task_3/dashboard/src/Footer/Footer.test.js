import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext'; // Asegúrate de que la ruta de importación sea correcta

describe('Footer Component Tests', () => {
  const contextValueLoggedOut = {
    user: {
      isLoggedIn: false
    }
  };

  const contextValueLoggedIn = {
    user: {
      isLoggedIn: true
    }
  };

  it('should render without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={contextValueLoggedOut}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the text "Copyright"', () => {
    const wrapper = mount(
      <AppContext.Provider value={contextValueLoggedOut}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).toContain('Copyright');
  });

  it('should not display the link when the user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={contextValueLoggedOut}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
  });

  it('should display the link when the user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={contextValueLoggedIn}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(1);
  });
});
