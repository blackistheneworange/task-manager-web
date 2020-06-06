import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
//import 'font-awesome/css/font-awesome.min.css'
import App from './components/App';

import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

const store=configureStore();

ReactDOM.render(
  
  <Provider store={store}>
    <BrowserRouter>
       <App/>
    </BrowserRouter>,
  </Provider>,
  
  document.getElementById("root")
  
  )