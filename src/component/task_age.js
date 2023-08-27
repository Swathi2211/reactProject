import { useState } from "react"

function TaskAge(){
    const [obj, setAge] = useState(
        {
            fname: 'Sam',
            lname: 'Prabhu',
            age: 25
        }
    )
    return (
        <div>
            <p>{obj.fname} {obj.lname} {obj.age}</p>
            <button onClick={function() {

                let copy = {...obj};
                copy.age += 1;
                setAge(copy);
                
                }
                
            }>Add Age</button>
            
        </div>
    )
}

export default TaskAge