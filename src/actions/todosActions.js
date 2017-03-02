import axios from 'axios';
import _ from 'lodash';

const baseURL = 'http://localhost:5000';

export function addTodo(text) {
  axios.post(baseURL + '/todos', {
    title: text,
    completed: false
  });
  return {
    type: 'ADD_TODO',
    payload: text,
  };
}

export function fetchTodos() {
  return {
    type: 'FETCH_TODOS',
    payload: axios.get(baseURL + '/todos')
      .then((data) => _.reverse(data.data))
  };
}
export function toggleTodo({ id, completed, title }) {
  axios.put(baseURL + '/todos/' + id, {
    id,
    title,
    completed: !completed
  })
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}


