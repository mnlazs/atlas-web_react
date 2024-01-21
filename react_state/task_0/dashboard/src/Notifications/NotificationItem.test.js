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
  
  it('llama a handleDisplayDrawer cuando se hace clic en el ítem del menú', () => {
    wrapper.find('MenuItem').simulate('click');
    expect(handleDisplayDrawerSpy).toHaveBeenCalled();
  });

  it('llama a handleHideDrawer cuando se hace clic en el botón de cierre', () => {
    // Forzando al componente a renderizarse con displayDrawer como true
    wrapper.setProps({ displayDrawer: true });
    wrapper.find('CloseButton').simulate('click');
    expect(handleHideDrawerSpy).toHaveBeenCalled();
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
    expect(wrapper.find('li').hasClass('default_1g3h0')).toBe(true); // Reemplaza 'default_1g3h0' con la clase generada real
  });

  it('applies urgent style for urgent type notifications', () => {
    const wrapper = shallow(<NotificationItem type="urgent" />);
    expect(wrapper.find('li').hasClass('urgent_1g3h0')).toBe(true); // Reemplaza 'urgent_1g3h0' con la clase generada real
  });
});
