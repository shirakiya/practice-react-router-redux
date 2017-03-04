import * as constants from '../constants';
import { get } from '../util';

export function fetchTodos() {
  return dispatch => {
    console.log('do fetching');
    get('/api/todos').then(res => {
      console.log('res', res);
      dispatch({
        type: constants.FETCH_TODOS,
        todos: res,
      });
    }).catch(error => {
      console.log('error occured', error);
    });
  };
}
