import { useState } from "react"

function StateExample(){
    const [text,setText] = useState('Hello')
    return (
        <div>
            <p>{text}</p>
            <button onClick={function (){setText('Welcome')}}>Change</button>
        </div>
    )
}

export default StateExample