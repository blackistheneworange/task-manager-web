import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
<<<<<<< HEAD
=======

>>>>>>> task manager material 1
//import 'font-awesome/css/font-awesome.min.css'
import App from './components/App';

import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

<<<<<<< HEAD
=======
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './components/theme'

>>>>>>> task manager material 1
const store=configureStore();

ReactDOM.render(
  
  <Provider store={store}>
    <BrowserRouter>
<<<<<<< HEAD
       <App/>
=======
      <ThemeProvider theme={theme}>
         <App/>
      </ThemeProvider>
>>>>>>> task manager material 1
    </BrowserRouter>,
  </Provider>,
  
  document.getElementById("root")
  
  )