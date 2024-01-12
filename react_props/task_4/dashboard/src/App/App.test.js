import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('Pruebas del componente App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('se renderiza sin problemas', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('debe contener el componente Notifications', () => {
    expect(wrapper.containsMatchingElement(<Notifications />)).toBeTruthy();
  });

  it('debe contener el componente Header', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it('debe contener el componente Login', () => {
    expect(wrapper.containsMatchingElement(<Login />)).toBeTruthy();
  });

  it('debe contener el componente Footer', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toBeTruthy();
  });

  it('no debe mostrar el componente CourseList por defecto', () => {
    expect(wrapper.find(CourseList).exists()).toBeFalsy();
  });

  describe('cuando isLoggedIn es true', () => {
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('no debe incluir el componente Login', () => {
      expect(wrapper.find(Login).exists()).toBeFalsy();
    });

    it('debe incluir el componente CourseList', () => {
      expect(wrapper.find(CourseList).exists()).toBeTruthy();
    });
  });
});
