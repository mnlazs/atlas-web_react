import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';


describe('<NotificationItem />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppress
    StyleInjection()
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    
    
  it('calls markAsRead with the right ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    const notificationId = 1; // Ejemplo de ID de notificación
    const wrapper = shallow(<NotificationItem id={notificationId} markAsRead={markAsReadSpy} />);

    wrapper.simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(notificationId);
  });
});
