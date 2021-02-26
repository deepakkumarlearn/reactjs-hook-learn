import React,{useEffect, useState} from 'react'

function useEffectDepancy() {
    const [count, setCount] = useState(0);

  const  tick =()=>{
        setCount(previous=> previous +1)
    }
    useEffect(() => {
        const interval = setInterval(tick,1000)
        return () => {
            clearInterval(interval);
        }
    }, [count])


    return (
        <div>
            {count}
        </div>
    )
}

export default useEffectDepancy
