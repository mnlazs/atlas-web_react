import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseList />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 rows', () => {
    // Comprueba que hay 5 componentes CourseListRow en total
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});
