import React from 'react';
const Hello = (props)=>{
    // local vairblae => state
    const {userName,age} = props
    // Object Desturing
    return (
        <div>
            <h1>
                Hello {userName}: {age}
            </h1>
            <Input/>
        </div>
    )
}
export default Hello;