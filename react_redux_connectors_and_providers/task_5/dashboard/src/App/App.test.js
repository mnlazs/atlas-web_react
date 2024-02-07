import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import App, { mapStateToProps } from './App'; // Ajusta la importación según cómo exportaste App y mapStateToProps
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('mapStateToProps', () => {
  it('debería retornar el objeto correcto cuando se pasa el estado', () => {
    const state = fromJS({
      ui: {
        isLoggedIn: true,
        listNotificationDrawerVisible: false,
      },
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true, displayDrawer: false });
  });
});

describe('Pruebas del componente App', () => {
  let wrapper;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  beforeEach(() => {
    wrapper = shallow(<App />);
  });


  it('se renderiza sin problemas', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('debe mostrar Notifications cuando displayDrawer es true', () => {
    wrapper.setState({ displayDrawer: true });
    expect(wrapper.find(Notifications).exists()).toBeTruthy();
  });

  it('debe contener el componente Header', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it('debe contener el componente Login cuando isLoggedIn es false', () => {
    expect(wrapper.containsMatchingElement(<Login />)).toBeTruthy();
  });

  it('debe contener el componente Footer', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toBeTruthy();
  });

  describe('cuando isLoggedIn es true', () => {
    beforeEach(() => {
      wrapper.setProps({ isLoggedIn: true });
    });

    it('no debe incluir el componente Login', () => {
      expect(wrapper.find(Login).exists()).toBeFalsy();
    });

    it('debe incluir el componente CourseList', () => {
      expect(wrapper.find(CourseList).exists()).toBeTruthy();
    });
  });

  it('markNotificationAsRead function removes the notification with the given id', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    wrapper.setState({ listNotifications: initialNotifications });

    wrapper.instance().markNotificationAsRead(2);
    const updatedNotifications = wrapper.state('listNotifications');
    expect(updatedNotifications).toHaveLength(2);
    expect(updatedNotifications.find(notification => notification.id === 2)).toBeUndefined();
  });

  describe('Pruebas de manejo de teclas', () => {
    it('debe llamar a logOut y mostrar una alerta cuando se presionan las teclas ctrl+h', () => {
      const originalAlert = window.alert;
      window.alert = jest.fn();
      wrapper.instance().logOut = jest.fn();

      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'h', ctrlKey: true }));
      
      expect(wrapper.instance().logOut).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith('Logging you out');

      window.alert = originalAlert;
    });
  });
});

describe('mapStateToProps', () => {
  it('debería retornar el objeto correcto cuando se pasa el estado', () => {
    const state = fromJS({
      uiReducer: {
        isLoggedIn: true,
        listNotificationDrawerVisible: false,
      },
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true, displayDrawer: false });
  });
});

describe('Pruebas del componente App', () => {
  let wrapper;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  beforeEach(() => {
    wrapper = shallow(<App />);
  });


  it('se renderiza sin problemas', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('debe mostrar Notifications cuando displayDrawer es true', () => {
    wrapper.setState({ displayDrawer: true });
    expect(wrapper.find(Notifications).exists()).toBeTruthy();
  });

  it('debe contener el componente Header', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it('debe contener el componente Login cuando isLoggedIn es false', () => {
    expect(wrapper.containsMatchingElement(<Login />)).toBeTruthy();
  });

  it('debe contener el componente Footer', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toBeTruthy();
  });

  describe('cuando isLoggedIn es true', () => {
    beforeEach(() => {
      wrapper.setProps({ isLoggedIn: true });
    });

    it('no debe incluir el componente Login', () => {
      expect(wrapper.find(Login).exists()).toBeFalsy();
    });

    it('debe incluir el componente CourseList', () => {
      expect(wrapper.find(CourseList).exists()).toBeTruthy();
    });
  });

  it('markNotificationAsRead function removes the notification with the given id', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    wrapper.setState({ listNotifications: initialNotifications });

    wrapper.instance().markNotificationAsRead(2);
    const updatedNotifications = wrapper.state('listNotifications');
    expect(updatedNotifications).toHaveLength(2);
    expect(updatedNotifications.find(notification => notification.id === 2)).toBeUndefined();
  });

  describe('Pruebas de manejo de teclas', () => {
    it('debe llamar a logOut y mostrar una alerta cuando se presionan las teclas ctrl+h', () => {
      const originalAlert = window.alert;
      window.alert = jest.fn();
      wrapper.instance().logOut = jest.fn();

      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'h', ctrlKey: true }));
      
      expect(wrapper.instance().logOut).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith('Logging you out');

      window.alert = originalAlert;
    });
  });
});
