import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'; // Asegúrate de que este archivo exista y tenga los estilos necesarios

const CourseList = () => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
      {listCourses.length === 0 ? (
        <CourseListRow textFirstCell="No course available yet" />
      ) : (
        listCourses.map(course => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
        ))
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
