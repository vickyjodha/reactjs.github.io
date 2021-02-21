import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Para from './Para';
// import App from './App';
// import Heading from './Heading';
import reportWebVitals from './reportWebVitals';
// var flname = "virkam";
// var lname = "singh";
// var cureentDate = new Date().toLocaleDateString();
// var currnetTime = new Date().toLocaleTimeString();
const sta = {
  borderRadius: "50px",
  padding: "30px",
  width: "500px", 
  color: "white",
  textAlign: "center",
  margin:"auto",
}
let cureentDate = new Date(2020,5,5,13);
cureentDate = cureentDate.getHours();
let greenting = "";
if (cureentDate >= 1 && cureentDate < 12) {
  greenting = "Good Morning";
 
  sta.backgroundColor = "pink";
}
else if (cureentDate >= 12 && cureentDate < 19) {
  greenting = "Good Aftrnoon";
  sta.backgroundColor = "yellow";
  
}
else {
  sta.backgroundColor = "green";
  greenting = "Good Evening";
}
// const img1 = "https://picsum.photos/id/23/200/300";
// const url = "https://reactjs.org/docs/getting-started.html";
// const stye = {
//   color: 'black',
//   fontSize: "40px",
//   // textAlign: "center"
// }

ReactDOM.render(
  <React.StrictMode>
    
  {/* <Heading> </Heading> */}
  {/* <p> this is cureent {cureentDate} </p>
  <p> this is cureent {currnetTime} </p>
    <a href={url} style={{ marginRight: "40px"}}>
      <img src={img1} alt="renaom" />
    </a>
    <a href={url} >
      <img src={img1} alt="renaom" />
  </a>
  <ol>
    <li> {Math.random()} </li>
    <li style={stye}> Vikram Singh</li>
    <li> singh </li>
    <li> name </li>
    <li> jodha </li>
    </ol>
     */}
    <Para></Para>
    <h1 style={sta}>Hello sir, {greenting}</h1>
  </React.StrictMode>
,
  document.getElementById('root')
);
reportWebVitals();