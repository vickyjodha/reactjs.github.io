import React, { createContext } from 'react';
import ComA from "./ComA";
const FirstName = createContext();
const LastName = createContext();
const Context = () => {
    return(
        <>
            <div>
                <FirstName.Provider value="Vikram">
                    <LastName.Provider  value="Singh">
                        <ComA /> 
                        </LastName.Provider>
                </FirstName.Provider>
        </div>
        </>
    )
}
export default Context;
export { FirstName,LastName };
