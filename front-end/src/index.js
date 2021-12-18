import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyle } from './global-styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
