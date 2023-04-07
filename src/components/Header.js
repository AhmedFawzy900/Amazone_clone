import React, { useReducer } from 'react';
import logo from '../assets/logo2.png' ;
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Cart from './Cart'
import { useState } from 'react';
import {initialState} from './Reducer'
import Reducer from './Reducer'
 const cartLength = () => {
   return localStorage.getItem('basket')
 }
 
 // import { useEffect } from 'react';
 
 function Header() {
   {var user =localStorage.getItem('username') }

const [{cart}] = useReducer(Reducer,initialState);
console.log(cart);
   return (
      <nav className='header'>
       {console.log("header")}
        {/* logo  */}
        <Link to="/">
         <img className='logo' src={logo} alt='logo'/>
        </Link>
        {/* search box */}
        <div className="search">
           <input type="text" className='searchInput'/>
           <SearchIcon className="searchIcon"/>
        </div>

        <div className='headerNav'>
          
            <Link to="/login" className="headerLink">
               <div className="headerOption">
                  

                  
                <span className='headerOpthionOne'>{user ? user : 'Hallo'}</span>
                <span className='headerOpthionTow'>{user ? 'log out' : 'log in'}</span>
               </div>
            </Link>
          
            <Link to="/" className="headerLink">
               <div className="headerOption">
                <span className='headerOpthionOne'>Returns</span>
                <span className='headerOpthionTow'>& Orders</span>
               </div>
            </Link>
          
            <Link to="/" className="headerLink">
               <div className="headerOption">
                <span className='headerOpthionOne'>your</span>
                <span className='headerOpthionTow'>prime</span>
               </div>
            </Link>
          
             <Link to="/checkout" className="headerLink">
                <div className='headerCart'>
                    {/* shopping cart icon */}
                     <ShoppingBasketIcon/>
                    {/* number of item in cart */}
                    
                    <span className='headerOpthionTow cartCount'>
                      {/* {cartLength()} */}
                     </span>
                </div>

             </Link>
        </div>
        {/* cart icon with number */}
    </nav>
  )
}

export default Header