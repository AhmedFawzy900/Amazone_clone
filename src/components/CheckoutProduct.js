import React,{useReducer} from 'react'
import  useState from 'react'
import './CheckoutProduct.css'
import {initialState} from './Reducer'
import Reducer from './Reducer'
// import Remove from './Reducer'
import Checkout from './Checkout'
import Star from '../assets/star.png'
import emptystar from '../assets/emptystar.png'
import { Delete } from '@mui/icons-material'
function CheckoutProduct({id,title,price,image}) {
    //  var remove=true;
    const [state,dispatch] = useReducer(Reducer,initialState);
    // const [deleteItem,setdelete] = useState([state.cart]);
   
    // // remove from basket
function removeFrombasket(){
    
    {console.log("remove")}
   dispatch({
    type:'REMOVE_FROM_CART',
    item:id,
   });
  
}

return (

        <div className='checkoutProduct' id={id} >
            <img className='img' src={image} alt=""/>
            <div className="info">
            <p className="title">{title}</p>
            <p className="price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="rate">
            
            <img className='star' src={Star} alt=''/>
             <img className='star' src={Star} alt=''/>
             <img className='star' src={Star} alt=''/>
             <img className='star' src={Star} alt=''/>
             <img className='star' src={emptystar} alt=''/>
    
            </div>
           
             <button onClick={removeFrombasket}><Delete/></button>
             </div>
    
         </div> 

// ,CheckoutProduct(state) 

  
    
  )
  
  }
export default CheckoutProduct