
import React, { Component } from 'react'
import Burger from '../../components/Layout/Burger/Burger'
import BuildControl from '../../components/Layout/Burger/BurgerControls/BurgerControl/BurgerControl'
import BuildControls from '../../components/Layout/Burger/BurgerControls/BuildControls'
import Modal from '../../components/Layout/UI/Modal/Modal'
import OrderSummary from '../../components/Layout/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/Layout/UI/Spinner/Spinner'
import axios from '../../axios-orders'



const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 20,
    cheese: 40,
    meat: 50
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {          // ingredient is the obj while salad is key and 1 is value.
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 20,
         purchasable: false, 
         purhasing : false,
         loading: false
    }

    updatePurchaseHandler(ingredients){
        const sum= Object.keys(ingredients)
        .map((igKey)=>{return(ingredients[igKey])})
        .reduce((preVal, currentVal)=>{
            return (preVal+currentVal)
        }, 0)
    this.setState({purchasable: sum >0})}

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let newCount = oldCount + 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        const oldPrice = INGREDIENT_PRICE[type]  // object value can be access through it
        const newPrice = this.state.totalPrice + oldPrice;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    this.updatePurchaseHandler(updatedIngredients);
    }


    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let newCount = oldCount - 1;

        if (this.state.ingredients[type] <= 0) { return }

        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        const oldPrice = INGREDIENT_PRICE[type]  // object value can be access through it
        const newPrice = this.state.totalPrice-oldPrice ;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseHandler(updatedIngredients);}

        purhasingHandler=()=>{
            this.setState({purhasing: true});
        }

        
        purchaseCancelHandler=()=>{
            this.setState({purhasing: false})
        }

        purchaseContinueHandler=()=>{
            this.setState({loading:'true'})
            const order={
                ingredients: this.state.ingredients,
                totalPrice: this.state.totalPrice,
                address: {
                    street: '1',
                    zip: '4500'
                },
                email: 'test@test.com'
            }
            //alert('you continue')
            axios.post('/orders.json', order)   //we send data(order) with post
            //format for firebase orders.json'
    .then((response)=>{
        console.log(response) 
        this.setState({loading: false, purhasing: false})})
        .catch((errors)=>{
            console.log(errors)
        this.setState({loading: false, purhasing: false})
        })
   
        }


    render() {
        let disableBtn = { ...this.state.ingredients };
        for (let key in disableBtn) {
            disableBtn[key] = disableBtn[key] <= 0
        } // salad: true, cheeze: false....
        let orderSummary= <OrderSummary ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        purchaseCancel={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}
        />
        if(this.state.loading){
            orderSummary=<Spinner/>
        }

        return (
            <React.Fragment>
            <Modal purhasing={this.state.purhasing} purchaseCancel={this.purchaseCancelHandler}>
               {orderSummary}
            </Modal>
                <Burger p_ingredients={this.state.ingredients} />
                <BuildControls addedIngre={this.addIngredientHandler}
                    removeIngre={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    disabled={disableBtn}
                    price={this.state.totalPrice}
                    purchasing={this.purhasingHandler} />
                </React.Fragment>
        );
    }
}

export default BurgerBuilder;