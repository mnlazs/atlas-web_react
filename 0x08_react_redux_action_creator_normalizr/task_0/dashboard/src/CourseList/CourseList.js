import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import React, { useState, PureComponent } from 'react';


const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.courseList)}>
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

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  courseListThTd: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  courseListTh: {
    backgroundColor: '#f4f4f4',
    color: '#333',
  },
  courseListTrEven: {
    backgroundColor: '#f9f9f9',
  },
  courseListTrHover: {
    ':hover': {
      backgroundColor: '#f1f1f1',
    },
  },
});

export default CourseList;
