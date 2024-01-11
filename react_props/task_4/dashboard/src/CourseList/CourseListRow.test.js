import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  // Cuando isHeader es true
  it('renderiza una celda con colspan = 2 cuando textSecondCell no existe', () => {
    const { container } = render(<CourseListRow isHeader={true} textFirstCell="First cell" />);
    const thElement = container.querySelector('th');
    expect(thElement).toBeInTheDocument();
    expect(thElement).toHaveAttribute('colspan', '2');
  });

  it('renderiza dos celdas cuando textSecondCell está presente', () => {
    const { container } = render(<CourseListRow isHeader={true} textFirstCell="First cell" textSecondCell="Second cell" />);
    const thElements = container.querySelectorAll('th');
    expect(thElements.length).toBe(2);
  });

  // Cuando isHeader es false
  it('renderiza correctamente dos elementos td dentro de un elemento tr', () => {
    const { container } = render(<CourseListRow isHeader={false} textFirstCell="First cell" textSecondCell="Second cell" />);
    const tdElements = container.querySelectorAll('td');
    expect(tdElements.length).toBe(2);
  });
});
