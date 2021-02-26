import {useState} from 'react'

const  HooksCounter = ()=> {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={()=>setCount(count + 1 )}>Increment Button</button>
        </div>
    )
}

export default HooksCounter;