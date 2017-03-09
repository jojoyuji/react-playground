import classnames from 'classnames';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import 'normalize.css';
import './App.css' ;

import { AppBar, Drawer } from 'material-ui';

import { toggleMenu } from '../actions/appActions';

class App extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.children !== nextProps.children || this.props.isMenuOpen !== nextProps.isMenuOpen) ;
  }
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
            <li><Link to="/"      onlyActiveOnIndex={true} activeStyle={{ color: 'red' }}>Todo app</Link></li>
            <li><Link to="/hello"  activeStyle={{ color: 'red' }}>hello 1</Link></li>
            <li><Link to="/hello2" activeStyle={{ color: 'red' }}>hello 2</Link></li>
            <li><Link to="/parametros/jojoyuji/jojo@gmail.com" activeStyle={{ color: 'red' }}>url com params</Link></li>
            <li><Link to="/animation" activeStyle={{ color: 'red' }}>Animações</Link></li>
          </ul>


        </Drawer>
        <div className={classnames('app-content', {'expanded': this.props.isMenuOpen})}>
          {this.props.children}
        </div>
      </div>
      );
  }
}
App.propTypes = {
  isMenuOpen: PropTypes.any,
  children: PropTypes.node,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};


export default connect((store) => {
  return {
    isMenuOpen: store.app.isMenuOpen,
  }
})(App);
