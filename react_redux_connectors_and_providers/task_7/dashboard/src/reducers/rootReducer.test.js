import { fromJS } from 'immutable';
import rootReducer from './reducers/rootReducer';

describe('rootReducer', () => {
  it('debería retornar el estado inicial', () => {
    const initialState = rootReducer(undefined, {});

    expect(initialState).toEqual(fromJS({
      courses: Map({}),
      notifications: Map({}),
      ui: Map({})
    }));
  });
});
