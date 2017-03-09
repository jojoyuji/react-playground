
import React, {PropTypes} from 'react';

export default class Hello extends React.Component {
  render() {
    return (
      <div className="margin">
      Parametros na url:
        <h1>{this.props.params.userName}</h1>
        <h1>{this.props.params.email}</h1>
      </div>
      );
  }
}

Hello.propTypes = {
  params: PropTypes.object,
};
