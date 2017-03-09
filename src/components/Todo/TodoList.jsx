import _ from 'lodash';
import React, { PropTypes } from 'react';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';

import { fetchTodos } from '../../actions/todoActions'

import 'normalize.css';


class Todo extends React.Component {
  componentDidMount() {
    return this.props.dispatch(fetchTodos())
  }
  shouldComponentUpdate(nextProps) {
    return (nextProps.todos !== this.props.todos);
  }
  render() {
    if (this.props.fetching && this.props.todos.length === 0) {
      return (
        <div>loading...</div>
      )
    }
    const {todos} = this.props
    return (
      <div>
        { todos.map(t => <TodoListItem key={ t.id } id={ t.id } completed={ t.completed } title={ t.title } />) }
      </div>);
  }

}
Todo.propTypes = {
  fetching: PropTypes.any,
  error: PropTypes.any,
  todos: PropTypes.array,
  dispatch: PropTypes.func,
};


export default connect((store) => {
  return {
    todos: store.todos.todos,
    fetched: store.todos.fetched,
    fetching: store.todos.fetching,
    error: store.todos.error,
  }
})(Todo);
