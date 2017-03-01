import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosActions'

class TodoHeader extends React.Component {
  render() {
    return (
      <form onSubmit={ this.addTodo.bind(this) }>
        <input type="text" ref="todoInput" />
        <button type="submit">criar</button>
      </form>
      );
  }
  addTodo(event) {
    event.preventDefault();
    console.log('addTodo');
    this.props.dispatch(addTodo(this.refs.todoInput.value));
    this.refs.todoInput.value = '';
  }
}
TodoHeader = connect()(TodoHeader);
export default TodoHeader;
