
import React from "react";
import './UserOutput.css';

const UserOutput=(props)=>{
    return(
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p> Hello I am a user here</p>
        </div>
    )
}

export default UserOutput;