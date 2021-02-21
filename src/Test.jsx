import React from 'react';
import './index.css';
import Card from './Propes';
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";
// function  Ncard(val) {
//   return ( <Card img={val.img}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />);
// }
const favserise = "netfix";
const f1 = "netfixs";
const Favs = () => {

  if (favserise === f1) {
    return<Netflix></Netflix>
  } else {
      return<Amazon></Amazon>
    // return (<Card img={Sdata[2].img}
    //   title={Sdata[2].title}
    //   sname={Sdata[2].sname}
    //   link={Sdata[2].link}
    // />);
  
  }
}
const App = () =>(
  <React.StrictMode>
    <h1>Heading</h1>  
    {/* {Sdata.map((val, index) => {
       return ( <Card img={val.img}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />);
    }) } */}
    {(favserise === f1)?<Netflix></Netflix>:<Amazon></Amazon>}
    {/* <Favs></Favs> */}
   
    {/* <Card img={Sdata[1].img}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    /> */}
    
   </React.StrictMode>

);
export default App;