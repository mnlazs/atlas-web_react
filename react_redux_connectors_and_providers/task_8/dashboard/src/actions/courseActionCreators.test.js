import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './courseActionCreators';
import { SET_COURSES } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCourses', () => {
  it('debería crear una acción SET_COURSES después de haber fetchado los cursos', () => {
    const mockCourses = [{ id: 1, title: 'Course 1' }, { id: 2, title: 'Course 2' }];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCourses),
      })
    );

    const expectedActions = [{ type: SET_COURSES, courses: mockCourses }];
    const store = mockStore({ courses: [] });

    return store.dispatch(actions.fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
