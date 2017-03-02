import React, { PropTypes } from 'react';
import TodoHeader from './TodoHeader';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todosActions'
import _ from 'lodash';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTodos())
  }
  renderList() {
    if (this.props.fetching) {
      return (
        <span>loading... </span>
      )
    } else if (this.props.error) {
      return (
        <span>ops... Happened an error :(</span>
        );
    }
    return _.map(this.props.todos, function(t) {
      return <TodoListItem key={t.id} id={ t.id } completed={ t.completed } title={ t.title } />;
    });
  }

  render() {
    return (
      <div>
        <TodoHeader />
        { this.renderList() }
      </div>
      );
  }
}
App.propTypes = {
  fetching: PropTypes.any,
  error: PropTypes.any,
  todos: PropTypes.any,
  dispatch: PropTypes.func,
};


export default connect((store) => {
  return {
    todos: store.todos.todos,
    fetched: store.todos.fetched,
    fetching: store.todos.fetching,
    error: store.todos.error,
  }
})(App);
