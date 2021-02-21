import React, { useState } from "react";

const Event = () => {
    const purple = "#8e44ad";
    const textC = "Click Me";
    const [bg, setBg] = useState(purple);
    const [text, SetText] = useState(textC);
    const newBg = () => {
        let newBg = "#8e44ad";
        let newTxext = "Back   🤫";
        setBg(newBg);
        SetText(newTxext);
    }
    const bgChange = () => {
        let newBg = "red";
        let newTxext = "Click 😍";
        setBg(newBg);
        SetText(newTxext);
        // console.log("click");
    }
   
   
    return (
        <>
            <div className="bgchnage" style={{
                backgroundColor:bg,
            }}>               
                <button className="button" onMouseEnter={bgChange} onMouseLeave={newBg}> {text} </button>
             </div>
        </>
    )
}
export default Event;      