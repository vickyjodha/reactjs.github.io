import React from 'react';
import ReactDOM from 'react-dom';
const Slotm = (props) => {
    // let x = '😃';
    // let y = '😃';
    // let z = '🎅';
   let x = props.x;
  let  y = props.y;
   let z = props.z;
    if (x === y && y === z) {
        return (
            <>
                <div className="slot_inner">
                    <h1>This is Matching.</h1>
                    <h1>{x} {y} {z}</h1>
                    <hr/>
                </div>
            </>
        )
    } else {
       return (
            <>
                <div className="slot_inner">
                    <h1>This is Not  Matching.</h1>
                    <h1>{x} {y} {z}</h1>
                    <hr/>
                </div>
            </>
        )
    }
}
const Game = () => {
    return (<>
       <h1 className="heading_style">🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot Machinen Game</span> 
🎰
        </h1>
        <div style={{
            border: "2px solid black",
            background: "#dad7dcc7",
        }}>
            <Slotm x="😞" y="🙋" z="😇"></Slotm>
            <Slotm x="😇" y="😇" z="😇"></Slotm>
            <Slotm x="🙋" y="🙋" z="🙋 "></Slotm>
        </div>
    </>

    )
}
export default Game;