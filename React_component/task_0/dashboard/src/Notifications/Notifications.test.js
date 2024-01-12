import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renderiza correctamente con un array vacío o sin listNotifications', () => {
    const wrapperEmpty = shallow(<Notifications listNotifications={[]} />);
    expect(wrapperEmpty.find(NotificationItem).length).toBe(0);

    const wrapperNoProp = shallow(<Notifications />);
    expect(wrapperNoProp.find(NotificationItem).length).toBe(0);
  });

  it('renderiza correctamente con una lista de notificaciones', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(listNotifications.length);
  });

  it('muestra "No new notification for now" cuando listNotifications está vacío', () => {
    const wrapperEmpty = shallow(<Notifications listNotifications={[]} />);
    expect(wrapperEmpty.text()).toContain('No new notification for now');
    expect(wrapperEmpty.text()).not.toContain('Here is the list of notifications');
  });
});
