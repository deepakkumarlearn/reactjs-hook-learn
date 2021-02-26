import {useState,useEffect} from 'react'

function RunOnce() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
   
    const logMousePosition =(e)=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
   
    useEffect(()=>{
        window.addEventListener('mouseover',logMousePosition)

        return() =>{
            console.log("Component unmounting Code");
            window.removeEventListener('mouseover',logMousePosition)
        }
    },[])
    
    
    return (
        <div>
           X ={x}
           Y ={y}
        </div>
    )
}
 
export default RunOnce
