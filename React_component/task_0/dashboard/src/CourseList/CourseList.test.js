import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  it('renderiza correctamente con un array vacío o sin listCourses', () => {
    const wrapperEmpty = shallow(<CourseList listCourses={[]} />);
    expect(wrapperEmpty.find(CourseListRow).length).toBe(1); // Solo la fila 'No course available yet'

    const wrapperNoProp = shallow(<CourseList />);
    expect(wrapperNoProp.find(CourseListRow).length).toBe(1); // Igualmente, solo una fila
  });

  it('renderiza correctamente con una lista de cursos', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(listCourses.length + 2); // Cursos más las dos filas del encabezado
  });
});
