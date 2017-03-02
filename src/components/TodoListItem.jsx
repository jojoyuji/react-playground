import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {toggleTodo} from '../actions/todosActions';

class TodoListItem extends React.Component {
  toggleCheckbox(){
    return this.props.dispatch(toggleTodo(this.props));
  }
  render() {
    return (
    <div>
      <label>
      <input ref="checkbox" type="checkbox"
      onChange={this.toggleCheckbox.bind(this)}
      checked={ this.props.completed } />
        { this.props.title }

      </label>
    </div>
    )
  }
}
TodoListItem.propTypes = {
  id: PropTypes.any,
  dispatch: PropTypes.func,
  completed: PropTypes.any,
  title: PropTypes.any,
};

export default connect()(TodoListItem);
