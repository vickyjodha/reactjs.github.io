import React ,{ useContext } from "react";
import ComC from "./ComC";
import { FirstName ,LastName } from "./ContextApi";

const ComB = () => {
    const lname = useContext(FirstName);
    const fname = useContext(LastName);
    return (
        <div>
            <ComC></ComC>
            <h1>Vikram singh Comp B {fname } { lname}</h1>
        </div>
    ) 
}
export default ComB;