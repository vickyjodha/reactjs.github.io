import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Propes';
import reportWebVitals from './reportWebVitals';
import Sdata from "./Sdata";
// function  Ncard(val) {
//   return ( <Card img={val.img}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />);
// }
console.log(Sdata[0])
ReactDOM.render(
  <React.StrictMode>
    <h1>Heading</h1>  
    {Sdata.map((val) => {
       return ( <Card img={val.img}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />);
    }) }
   
    {/* <Card img={Sdata[1].img}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    /> */}
    
   </React.StrictMode>
,
  document.getElementById('root')
);
reportWebVitals();