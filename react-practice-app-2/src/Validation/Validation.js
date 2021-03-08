
import React from 'react'


const Validation = (props) => {

    //console.log("length: ",props.textLength)
    return (
        <>
            <p> {props.textLength}</p>
            <p>{props.displayText}</p>
        </>
    )
}



export default Validation;