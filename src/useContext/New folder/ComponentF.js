import React from 'react'
import { UserConsumer } from './UseContex'

function ComponentF() {
    return (
        <div>
        <UserConsumer>
            {
                (userName)=> {
                    return(
                        <div>Hello {userName}</div>
                    )
                }
            }
        </UserConsumer>
            
        </div>
    )
}

export default ComponentF
