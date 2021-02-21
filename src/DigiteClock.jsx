import React, { useState } from "react";

const Clock = () => {
    let newTime=  new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);
    const UpdateTme = () => {
     newTime=  new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    let timeSte = 10;
    // let x = timeSte;
    // let y = x * 60;
    // let z = y / 60;
    setInterval(UpdateTme,1000);
    return (
        <>
            <div >

            
                <h1 > Time { ctime}</h1>
                <h1 > Time { timeSte}</h1>
                {/* <button onClick={UpdateTme}> Get Time </button> */}
                
       </div>
        </>
    )
}
export default Clock;      