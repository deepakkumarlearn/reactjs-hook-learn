import {useReducer} from 'react'

const initialstate = 0;

const reducer = (state,action)=>{
    switch (action) {
        case 'increment': return state + 1;
        case 'decrement' : return state - 1;
        case 'reset' : return initialstate;
        default : return state;
    }
}

function MultiReducer() {
    const[counter,dispatch] = useReducer(reducer,initialstate)
    const[counterTwo,dispatchTwo] = useReducer(reducer,initialstate)
    return (
        <div>
            <h2> First  counter</h2>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>

            <h2>Second Counter</h2>
            <h1>{counterTwo}</h1>
            <button onClick={()=>dispatchTwo('increment')}>Increment</button>
            <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset</button>           
        </div>
    )
}

export default MultiReducer