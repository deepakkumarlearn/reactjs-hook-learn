import {useState,useEffect} from 'react'

function UseEffectCondional() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
     
    useEffect(()=>{
        document.title =`you have Clicked ${count}`
        console.log("UseEffect : Title Update times")
    },[count])
    
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=> setCount(count + 1)}>Click {count}</button>
        </div>
    )
}
 
export default UseEffectCondional
