import classnames from 'classnames';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import 'normalize.css';
import './App.css' ;

import { AppBar, Drawer } from 'material-ui';
import Todo from './Todo/Todo';

import { toggleMenu } from '../actions/appActions';

class App extends React.Component {
  handleToggle() {
    this.props.dispatch(toggleMenu());
  }
  render() {
    return (
      <div>
      <AppBar className={ classnames('app-bar', { 'expanded': this.props.isMenuOpen }) } onLeftIconButtonTouchTap={ this.handleToggle.bind(this) }
      title="Experimental TODO app + material-ui and Redux" />
        <Drawer docked={ true } open={ this.props.isMenuOpen } >
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/hello">hello</Link></li>
          </ul>


        </Drawer>
        <div className={classnames('app-content', {'expanded': this.props.isMenuOpen})}>
        {this.props.children || <Todo />}
        </div>
      </div>
      );
  }
}
App.propTypes = {
  isMenuOpen: PropTypes.any,
  //dispatch: PropTypes.func,
};


export default connect((store) => {
  return {
    isMenuOpen: store.app.isMenuOpen,
  }
})(App);
