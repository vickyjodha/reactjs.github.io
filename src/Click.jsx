import React, { useState } from "react";

const Click = () => {
    const state = useState();
    // console.log(state);
    const [count,setCount] = useState(0);
    // let count = 1;
    const IncNum = () => {
        setCount(count+1);
    // console.log("cliched " + count++ );
    }
     const Decnum = () => {
        setCount(count-1);
    // console.log("cliched " + count++ );
}
    return (
        <>
            <div >

            
                <h1 >{ count}</h1>
                <button onClick={IncNum} >click Me </button>
                <button onClick={Decnum} >click Me </button>
       </div>
        </>
    )
}
export default Click;