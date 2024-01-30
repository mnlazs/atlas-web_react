//import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';




// Definición de estilos con Aphrodite
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
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
//  const [isChecked, setIsChecked] = useState(false);

//  const handleCheckboxChange = () => {
//    setIsChecked(!isChecked);
//  };

  const rowStyle = isHeader ? styles.courseListTh : styles.courseListThTd;
  const evenRowStyle = !isHeader ? styles.courseListTrEven : null;
  const hoverStyle = !isHeader ? styles.courseListTrHover : null;
  //const checkedStyle = !isHeader && isChecked ? styles.rowChecked : null;

  return (
    <tr className={css(evenRowStyle, hoverStyle)}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(rowStyle)}>{textFirstCell}</th>
            <th className={css(rowStyle)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(rowStyle)} colSpan="2">{textFirstCell}</th>
        )
      ) : (
        <>
          <td className={css(rowStyle)}>{textFirstCell}</td>
          <td className={css(rowStyle)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
