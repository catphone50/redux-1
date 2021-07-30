import {add, decrement, increment, sub} from "../../constant";


const initialState={
    counter:0
}

export interface IStore{
    counter: number
}
export interface IAction{
    type:string;
    payload: number;
}

export const counterReducer=(state=initialState, action:IAction):IStore=>{
    switch (action.type) {
        case increment:
            return {
                ...state,
                counter:state.counter+1
            }

        case decrement:
            return {

                ...state,
                counter:state.counter-1
            }

        case add:
            return {
                ...state,
                counter:state.counter+action.payload
            }

        case sub:
            return {
                ...state,
                counter:state.counter-action.payload
            }

        default:
            return state

    }
};

