import React from "react";
import { FirstName ,LastName } from "./ContextApi";
const ComC = () => {
    return (
        <div>
            {/* compuer of data new              */}
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>{(lname) =>{
                            return (
                                <h1>My name is {fname} {lname}</h1>
                            
                            );
                        }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </div>
    )
}
export default ComC;