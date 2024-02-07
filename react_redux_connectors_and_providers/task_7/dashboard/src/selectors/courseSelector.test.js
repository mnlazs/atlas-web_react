import { createSelector } from 'reselect';

// Suponiendo que el estado de cursos está bajo state.courses
const getCoursesState = (state) => state.courses;

export const getAllCourses = createSelector(
  [getCoursesState],
  (coursesState) => coursesState.valueSeq().toList()
);
import { fromJS } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('courseSelector', () => {
  it('debe retornar todos los cursos como una lista', () => {
    const mockState = fromJS({
      courses: {
        1: { id: 1, title: 'Course 1' },
        2: { id: 2, title: 'Course 2' },
        // Añade más cursos según sea necesario para la prueba
      },
    });

    const selectedCourses = getAllCourses(mockState);
    expect(selectedCourses.size).toEqual(2); // Asegúrate de que el tamaño coincida con el número de cursos
    expect(selectedCourses.get(0).get('title')).toEqual('Course 1'); // Verifica algunos detalles para asegurarte de que los datos son correctos
    expect(selectedCourses.get(1).get('title')).toEqual('Course 2');
  });
});
