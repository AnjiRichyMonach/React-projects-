

const redux= require('redux')
const createStore= redux.createStore;

//Reducer
const Reducer= (oldState, action)=>{
    return oldState

}

//store
const store= createStore(Reducer)
console.log(store.getState())

//subscription
store.subscription(()=>{
    console.log('subscription', store.getState())
})

//dispatinng action
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'INC_COUNTER', value: 5})
console.log(store.getState())