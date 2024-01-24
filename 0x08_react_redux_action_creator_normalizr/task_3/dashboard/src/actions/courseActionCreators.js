import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Creador de acción para seleccionar un curso
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index, // Esto es equivalente a index: index
  };
}

// Creador de acción para anular la selección de un curso
export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}
