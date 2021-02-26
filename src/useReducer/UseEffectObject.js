import {useReducer} from 'react'


const initialState  ={
    first :0
}
const reducer = (state, action)=>{
    switch (action.type) {
        case 'increment': return {first : state.first + 1 }
        case 'decrement': return {first : state.first - 1 }
        case 'reset':return initialState;  
        default : return state;
    }
}

function UseEffectObject() {
    const [count, dispatch] = useReducer(reducer,initialState)
    
    return (
        <div>
            <h1>{count.first}</h1>
            <button onClick={()=>dispatch({type :"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type :"decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type :"reset"})}>Reset</button>
        </div>
    )
}

export default UseEffectObject
