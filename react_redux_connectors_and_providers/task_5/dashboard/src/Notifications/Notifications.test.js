import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';
import { fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators', () => ({
  fetchNotifications: jest.fn(),
}));

describe('<Notifications />', () => {
  let wrapper;
  const handleDisplayDrawerSpy = jest.fn();
  const handleHideDrawerSpy = jest.fn();
  const markNotificationAsReadSpy = jest.fn();

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(
      <Notifications 
        handleDisplayDrawer={handleDisplayDrawerSpy} 
        handleHideDrawer={handleHideDrawerSpy}
        markNotificationAsRead={markNotificationAsReadSpy}
      />
    );
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.clearAllMocks();
  });

  it('calls handleDisplayDrawer when menu item is clicked', () => {
    wrapper.find('[testID="menuItem"]').simulate('click'); 
    expect(handleDisplayDrawerSpy).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    wrapper.setProps({ displayDrawer: true });
    wrapper.find('[testID="closeButton"]').simulate('click');
    expect(handleHideDrawerSpy).toHaveBeenCalled();
  });

  it('does not rerender when the list of notifications has not changed in length', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    
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
    
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: newListNotifications });
    expect(shouldUpdate).toBeTruthy();
  });
});
