import axios from 'axios';
import _ from 'lodash';

const baseURL = 'https://jsonplaceholder.typicode.com/todos';

export function addTodo(text) {
  axios.post(baseURL, {
    title: text,
    completed: false
  });
  return {
    type: 'ADD_TODO',
    payload: text,
  };
}

function requestData() {
  return {
    type: 'TODOS_REQ_DATA',
  };
}
function receiveData(json) {
  return {
    type: 'TODOS_RECV_DATA',
    payload: json
  };
}


export function fetchTodos() {
  return function(dispatch) {
    axios.get(baseURL)
      .then((data) => dispatch(receiveData(_.reverse(data.data).slice(0,200))))
    return dispatch(requestData());
  }

}
export function toggleTodo({id, completed, title}) {
  axios.put(baseURL + '/' + id, {
    id,
    title,
    completed: !completed
  })
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

export function deleteTodo(id) {
  axios.delete(baseURL + '/' + id);
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}
