import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  { dic, div, sum, multi }  from './cal';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <ol>
      <li>Two number {sum(30, 3)}</li>
      <li>Two divded {dic(30,3)}</li>
      <li>Two multipie {div(30,7)}</li>
      <li>Two ate  {multi(30,3)}</li>
  </ol>  
  </React.StrictMode>
,
  document.getElementById('root')
);
reportWebVitals();