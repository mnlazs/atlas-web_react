import React from 'react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
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
    StyleSheetTestUtils.clearButfferAndResumeStyleInjection();
  });

  // todas las pruebas siguientes 
  it('se renderiza sin problemas', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('no debe mostrar Notifications cuando displayDrawer es false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBeFalsy();
  });  

  it('debe mostrar Notifications cuando displayDrawer es true', () => {
    // Simula el estado pasando props al componente
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

    describe('Pruebas de manejo de teclas', () => {
      it('debe llamar a logOut y mostrar una alerta cuando se presionan las teclas ctrl+h', () => {
        const logOutMock = jest.fn();
        const originalAlert = window.alert;
        window.alert = jest.fn();
  
        // Crear una instancia del componente App
        const wrapper = shallow(<App logOut={logOutMock} />);
  
        // Obtener la instancia del componente y espiar el método handleKeyPress
        const instance = wrapper.instance();
        jest.spyOn(instance, 'handleKeyPress');
  
        // Simular la presión de las teclas ctrl+h
        instance.handleKeyPress({ key: 'h', ctrlKey: true });
  
        // Verificar que logOut y alert fueron llamados
        expect(logOutMock).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith('Logging you out');
  
        window.alert = originalAlert;
      });
    });
  });
})
