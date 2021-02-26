import { useContext } from "react";
import { UserCreateContext,UserChannelContext } from "../App.js";

function ComponentF() {
    const userName = useContext(UserCreateContext);
    const Channel  = useContext(UserChannelContext)
    return (
        <div>
            <h1> {userName} : {Channel}</h1>    
        </div>
    )
}

export default ComponentF
