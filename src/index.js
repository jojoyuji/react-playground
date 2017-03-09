import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute, browserHistory } from 'react-router'


import App from './components/App';
import Todo from './components/Todo/Todo';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import Params from './components/Params';
import Animation from './components/Animation';

import store from './store';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let app = (
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router history={ browserHistory }>
        <Route path="/"  component={ App }>
            <IndexRoute  component={Todo} />
            <Route path="/hello" component={ Hello } />
            <Route path="/hello2" component={ Hello2 } />
            <Route path="/parametros/:userName/:email" component={ Params } />
            <Route path="/animation" component={ Animation } />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
  )

if(process.env.NODE_ENV !== 'production'){

  let ReactPerfTool = require('react-perf-tool');
  let Perf = require('react-addons-perf');
  window.Perf = Perf;
  app = (<div>
  {app}
  <ReactPerfTool perf={Perf}/>
  </div>);

}

ReactDOM.render(
  app,
  document.getElementById('root')
);
