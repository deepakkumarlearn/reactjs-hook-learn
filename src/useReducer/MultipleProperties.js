import {useReducer} from 'react'

const initialstate = {
    firstNumber : 1,
    secondNumber : 1
}

const reducer = (state,action) =>{
    switch (action.type) {
        case 'inc': return null;
        case 'dec': return null;
        case 'reset':return null;
        default: return state;
    }
}
function MultipleProperties() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <h1>First : { count.firstNumber }</h1>
            <button onClick={()=>dispatch('inc')}>Increment</button>
            <button onClick={()=>dispatch('dec')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <h1>Second : { count.secondNumber }</h1>
            <button onClick={()=>dispatch('inc')}>Increment</button>
            <button onClick={()=>dispatch('dec')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default MultipleProperties
