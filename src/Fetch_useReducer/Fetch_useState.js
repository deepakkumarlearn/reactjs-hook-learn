import {useState,useEffect} from 'react'
import axios from "axios";

function Fetch_useState() {
    const [loading,setLoading] =useState(true)
    const [error, setError]  = useState('')
    const [post, setPost] = useState({})
   
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response =>{
        setLoading(false)
        setError('')
        setPost(response.data)
    })
    .catch(err=>{
        setLoading(false)
        setPost({})
        setError("Someting went Wrong")
    })
    }, [])


    return (
        <div>
          <h1>   {loading ? "Loading..." : post.title}</h1>
            { error ? error : null}
        </div>
    )
}

export default Fetch_useState
