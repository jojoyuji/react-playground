import React from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default class Todo extends React.Component {
  render() {
    return (
      <div>
          <TodoHeader />
          <TodoList />
      </div>
      );
  }
}
