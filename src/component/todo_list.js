import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import '../component/todo.css'

function Todo(){

    const [inp, setInp] = useState([]);

    return (
        <div id="main">
            <label>Enter the Task</label><br/>
            <input type="text" id="task" />
            <button onClick={()=>{

                let inpVal = document.getElementById("task");

                let copy = [...inp];

                copy.push(inpVal.value);
                setInp(copy);

                document.getElementById("task").value="";


            }}>Add</button>

            <ol>
                {
                    inp.map((item,index)=>(
                        <li key="index">{item}
                        <button onClick={()=>{
                            let inpVal = document.getElementById("task");

                            let copy = [...inp];
            
                            copy.splice(index,1);
                            setInp(copy);
            

                        }}>Delete</button>
                        <button onClick={()=>{
                            let inpVal = document.getElementById("task");

                            let copy = [...inp];
            
                            let newVal = prompt("Enter  : ");

                            copy.splice(index,1,newVal);
                            setInp(copy);
            
                        }}>Update</button>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
    
}

export default Todo 

// 