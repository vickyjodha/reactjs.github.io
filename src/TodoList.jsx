import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Todo = () => {
    const [inputlist, SetinlputLIst] = useState("");
    const [iteam, setIeteam] = useState([]);
    const itemEvent = (event) => {
        SetinlputLIst(event.target.value);
    }
    const listOfItem = ()=>{
        setIeteam((oldIteam) => {
            return [...oldIteam, inputlist]
        });
        SetinlputLIst("");
    };
    const DeleteIteam = (number) => {
        // console.log("delete")

       setIeteam((oldIteam) => {
           return oldIteam.filter((aarrElem,index) => {
               return index !== number;
            })
        }); 
    }
    return (
        <>
            <div className="todomain">
                <div className="todomain-list">
                    <h1>Todo List </h1>
                    <div className="input-data">
                    <input type="text" name="name" value={inputlist} placeholder="Enter Your List" id="name" onChange={itemEvent} /> <span onClick={listOfItem}>+</span>
                    </div>
                    <ul className="todolistdata">
                        {
                            iteam.map((iteamval,number) => {
                                return <li> <span onClick={() => {
                                   DeleteIteam(number);
                                }}>+</span>{iteamval} </li>
                        })
                        }
                        
                    </ul>
                </div>
            </div>
            <div>
                <button className="btn btn-danger btn-secondary my-5 ">
                    jfgljgfkl
                </button>
            </div>
        </>
    )
}
export default Todo;