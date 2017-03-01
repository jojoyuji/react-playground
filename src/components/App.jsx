import React from 'react';
import TodoHeader from './TodoHeader';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todosActions'
import _ from 'lodash';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTodos())
  }
  renderList() {
    return _.map(this.props.todos, function(t, index) {
      return (<div key={index}>{t.text}</div>)
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
export default connect((store) => {
  return {
    todos: store.todos.todos,
    fetched: store.todos.fetched,
    fetching: store.todos.fetching,
    error: store.todos.error,
  }
})(App);
