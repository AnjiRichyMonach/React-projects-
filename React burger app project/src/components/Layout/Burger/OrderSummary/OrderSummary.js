import React from 'react'
import Button from '../../UI/Button/Button'
import classes from '../../UI/Button/Button.css'

const OrderSummary=(props)=>{
    const ingredientSummary= Object.keys(props.ingredients)
    .map((igKey)=>{
        //style={{textTransform: 'capitalize'}}  js obj
        
        return(
            <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        )
    })
    return (
        <div>
<h3>Your order:</h3>
<p>This is delicious burger with following ingredients: </p>
<ul>{ingredientSummary}</ul>
<p><strong>Total price: {props.price}</strong></p>
<p>Continue to checkout</p>
<Button clicked={props.purchaseCancel} btnType="Danger">Cancel</Button>
<Button clicked={props.purchaseContinue} btnType="Success">Continue</Button>
        </div>
    )
}

export default OrderSummary;