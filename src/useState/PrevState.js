import { useState } from "react";

const HooksCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);


const handleEvent=()=>{
    
    for(let i=1; i<=5; i++){
        setCount(previous=>previous + 1)
    }
   
}

  return (

    <div>
      <h1> Count: {count}</h1>
        {console.log(count)}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      
      <button onClick={handleEvent}>Increment Button + 1</button>
      
      <button onClick={() => setCount(previous => previous - 1)}>
        Increment Button
      </button>
     
    </div>
  );
};

export default HooksCounter;
