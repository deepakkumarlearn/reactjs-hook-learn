import {useState} from 'react'

function UseStateArray() {
    const [item, setItem] = useState([]);

   const valueInput =  ()=> {
       setItem([
        ...item,
        {id:item.length,
        value:Math.floor(Math.random()*10+1)
        }
       ])
   }
    return (
        <div>
            <button onClick={valueInput} >Click</button>
          <ul>
          {item.map(item => 
                (
                    <li key={item.id}>{item.value}</li>
                )
             )}
          </ul>
        </div>
    )
}

export default UseStateArray
