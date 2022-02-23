import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle  from '../src/components/styles/GlobalStyle';


ReactDOM.render(
  <>
     <GlobalStyle/>
     
    <App />
  </>,
  document.getElementById('root')
);


reportWebVitals();
