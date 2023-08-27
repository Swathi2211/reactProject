import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount, addTen, addDyn } from "./redx";

function WorkRedux(){
    const dispatch = useDispatch();
    const data = useSelector(selectCount);
    return(
        <div>
            <button onClick={()=>dispatch(increment())}> + </button>

            <p>{data}</p>

            <button onClick={()=>dispatch(decrement())}> - </button>
            
            <br/>
            <button onClick={()=>dispatch(addDyn(8))}> Add Dyn </button>
            <br/>
            <button onClick={()=>dispatch(addTen())}> Add 10 </button>
        </div>
    )
}

export default WorkRedux;