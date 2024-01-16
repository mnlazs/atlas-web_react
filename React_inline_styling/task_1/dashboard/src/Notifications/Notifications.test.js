import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';


describe('<Notifications />', () => {
  beforeEach (() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  it('does not rerender when the list of notifications has not changed in length', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications });
    expect(shouldUpdate).toBeFalsy();
  });

  it('does rerender when the list of notifications increases in length', () => {
    const initialListNotifications = [
      { id: 1, type: 'default', value: 'New course available' }
    ];
    const newListNotifications = [
      ...initialListNotifications,
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    const wrapper = shallow(<Notifications listNotifications={initialListNotifications} />);
    
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: newListNotifications });
    expect(shouldUpdate).toBeTruthy();
  });
});
