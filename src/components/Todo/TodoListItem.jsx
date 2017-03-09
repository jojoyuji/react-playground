import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { toggleTodo, deleteTodo } from '../../actions/todoActions';

import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class TodoListItem extends React.Component {
  toggleCheckbox() {
    return this.props.dispatch(toggleTodo(this.props));
  }
  deleteItem() {
    return this.props.dispatch(deleteTodo(this.props.id));
  }
  render() {

    const iconButtonElement = (
    <IconButton touch={ true } tooltip="more" tooltipPosition="bottom-left">
      <MoreVertIcon color={ grey400 } />
    </IconButton>
    );
    const rightIconMenu = (
    <IconMenu iconButtonElement={ iconButtonElement }>
      <MenuItem onClick={this.deleteItem.bind(this)}>Delete</MenuItem>
    </IconMenu>
    );
    return (

      <div>
      <ListItem leftCheckbox={ <Checkbox ref="checkbox" onCheck={ this.toggleCheckbox.bind(this) } checked={ this.props.completed } /> }
      primaryText={ this.props.title }
      secondaryText="Allow notifications"
      rightIconButton={rightIconMenu}
      />
        <Divider />
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
