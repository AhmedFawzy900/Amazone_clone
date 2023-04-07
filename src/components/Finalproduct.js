
import './Finalproduct.css'
import React, { useReducer } from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/StarBorderSharp';
import Cart from './Cart'
import {initialState} from './Reducer'
import Reducer from './Reducer'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Star from '../assets/star.png'
import emptystar from '../assets/emptystar.png'
function Finalproduct({id,title,image,price,percent,thprice}) {
    const [state,dispatch] = useReducer(Reducer,initialState)
    var green=0;
      // add to cart
      const addToBasket= () => {
        {state.cart.push({id,title,image,price})} 
        // console.log(state.cart.length)
        {green=1}
        dispatch({
          type:'ADD_TO_CART',
          item:state,
          
        })
        
        
        {
          localStorage.setItem('basket',state.cart.length)
        }
      }
    
    
      return (
        <div className='product'>
            <div className="productInfo">
            <img src={image} alt=""/>
    
            <p>{title}</p>    
            <div className="rate">
             <img className='star' src={Star} alt=''/>
             <img className='star' src={Star} alt=''/>
             <img className='star' src={Star} alt=''/>
             <img className='star' src={Star} alt=''/>
             <img className='star' src={Star} alt=''/>
           
            </div>
            <p className="price">
            <p className='percent'>-{percent}%</p>
            <small>$</small>
            <strong>{thprice}</strong>
            <p className='thprice'>${price}</p>
            </p>    
            <span>ships to Egypt</span>
            <p className="more">More Buying Choices</p>
            <p>${thprice}2.00  <span className='blue'>(44 used & new offers)</span></p>
            <button onClick={addToBasket} ><ShoppingBasketIcon/></button>
            </div>
    
    
        </div>
      )
}

export default Finalproduct