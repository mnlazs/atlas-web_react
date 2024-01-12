import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  // Cuando isHeader es true
  it('renderiza una celda con colspan = 2 cuando textSecondCell no existe', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" />);
    const thElement = wrapper.find('th').first();
    expect(thElement.exists()).toBe(true);
    expect(thElement.prop('colSpan')).toBe(2);
  });

  it('renderiza dos celdas cuando textSecondCell está presente', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" textSecondCell="Second cell" />);
    const thElements = wrapper.find('th');
    expect(thElements).toHaveLength(2);
  });

  // Cuando isHeader es false
  it('renderiza correctamente dos elementos td dentro de un elemento tr', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First cell" textSecondCell="Second cell" />);
    const tdElements = wrapper.find('td');
    expect(tdElements).toHaveLength(2);
  });
});
