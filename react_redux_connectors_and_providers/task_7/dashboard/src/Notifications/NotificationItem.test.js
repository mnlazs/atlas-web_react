import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';


describe('<NotificationItem />', () => {
  let wrapper;
  const handleDisplayDrawerSpy = jest.fn();
  const handleHideDrawerSpy = jest.fn();

  beforeEach(() => {
    // Suprime la inyección de estilos antes de cada prueba
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(
      <Notifications 
        handleDisplayDrawer={handleDisplayDrawerSpy} 
        handleHideDrawer={handleHideDrawerSpy}
      />
    );
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.clearAllMocks();
  });

  it('calls markAsRead with the right ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    const notificationId = 1; // Ejemplo de ID de notificación
    const wrapper = shallow(<NotificationItem id={notificationId} markAsRead={markAsReadSpy} />);

    wrapper.simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(notificationId);
  });

  it('applies default style for default type notifications', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.find('li').hasClass('default-style')).toBe(true); 
  });

  it('applies urgent style for urgent type notifications', () => {
    const wrapper = shallow(<NotificationItem type="urgent" />);
    expect(wrapper.find('li').hasClass('urgent-style')).toBe(true); 
  });
});
