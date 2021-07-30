const redux = require('redux')


const initialState={
    counter:0
}

const reducer=(state= initialState, action)=>{
    if(action.type==='ADD'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type==='SUB'){
        return {
            counter: state.counter - 1
        }
    }
    if(action.type==='ADD_NUMBER'){
        return {
            counter: state.counter + action.value
        }
    }
return state
}


const store=redux.createStore(reducer)

store.subscribe(()=>{
    store.getState()
})

const addCounter = {
    type: 'ADD'
}

store.dispatch(addCounter)
store.dispatch({tupe:'SUB'})
store.dispatch({tupe:'ADD_NUMBER', value:10})
