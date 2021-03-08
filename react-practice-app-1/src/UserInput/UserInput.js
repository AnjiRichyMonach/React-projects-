
import React from "react";

const UserInput=(props)=>{

    const styleMe={
        border: "2px solid pink"
    }
    return <input style={styleMe} type="text" onChange={props.changed} value={props.username}/>
}

export default UserInput;