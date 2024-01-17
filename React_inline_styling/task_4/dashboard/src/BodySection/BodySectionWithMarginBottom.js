import React from 'react';
import {  StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

function BodySectionWithMarginBottom(props) {
  return (
    <div className= {css(styles.withMargin)} >
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes
};

const styles = StyleSheet.create({
  withMargin: {
    marginBottom: '20px',
  },

});


export default BodySectionWithMarginBottom;
