import React, { useState } from "react";

const Form = () => {
    
    const [name, setName] = useState();
    const [Submit, setSubmit] = useState();
    const InputEvent = (event) => {
        setName(event.target.value)
        // console.log(event.target.value);
    }
    const SubmitNmae = () => {
        //  event.preventDefault();
        setSubmit(name);
    // console.log(event.preventDefault());

        
    }
   
   
    return (
        <>
            <div className="form" >   
                <h1>Hello {Submit }</h1>
                <input type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    id="name"
                    onChange={InputEvent}
                    />
                <button onClick={SubmitNmae} className="button-form"> Click Me 👍</button>
             </div>
        </>
    )
}
export default Form;      