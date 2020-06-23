import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
