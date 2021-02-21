import React, { useState } from "react";

const LogForm = () => {
    
    const [fullname, setFullname] = useState( {
        fname: "",
        lname: "",
        email:"",
        mobile:"",
    });
 
    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;
        setFullname((preValue) => {
            return {
                ...preValue,
                [name]:value,
            }
            // if (name === 'name') {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email:preValue.email,
            //         mobile:preValue.mobile,
            //     }
            // }else if (name === 'password') {
            //     return {
            //         fname : preValue.fname,
            //         lname: value,
            //         email:preValue.email,
            //         mobile:preValue.mobile,
            //     }
            // }else if (name === 'email') {
            //     return {
            //         fname : preValue.fname,
            //         lname: preValue.lname,
            //         email:value,
            //         mobile:preValue.mobile,
            //     }
            // }else if (name === 'mobile') {
            //     return {
            //         fname : preValue.fname,
            //         lname: preValue.lname,
            //         email:preValue.email,
            //         mobile:value,
            //     }
            // }
        });
       
    }
    
    const SubmitName = (event) => {
        event.preventDefault();
    }
    
   
    return (
        <>
            <div className="form" >  
        <form onSubmit={SubmitName}>
                    <h1>Hello {fullname.fname} {fullname.lname}</h1>
                    <p>{fullname.email}</p>
                    <p>{fullname.mobile}</p>
                <input type="text"
                    placeholder="Enter Your Name"
                    name="fname"
                    id="name"
                    value={fullname.fname}
                    onChange={InputEvent}
                />
                <input type="text"
                    placeholder="Enter Your Password"
                    name="lname"
                    id="password"
                    value={fullname.lname}
                    onChange={InputEvent}
                    />
                     <input type="email"
                    placeholder="Enter Your email"
                    name="email"
                        id="email"
                    value={fullname.email}
                    onChange={InputEvent}
                    />
                     <input type="number"
                    placeholder="Enter Your email"
                    name="mobile"
                    value={fullname.mobile}
                    id="moblie"
                    onChange={InputEvent}
                    />
                <button type="submit"  className="button-form"> Click Me 👍</button>
            </form>    
             </div>
        </>
    )
}
export default LogForm;      