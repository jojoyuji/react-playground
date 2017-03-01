export function fetchTodos(){
  return {
    type: 'FETCH_TODOS_FULFILLED',
    payload: {
      name: 'My 1st task is doing nothing!',
      desc: 'my description goes in here',
    }
  }
}

export function addTodo(task){
  return {
    type: 'ADD_TODO',
    payload: task
  }
}
