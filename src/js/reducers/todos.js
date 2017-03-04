import * as constants from '../constants';

const initialState = {
  todos: [],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_TODOS: {
      return Object.assign({}, state, {
        todos: action.todos,
      });
    }
    default: {
      return state;
    }
  }
}
