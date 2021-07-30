import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {IStore} from "./Redux/reducers/counterReducer";
import {ICustomer, ICustomerState} from "./Redux/reducers/customerReducer";



export const App=()=> {
    const counter=useSelector((state:{counter:IStore}) => state.counter.counter)
    const customer=useSelector((state:{customer:ICustomerState}) => state.customer.customer)
console.log(customer)
    const dispatch=useDispatch()

    const addNumber=(value:number)=>{
        dispatch({type:'ADD_NUMBER',payload:value})
    }
    const subNumber=(value:number)=>{
        dispatch({type:'SUB_NUMBER',payload:value})
    }
    const addCustomer=(name:string)=>{
        const customer={
            name,
            id:Date.now(),
        }
        dispatch({type:'ADD_PEOPLE', payload:customer})
    }

    const subCustomer=(customer:ICustomer)=> {
        dispatch({type: 'SUB_PEOPLE', payload: customer.id})
    }

  return (

      <div className="App">
        <h1>Счетчик <strong>{counter}</strong></h1>
        <hr/>
        <div className="Actions">
          <button onClick={()=>dispatch({
              type: 'INCREMENT'})}>Добавить 1</button>
          <button onClick={()=>dispatch({
              type: 'DECREMENT'})}>Вычесть 1</button>
            <button onClick={()=>addNumber(Number(prompt()))}>Добавить число</button>
            <button onClick={()=>subNumber(Number(prompt()))}>Вычесть число</button>
            <button onClick={()=>addCustomer(String(prompt()))}>Добавить клиента</button>
            <button onClick={()=>addNumber(Number(prompt()))}>Показать всех клиентов</button>
          </div>
          <div>
              {(customer.length > 0) ?
                  <div>
                              {customer.map((customer,index) =>
                                  <div onClick={()=>subCustomer(customer)} key={index} >{customer.name}</div>
                              )}
                          </div>
                          :
                          <div style={{marginTop: 20}}>
                              Клиенты отсутствуют
                          </div>
              }

          </div>
      </div>
  );
}
//onClick={() =>subCustomer}