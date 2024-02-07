import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App, { mapStateToProps } from './App'; // Asegura la correcta importación de App y mapStateToProps
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('mapStateToProps', () => {
  it('debería retornar el objeto correcto cuando se pasa el estado', () => {
    // Utiliza el estado esperado después de aplicar combineReducers
    const state = {
      ui: {
        isLoggedIn: true,
        listNotificationDrawerVisible: false,
      },
    };

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
    // Asegura que el componente App se monte correctamente antes de cada prueba
    wrapper = shallow(<App />);
  });

  it('se renderiza sin problemas', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('debe mostrar Notifications cuando displayDrawer es true', () => {
    // Ajusta este test para trabajar con props en lugar de setState
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find(Notifications).exists()).toBeTruthy();
  });

  // Continúa con las pruebas restantes, asegurándote de que cada una esté bien estructurada y no duplicada
  // ...

  describe('Pruebas de manejo de teclas', () => {
    it('debe llamar a logOut y mostrar una alerta cuando se presionan las teclas ctrl+h', () => {
      const mockLogOut = jest.fn();
      const originalAlert = window.alert;
      window.alert = jest.fn();
      
      // Ajusta la instancia del componente para usar el mock de logOut
      wrapper.setProps({ logOut: mockLogOut });
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'h', ctrlKey: true }));
      
      expect(mockLogOut).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith('Logging you out');

      window.alert = originalAlert;
    });
  });
});
