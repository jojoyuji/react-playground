import React from 'react';

import {browserHistory} from 'react-router';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Hello extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  handleSubmit = (e) =>{
    e.preventDefault();
    //redirects to url with params
    let name = this.refs.name.getValue();
    let email = this.refs.email.getValue();
    const path = `/parametros/${name}/${email}`;
    browserHistory.push(path);
    this.handleClose();


  }
  render() {
    const actions = [
      <FlatButton label="Cancelar" primary={ true } onTouchTap={ this.handleClose } />,
      <FlatButton label="Enviar" primary={ true } keyboardFocused={ true } onTouchTap={ this.handleSubmit.bind(this) } />,
    ]
    return (
      <div className="margin">
      <h1>Hello 1</h1>
        <div>
          <RaisedButton label="Dialog" onTouchTap={ this.handleOpen } />
          <Dialog title="Dialog :D" actions={ actions } modal={ false } open={ this.state.open } onRequestClose={ this.handleClose }>
          Nome e email redirecionam para outra url  :)
            <form onSubmit={this.handleSubmit.bind(this)}>
              <TextField ref="name" floatingLabelText="Nome aqui" />
              <TextField ref="email" floatingLabelText="email aqui" />
              <RaisedButton type="submit">Enviar</RaisedButton>
            </form>
          </Dialog>
        </div>
      </div>
      );
  }
}
