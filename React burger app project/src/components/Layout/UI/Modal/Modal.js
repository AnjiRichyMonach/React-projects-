
import React from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const  Modal =(props)=>{
return(
    <div>
    <Backdrop purchasing={props.purhasing} backDropClicked={props.purchaseCancel}></Backdrop>
   <div className={classes.Modal}
    style={{
                transform: props.purhasing ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.purhasing ? '1' : '0'
            }}
            
            >{props.children}
    </div>
    </div>

)
}

export default Modal;