import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('muestra el elemento del menú cuando displayDrawer es falso', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('no muestra div.Notifications cuando displayDrawer es falso', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  it('muestra el elemento del menú cuando displayDrawer es verdadero', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('muestra div.Notifications cuando displayDrawer es verdadero', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });

  // Pruebas adicionales para verificar los items de notificación
  it('muestra el contenido correcto de notificaciones', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
    expect(wrapper.find(NotificationItem).at(0).props().value).toEqual('New course available');
    expect(wrapper.find(NotificationItem).at(1).props().value).toEqual('New resume available');
    // Aquí puedes verificar el tercer item con html
  });
});
