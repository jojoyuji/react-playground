import Immutable from 'immutable';
import _ from 'lodash';
const initialState = {
  todos: [],
  fetching: false,
  fetched: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  state = Immutable.fromJS(state);

  switch (action.type) {
    case 'TODOS_REQ_DATA': {
      return state.set('fetching', true).toJS();
    }
    case 'FETCH_TODOS_REJECT': {
      return state
        .set('fetching', false)
        .set('error', action.payload)
        .toJS();
    }
    case 'TODOS_RECV_DATA': {
      return state
        .set('fetching', false)
        .set('fetched', true)
        .set('todos', action.payload)
        .toJS();
    }
    case 'ADD_TODO': {
      return state
        .set('fetching', false)
        .set('fetched', true)
        .set('todos', state.get('todos').unshift({
          title: action.payload,
          completed: false
        }))
        .toJS();
    }
    case 'TOGGLE_TODO': {
      let index = _.findIndex(state.get('todos').toJS(), (t) => (t.id === action.payload));
      let actualValue = state.get('todos').toJS()[index].completed;
      return state.setIn(['todos', index, 'completed'],
        !actualValue).toJS();
    }
    case 'DELETE_TODO': {
      return state.set('todos', state.get('todos').filter(o => o.get('id') !== action.payload)).toJS();
    }
    default:
      break;
  }
  return state.toJS();
}
