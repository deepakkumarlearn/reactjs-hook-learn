import {useState, useEffect} from 'react'
import axios from "axios";

function DataFetch() {
    const [post, setPost ]=useState([])
    const [id, setId] = useState(1)
    const [buttonClickData, setButtonClickDate] = useState(1)
    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${buttonClickData}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },[buttonClickData])

    const handleEvent =()=>{
        setButtonClickDate(id);
    }

    return (
        <div>
            <input value={id} onChange={e=>setId(e.target.value)} />
            <button type="button" onClick={handleEvent} >Fetch Data</button>
            <div>
                {post.title}
            </div>
            {/* <ul>
                {
                    post.map(post=>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default DataFetch
