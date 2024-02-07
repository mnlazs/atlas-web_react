import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from './courseActionTypes.js';

// Estado inicial esperado
const initialState = [];


describe('courseReducer', () => {
  it('debería retornar el estado inicial si no se pasa ninguna acción', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });
});


it('debería retornar los datos pasados para FETCH_COURSE_SUCCESS', () => {
  const action = {
    type: FETCH_COURSE_SUCCESS,
    data: [{ id: 1, name: "ES6", credit: 60 }],
  };
  expect(courseReducer(undefined, action)).toEqual(action.data);
});

it('debería actualizar el estado correctamente para SELECT_COURSE', () => {
  const initialState = [{ id: 1, name: "ES6", credit: 60, isSelected: false }];
  const action = { type: SELECT_COURSE, id: 1 };
  const expectedState = [{ id: 1, name: "ES6", credit: 60, isSelected: true }];
  expect(courseReducer(initialState, action)).toEqual(expectedState);
});

it('debería actualizar el estado correctamente para UNSELECT_COURSE', () => {
  const initialState = [{ id: 1, name: "ES6", credit: 60, isSelected: true }];
  const action = { type: UNSELECT_COURSE, id: 1 };
  const expectedState = [{ id: 1, name: "ES6", credit: 60, isSelected: false }];
  expect(courseReducer(initialState, action)).toEqual(expectedState);
});
