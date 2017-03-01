import React from 'react';
import TodoHeader from './TodoHeader';

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader />
        <div>content goes in here</div>
      </div>
      );
  }
}
export default App;
