import React from 'react';
import  { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Header Component Test',() => {
  let wrapper;

  const contextValue = {
    user: {
      email: '',
      password: '',
      isLoggedIn: false
    },
    logOut: () => {}
  };

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  it('should render without crashing', () => {
    wrapper = mount(<Header />, { context: contextValue });
    expect(wrapper.exists()).toBeTruthy();
});

  it('should render an image and a h1 tag', () => {
    wrapper = mount(<Header />, { context: contextValue });
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('logoutSection should not be created if user is not logged in', () => {
    wrapper = mount(<Header />, { context: contextValue });
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('logoutSection should be created if user is logged in', () => {
    wrapper = mount(<Header />, {
      context: { ...contextValue, user: { ...contextValue.user, isLoggedIn: true, email: 'user@example.com' } }
    });
    expect(wrapper.find('#logoutSection').length).toBe(1);
  });

  it('clicking on the logout link should call the spy', () => {
    const logOutSpy = jest.fn();
    wrapper = mount(<Header />, {
      context: { ...contextValue, logOut: logOutSpy, user: { ...contextValue.user, isLoggedIn: true } }
    });
    wrapper.find('#logoutSection span').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
