import React from 'react';
import { connect } from 'react-redux';
import {fetchTodos } from '../actions/todosActions'

class TodoHeader extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchTodos())
  }
  render() {
    return (
      <form onSubmit={ this.addTodo.bind(this) }>
        <input type="text" ref="todoInput" />
        <button type="submit">criar</button>
        <h1>hello ma header here</h1>
      </form>
      );
  }
  addTodo(event) {
    event.preventDefault();
    console.log('addTodo');
    console.log(this.props.todos)
    this.refs.todoInput.value = '';
  }
}
TodoHeader = connect((store) => {
  return {
    todos: store.todos.todos
  }
})(TodoHeader);
export default TodoHeader;
