import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

// Importa StyleSheetTestUtils de la biblioteca correspondiente
import { StyleSheetTestUtils } from 'aphrodite';

describe('<NotificationItem />', () => {
  beforeEach(() => {
    // Suprime la inyección de estilos antes de cada prueba
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    // Reanuda la inyección de estilos después de cada prueba
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
