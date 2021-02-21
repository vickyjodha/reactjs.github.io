import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import youtuber,{name,funame} from './Appw';
import * as vikram from './Appw';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <h1>Your Favert Youtuner {vikram.default}</h1>
    <h1>your name {vikram.name}</h1>
    <p>{vikram.funame()}</p>
  </React.StrictMode>
,
  document.getElementById('root')
);
reportWebVitals();