export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: text
  };
}

export function fetchTodos(filter) {
  return {
    type: 'FETCH_TODOS',
    filter
  };
}

