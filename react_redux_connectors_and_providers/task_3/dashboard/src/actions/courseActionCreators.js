import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

function selectCourse(index) {
  return { type: SELECT_COURSE, index };
}

function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index };
}

// "Ligando" las acciones
export const boundSelectCourse = (index) => selectCourse.bind(null, index);
export const boundUnselectCourse = (index) => unSelectCourse.bind(null, index);
