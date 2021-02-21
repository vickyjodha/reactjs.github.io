import React, { useState } from "react";

const Time = () => {
    let newTime=  new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);
    const UpdateTme = () => {
     newTime=  new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    return (
        <>
            <div >

            
                <h1 > Time { ctime}</h1>
                <button onClick={UpdateTme}> Get Time </button>
                
       </div>
        </>
    )
}
export default Time;