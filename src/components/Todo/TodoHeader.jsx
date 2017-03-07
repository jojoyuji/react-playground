import React from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import { addTodo } from '../../actions/todosActions'

class TodoHeader extends React.Component {
  render() {
    return (
      <form onSubmit={ this.addTodo.bind(this) }>
        <input type="text" ref="todoInput" />
        <RaisedButton type="submit" label="Criar" primary={true} />
      </form>
      );
  }
  addTodo(event) {
    event.preventDefault();
    if(this.refs.todoInput.value.trim() === '') {
      this.refs.todoInput.value = '';
      return;
    }
    this.props.dispatch(addTodo(this.refs.todoInput.value));
    this.refs.todoInput.value = '';
  }
}
TodoHeader = connect()(TodoHeader);
export default TodoHeader;
