import React , {useReducer, useState} from 'react'
import {initialState} from './Reducer'
import Reducer from './Reducer'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
import Subtotal from "./Subtotal";
import { useStatevalue } from './StateProvider'
function Checkout() {
  // const [state] = useStatevalue();
  
  const [state] = useReducer(Reducer,initialState);

  return (
    <div className='checkout'>
      {/* banner image */}
      {state.cart?.length === 0 ? (
        <div className='noitems'>
          <h2>Your Shopping cart is empty</h2>
        
        </div>

      ) : (
        <div>
        <h2>Your products</h2>
        {console.log(state.cart)}
        {state.cart.map( item => {
          return (
          <CheckoutProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating} />
        );
          })}
      </div>
      )}
    <div className="checkRight">
      <Subtotal/>
    </div>
    </div>
  )
}

export default Checkout