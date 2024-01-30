import { FETCH_COURSE_SUCCESS } from './courseActionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data; // Actualiza el estado con la lista de cursos
    default:
      return state; // Retorna el estado actual para cualquier otra acción
  }
};

export default courseReducer;
