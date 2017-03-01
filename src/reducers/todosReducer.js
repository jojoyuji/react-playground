export default function reducer(state = {
  todos: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action
) {
  switch (action.type) {
    case 'FETCH_TODOS': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'FETCH_TODOS_REJECT': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'FETCH_TODOS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        todos: action.payload
      };
    }
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, {text: action.payload, completed: false}]
      }
    }
    default:
    break;
  }
  return state;
}
