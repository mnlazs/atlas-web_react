import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

describe('App Component Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain the Notifications component', () => {
    expect(wrapper.containsMatchingElement(<Notifications />)).toBeTruthy();
  });

  it('should contain the Header component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it('should contain the Login component', () => {
    expect(wrapper.containsMatchingElement(<Login />)).toBeTruthy();
  });

  it('should contain the Footer component', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toBeTruthy();
  });
});
