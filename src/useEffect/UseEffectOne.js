import {useState,useEffect} from 'react'

function UseEffectOne() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title =`you have Clicked ${count}`
    })
    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>Click {count}</button>
        </div>
    )
}
 
export default UseEffectOne
