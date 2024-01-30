import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('Pruebas del componente App', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection(); 
  });

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('el estado displayDrawer debe ser false por defecto', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('handleDisplayDrawer debe actualizar el estado displayDrawer a true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('handleHideDrawer debe actualizar el estado displayDrawer a false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('se renderiza sin problemas', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('no debe mostrar Notifications cuando displayDrawer es false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBeFalsy();
  });

  it('debe mostrar Notifications cuando displayDrawer es true', () => {
    const wrapper = shallow(<App displayDrawer={true} />);
    expect(wrapper.find(Notifications).exists()).toBeTruthy();
  });

  it('debe contener el componente Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it('debe contener el componente Login cuando isLoggedIn es false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Login />)).toBeTruthy();
  });

  it('debe contener el componente Footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Footer />)).toBeTruthy();
  });

  it('no debe mostrar el componente CourseList cuando isLoggedIn es false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).exists()).toBeFalsy();
  });

  it('markNotificationAsRead function removes the notification with the given id', () => {
    // Establece un estado inicial con notificaciones mock
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    wrapper.setState({ listNotifications: initialNotifications });
    
    // Llama a markNotificationAsRead para el ID 2
    wrapper.instance().markNotificationAsRead(2);

     // Verifica que la notificación con ID 2 haya sido removida
    const updatedNotifications = wrapper.state('listNotifications');
    expect(updatedNotifications).toHaveLength(2);
    expect(updatedNotifications.find(notification => notification.id === 2)).toBeUndefined();
  });

  describe('cuando isLoggedIn es true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('no debe incluir el componente Login', () => {
      expect(wrapper.find(Login).exists()).toBeFalsy();
    });

    it('debe incluir el componente CourseList', () => {
      expect(wrapper.find(CourseList).exists()).toBeTruthy();
    });

    it('logIn function updates the state correctly', () => {
      const email = 'user@example.com';
      const password = 'password';
      wrapper.instance().logIn(email, password);
      expect(wrapper.state('user')).toEqual({
        email: email,
        password: password,
        isLoggedIn: true
      });
    });

  it('logOut function updates the state correctly', () => {
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual({
      email: '',
      password: '',
      isLoggedIn: false
    });
  });

// Prueba para verificar que logOut es llamado correctamente
it('should call logOut and update state when ctrl+h is pressed', () => {
  const originalAlert = window.alert;
  window.alert = jest.fn();
  
  // Simula que el usuario está logueado
  wrapper.setState({
    user: {
      email: 'user@example.com',
      password: 'password',
      isLoggedIn: true
    }
  });

  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'h', ctrlKey: true }));

  expect(wrapper.state('user').isLoggedIn).toBe(false);
  expect(window.alert).toHaveBeenCalledWith('Logging you out');

  window.alert = originalAlert;
});



    describe('Pruebas de manejo de teclas', () => {
      it('debe llamar a logOut y mostrar una alerta cuando se presionan las teclas ctrl+h', () => {
        const logOutMock = jest.fn();
        const originalAlert = window.alert;
        window.alert = jest.fn();

        const wrapper = shallow(<App logOut={logOutMock} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'handleKeyPress');

        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'h', ctrlKey: true }));

        expect(logOutMock).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith('Logging you out');

        window.alert = originalAlert;
      });
    });
  });
});
