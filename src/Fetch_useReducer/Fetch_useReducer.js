import {useReducer, useEffect} from 'react';
import axios from 'axios';


const initialState = {
    loading : true,
    error :'',
    post : {}
}

const reducer =(state,action)=>{

    switch (action.type) {
        case 'Fetch_Data':
            return {
                loading : false,
                post : action.payload,
                error :''    
            }
        case 'Fetch_Error':
            return {
                loading : false,
                post : {},
                error :'Something Went Wrong'
               
            }
    
        default: return state;
    }
}

function Fetch_useReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
            dispatch({type : 'Fetch_Data', payload : res.data})
        })
        .catch((err)=>{
            dispatch({type : 'Fetch_Error'})
        })
        
    }, [])

    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default Fetch_useReducer
