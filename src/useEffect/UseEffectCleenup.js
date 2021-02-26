import {useState} from 'react'
import RunOnce from "./RunOnce";

function UseEffectCleenup() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)} >Toggle Button</button>
            {display && <RunOnce/>}
        </div>
    )
}

export default UseEffectCleenup;
