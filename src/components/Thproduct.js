import React,{useReducer} from 'react'
import './Thproduct.css'
import './Product.css';
    import {initialState} from './Reducer'
    import Reducer from './Reducer'
    import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
    import Star from '../assets/star.png'
    import emptystar from '../assets/emptystar.png'
    
    function Thproduct({id,title,image,price,percent }) {
    const [state,dispatch] = useReducer(Reducer,initialState)
    var green=0;
      // add to cart
      const addToBasket= () => {
        {state.cart.push({id,title,image,price,percent})} 
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

             <img className='star' src={emptystar} alt=''/>
             <img className='star' src={emptystar} alt=''/>
            </div>
            <p className="price">
            <small>$</small>
            <strong>{price}</strong>
            </p>   
            <div className="save">
                <p>Save {percent}%</p>
                <span>With coupon</span>
                </div> 
            <button onClick={addToBasket} ><ShoppingBasketIcon/></button>
            <span>ships to Egypt</span>
            </div>
    
    
        </div>
      )
}

export default Thproduct