import {addPeople, getPeople, subPeople} from "../../constant";

interface ICustomerAction {
    type: string;
    payload: ICustomer;
}
const defaultState={
    customer:[]
}

export interface ICustomer {
    name:string;
    id: string;
}

export interface ICustomerState {
    customer: ICustomer[];
}


export const customerReducer=(state=defaultState, action:ICustomerAction):ICustomerState=>{
    switch (action.type) {
        case addPeople:
            return {
                ...state,
                customer: [...state.customer, action.payload]
            }
        case subPeople:
            return {
                ...state,
                customer:[...state.customer.filter(customer=> customer['id']!== action.payload)]
            }

        case getPeople:
            return {
                ...state,
                customer:[...state.customer]
            }
        default:
            return{
                ...state,
                customer:[...state.customer]
            }
    }
};